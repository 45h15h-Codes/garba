(function install(root, factory) {
  var api = factory();

  if (root) root.GarbaDanceMotion = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof globalThis === 'object' ? globalThis : this, function createApi() {
  'use strict';

  function unmapped(reason, details) {
    var result = { status: 'unmapped', reason: reason };
    if (details) Object.assign(result, details);
    return result;
  }

  function finiteNonNegative(value) {
    return Number.isFinite(value) && value >= 0;
  }

  function readSegments(beatMap) {
    if (!beatMap || typeof beatMap !== 'object') {
      return { error: 'missing-beat-map' };
    }

    var hasSegments = Object.prototype.hasOwnProperty.call(beatMap, 'segments');
    var hasAnchors = Object.prototype.hasOwnProperty.call(beatMap, 'anchors');
    if (hasSegments && hasAnchors) return { error: 'ambiguous-beat-map' };

    var segments;
    if (hasSegments) {
      if (!Array.isArray(beatMap.segments) || beatMap.segments.length === 0) {
        return { error: 'invalid-beat-map' };
      }
      segments = beatMap.segments;
    } else if (hasAnchors) {
      if (!Array.isArray(beatMap.anchors) || beatMap.anchors.length < 2) {
        return { error: 'invalid-beat-map' };
      }
      segments = [{ id: null, anchors: beatMap.anchors }];
    } else {
      return { error: 'missing-beat-anchors' };
    }

    var normalized = [];
    var previousEndTime = -Infinity;
    var previousEndBeat = -Infinity;

    for (var i = 0; i < segments.length; i += 1) {
      var segment = segments[i];
      if (!segment || typeof segment !== 'object' || !Array.isArray(segment.anchors) || segment.anchors.length < 2) {
        return { error: 'invalid-beat-segment', segmentIndex: i };
      }

      var anchors = segment.anchors;
      var priorTime = -Infinity;
      var priorBeat = -Infinity;
      for (var j = 0; j < anchors.length; j += 1) {
        var anchor = anchors[j];
        if (!anchor || typeof anchor !== 'object' ||
            !finiteNonNegative(anchor.mediaTimeSeconds) ||
            !finiteNonNegative(anchor.beatPosition) ||
            anchor.mediaTimeSeconds <= priorTime ||
            anchor.beatPosition <= priorBeat) {
          return { error: 'invalid-beat-anchor', segmentIndex: i, anchorIndex: j };
        }
        priorTime = anchor.mediaTimeSeconds;
        priorBeat = anchor.beatPosition;
      }

      var first = anchors[0];
      var last = anchors[anchors.length - 1];
      if (first.mediaTimeSeconds <= previousEndTime || first.beatPosition < previousEndBeat) {
        return { error: 'overlapping-or-reversed-beat-segments', segmentIndex: i };
      }

      normalized.push({
        id: typeof segment.id === 'string' ? segment.id : null,
        anchors: anchors.map(function copyAnchor(anchor) {
          return { beatPosition: anchor.beatPosition, mediaTimeSeconds: anchor.mediaTimeSeconds };
        }),
        startTime: first.mediaTimeSeconds,
        endTime: last.mediaTimeSeconds
      });
      previousEndTime = last.mediaTimeSeconds;
      previousEndBeat = last.beatPosition;
    }

    return { segments: normalized };
  }

  function resolveBeatFromSegments(segments, mediaTimeSeconds) {
    for (var i = 0; i < segments.length; i += 1) {
      var segment = segments[i];
      if (mediaTimeSeconds < segment.startTime || mediaTimeSeconds > segment.endTime) continue;

      var anchors = segment.anchors;
      if (mediaTimeSeconds === segment.startTime) {
        return { status: 'mapped', songBeatPosition: anchors[0].beatPosition, segmentIndex: i, segmentId: segment.id };
      }
      if (mediaTimeSeconds === segment.endTime) {
        return { status: 'mapped', songBeatPosition: anchors[anchors.length - 1].beatPosition, segmentIndex: i, segmentId: segment.id };
      }

      for (var j = 0; j < anchors.length - 1; j += 1) {
        var left = anchors[j];
        var right = anchors[j + 1];
        if (mediaTimeSeconds < left.mediaTimeSeconds || mediaTimeSeconds > right.mediaTimeSeconds) continue;

        var mediaFraction = (mediaTimeSeconds - left.mediaTimeSeconds) /
          (right.mediaTimeSeconds - left.mediaTimeSeconds);
        var songBeatPosition = left.beatPosition + mediaFraction * (right.beatPosition - left.beatPosition);
        return { status: 'mapped', songBeatPosition: songBeatPosition, segmentIndex: i, segmentId: segment.id };
      }
    }

    var firstSegment = segments[0];
    var lastSegment = segments[segments.length - 1];
    if (mediaTimeSeconds < firstSegment.startTime || mediaTimeSeconds > lastSegment.endTime) {
      return unmapped('outside-coverage');
    }
    return unmapped('no-beat-segment');
  }

  function resolveBeatPosition(beatMap, mediaTimeSeconds) {
    if (!finiteNonNegative(mediaTimeSeconds)) return unmapped('invalid-media-time');

    var parsed = readSegments(beatMap);
    if (parsed.error) return unmapped(parsed.error, parsed.segmentIndex === undefined ? null : { segmentIndex: parsed.segmentIndex });
    return resolveBeatFromSegments(parsed.segments, mediaTimeSeconds);
  }

  function resolvePhrasePhase(options) {
    options = options || {};
    var songBeatPosition = options.songBeatPosition;
    var phraseStartBeat = options.phraseStartBeat;
    var phraseLengthBeats = options.phraseLengthBeats;
    var repeat = options.repeat;

    if (!finiteNonNegative(songBeatPosition) || !finiteNonNegative(phraseStartBeat) ||
        !Number.isFinite(phraseLengthBeats) || phraseLengthBeats <= 0 ||
        typeof repeat !== 'boolean') {
      return { status: 'invalid', reason: 'invalid-phrase-input' };
    }

    var elapsedBeats = songBeatPosition - phraseStartBeat;
    if (elapsedBeats < 0) {
      return {
        status: 'waiting',
        phraseIndex: 0,
        phraseBeatPosition: 0,
        progress: 0,
        repeat: repeat
      };
    }

    if (!repeat && elapsedBeats >= phraseLengthBeats) {
      return {
        status: 'complete',
        phraseIndex: 0,
        phraseBeatPosition: phraseLengthBeats,
        progress: 1,
        repeat: false
      };
    }

    var phraseIndex = repeat ? Math.floor(elapsedBeats / phraseLengthBeats) : 0;
    var phraseBeatPosition = repeat
      ? elapsedBeats - phraseIndex * phraseLengthBeats
      : elapsedBeats;

    return {
      status: 'playing',
      phraseIndex: phraseIndex,
      phraseBeatPosition: phraseBeatPosition,
      progress: phraseBeatPosition / phraseLengthBeats,
      repeat: repeat
    };
  }

  function createMotionResolver(options) {
    options = options || {};
    var parsed = readSegments(options.beatMap);
    var phraseOptions = {
      phraseStartBeat: options.phraseStartBeat,
      phraseLengthBeats: options.phraseLengthBeats,
      repeat: options.repeat
    };

    return function resolveAtMediaTime(mediaTimeSeconds) {
      if (!finiteNonNegative(mediaTimeSeconds)) return unmapped('invalid-media-time');
      if (parsed.error) {
        return unmapped(parsed.error, parsed.segmentIndex === undefined ? null : { segmentIndex: parsed.segmentIndex });
      }

      var beat = resolveBeatFromSegments(parsed.segments, mediaTimeSeconds);
      if (beat.status !== 'mapped') return beat;

      var phase = resolvePhrasePhase(Object.assign({}, phraseOptions, {
        songBeatPosition: beat.songBeatPosition
      }));
      if (phase.status === 'invalid') {
        return unmapped(phase.reason, { segmentIndex: beat.segmentIndex, segmentId: beat.segmentId });
      }

      return Object.assign({}, phase, {
        songBeatPosition: beat.songBeatPosition,
        segmentIndex: beat.segmentIndex,
        segmentId: beat.segmentId
      });
    };
  }

  function resolveMotionClock(options) {
    options = options || {};
    return createMotionResolver(options)(options.mediaTimeSeconds);
  }

  return Object.freeze({
    resolveBeatPosition: resolveBeatPosition,
    resolvePhrasePhase: resolvePhrasePhase,
    createMotionResolver: createMotionResolver,
    resolveMotionClock: resolveMotionClock
  });
});
