/*
 * PlayGarba Immersive view and the More card.
 *
 * Simple and Immersive are complete, mutually exclusive player surfaces. The production player remains
 * mounted as the playback owner while the 3D Garbo venue is shown in an isolated frame.
 *
 * More gathers the less-used top-bar actions (share, Garba Circle, My Garba, Atmosphere). A separate
 * switch below More chooses the player renderer. Proxy rows still act through the original buttons.
 */
(function () {
  'use strict';

  var VIEW_KEY = 'garba:view';
  var app = document.getElementById('app');
  if (!app || !window.GARBA_IMMERSIVE_PLAYER || window.GARBA_IMMERSIVE_VIEW) return;

  var view = 'simple';
  // A first visit opens Immersive, standing by the stage in the indoor stadium; a visitor's own choice is kept after
  // that. Automated test browsers keep Simple unless a test opts in, so the Simple player's harnesses test Simple.
  var ATMO_KEY = 'garbo-proto-atmosphere';
  var firstVisit = false;
  try {
    var savedView = localStorage.getItem(VIEW_KEY);
    if (savedView === 'immersive') view = 'immersive';
    else if (savedView == null && !navigator.webdriver) { view = 'immersive'; firstVisit = true; }
    if (firstVisit) {
      var atmo = JSON.parse(localStorage.getItem(ATMO_KEY) || '{}') || {};
      if (!atmo.venue && !atmo.listener) { atmo.venue = 'stadium'; atmo.listener = 'stage'; localStorage.setItem(ATMO_KEY, JSON.stringify(atmo)); }
    }
  } catch (e) { /* storage unavailable */ }

  /* ---------- complete embedded prototype ---------- */
  var overlay = null, frame = null, syncTimer = 0, catalogueSent = false, catalogueSignature = '';
  var nonstopSets = [], nonstopSetsStatus = 'loading', nonstopPromise = null;
  var CHANNEL = 'playgarba:immersive-prototype';
  function ensureFrame() {
    if (overlay) return;
    overlay = document.createElement('section');
    overlay.className = 'garbo-prototype-overlay';
    overlay.setAttribute('aria-label', 'Immersive Garbo player'); overlay.hidden = true;
    frame = document.createElement('iframe'); frame.className = 'garbo-prototype-frame';
    frame.title = 'Garbo player prototype'; frame.allow = 'autoplay; clipboard-write; fullscreen'; frame.tabIndex = 0;
    overlay.append(frame); document.body.appendChild(overlay);
    frame.addEventListener('load', function () { sendSnapshot(true); armFirstTap(); });
  }

  /* ---------- the first tap starts the music ----------
     Browsers only let sound start from a visitor's own tap. Until the song is playing, the first tap on the page
     that isn't on a control starts it, wherever it lands: on the venue inside the frame or on the page around it. */
  var tapArmed = false, tapDocs = [], hint = null;
  var CONTROL = 'button, a, input, select, textarea, label, summary, [role="button"], [role="switch"], [role="slider"], [role="tab"], [contenteditable]';
  function isPlaying() { try { return !!window.GARBA_IMMERSIVE_PLAYER.snapshot().playing; } catch (e) { return false; } }
  function onFirstTap(event) {
    if (view !== 'immersive' || !tapArmed) return;
    var target = event.target;
    if (target && target.closest && target.closest(CONTROL)) { if (isPlaying()) disarmFirstTap(); return; }
    disarmFirstTap();
    if (!isPlaying()) { window.GARBA_IMMERSIVE_PLAYER.action('play'); sendSnapshot(false); }
  }
  function showHint(on) {
    if (on && !hint && overlay) {
      hint = document.createElement('p');
      hint.className = 'garbo-first-tap';
      hint.setAttribute('aria-hidden', 'true');
      hint.textContent = 'Tap anywhere to start the garba';
      // High over the stage, clear of the view pill down the right-hand side (on a phone it shifts left of centre)
      var narrow = window.innerWidth < 600;
      hint.style.cssText = 'position:absolute;left:' + (narrow ? 'calc(50% - 46px)' : '50%') + ';top:20%;transform:translate(-50%,-50%);margin:0;padding:10px 18px;border-radius:22px;'
        + 'max-width:' + (narrow ? 'calc(100% - 124px)' : 'calc(100% - 150px)') + ';box-sizing:border-box;text-align:center;'
        + 'background:rgba(11,6,5,.62);color:#f6e7c8;font:600 15px/1.3 system-ui,sans-serif;letter-spacing:.01em;pointer-events:none;'
        + 'z-index:2;transition:opacity .6s ease;opacity:0;';
      overlay.appendChild(hint);
      requestAnimationFrame(function () { if (hint) hint.style.opacity = '1'; });
    } else if (!on && hint) {
      var h = hint; hint = null; h.style.opacity = '0'; setTimeout(function () { h.remove(); }, 650);
    }
  }
  function armFirstTap() {
    if (view !== 'immersive' || isPlaying()) { disarmFirstTap(); return; }
    tapArmed = true;
    var docs = [document];
    try { if (frame && frame.contentDocument) docs.push(frame.contentDocument); } catch (e) { /* not same-origin */ }
    // The frame's document is replaced as its page loads, so each check catches the current one
    docs.forEach(function (d) { if (tapDocs.indexOf(d) < 0) { d.addEventListener('pointerdown', onFirstTap, true); tapDocs.push(d); } });
    showHint(true);
  }
  function disarmFirstTap() {
    tapArmed = false;
    tapDocs.forEach(function (d) { try { d.removeEventListener('pointerdown', onFirstTap, true); } catch (e) { /* frame gone */ } });
    tapDocs = [];
    showHint(false);
  }
  function sendSnapshot(includeCatalogue) {
    if (!frame || !frame.contentWindow || view !== 'immersive') return;
    var snapshot = window.GARBA_IMMERSIVE_PLAYER.snapshot();
    var sendCatalogue = includeCatalogue || !catalogueSent || snapshot.catalogueSignature !== catalogueSignature;
    if (sendCatalogue) {
      snapshot = window.GARBA_IMMERSIVE_PLAYER.snapshot({ includeCatalogue: true });
      snapshot.nonstopSets = nonstopSets;
      snapshot.nonstopSetsStatus = nonstopSetsStatus;
    }
    if (Array.isArray(snapshot.songs) && snapshot.songs.length) {
      catalogueSent = true;
      catalogueSignature = snapshot.catalogueSignature || '';
    }
    frame.contentWindow.postMessage({ channel: CHANNEL, type: 'state', snapshot: snapshot }, location.origin);
  }
  function syncNonstopCatalogue() {
    if (nonstopPromise) return nonstopPromise;
    if (typeof window.GARBA_IMMERSIVE_PLAYER.loadNonstopCatalogue !== 'function') {
      nonstopSetsStatus = 'error';
      sendSnapshot(true);
      return Promise.resolve([]);
    }
    nonstopPromise = window.GARBA_IMMERSIVE_PLAYER.loadNonstopCatalogue().then(function (sets) {
      nonstopSets = Array.isArray(sets) ? sets : [];
      nonstopSetsStatus = 'ready';
      sendSnapshot(true);
      return nonstopSets;
    }).catch(function () {
      nonstopSets = [];
      nonstopSetsStatus = 'error';
      sendSnapshot(true);
      return [];
    });
    return nonstopPromise;
  }
  /* ---------- an aarti's recording on the stage screen ----------
     In an aarti the scene leaves its stage screen clear and the page inside the frame goes see-through there. The
     YouTube player already playing the song is placed right behind that screen, under the frame, so the singers and
     the stage's lights stay in front of the picture. It is still the one player: the sound never doubles and the
     picture keeps time with it. The rest of the window stays the venue's ink. */
  var screenRect = null;
  function placeScreen(rect) {
    var root = document.documentElement, dock = document.getElementById('youtubeStage');
    var ok = !!(rect && view === 'immersive' && overlay && !overlay.hidden && dock && dock.classList.contains('open') && dock.querySelector('iframe')
      && [rect.x, rect.y, rect.w, rect.h].every(Number.isFinite) && rect.w > 0 && rect.h > 0);
    screenRect = ok ? rect : null;
    root.classList.toggle('garba-stage-screen', ok);
    if (!ok) return;
    // Filled edge to edge and centred, the way a stage screen shows a video, and a little larger than the screen so
    // the player's own edges (its title and logo) fall outside it: only the picture shows
    var vw = rect.w, vh = rect.w * 9 / 16;
    if (vh < rect.h) { vh = rect.h; vw = rect.h * 16 / 9; }
    vw *= 1.16; vh *= 1.16;
    [['x', rect.x], ['y', rect.y], ['w', rect.w], ['h', rect.h], ['vw', vw], ['vh', vh]].forEach(function (kv) { root.style.setProperty('--stage-screen-' + kv[0], Math.round(kv[1]) + 'px'); });
  }
  function onMessage(event) {
    if (!frame || event.origin !== location.origin || event.source !== frame.contentWindow) return;
    var message = event.data;
    if (!message || message.channel !== CHANNEL) return;
    if (message.type === 'view') { setView(message.view); return; }
    if (message.type === 'screen') { placeScreen(message.rect || null); return; }
    if (message.type === 'ready') {
      catalogueSent = false;
      sendSnapshot(true);
      if (typeof window.GARBA_IMMERSIVE_PLAYER.syncCatalogue === 'function') {
        window.GARBA_IMMERSIVE_PLAYER.syncCatalogue().then(function () {
          if (view === 'immersive') sendSnapshot(true);
        }).catch(function () { /* keep the current player snapshot available */ });
      }
    }
    else if (message.type === 'action' && typeof message.action === 'string') {
      if (message.action === 'load-nonstop-catalogue') {
        syncNonstopCatalogue();
      } else {
        // Private Garba Circle's dialog opens above the scene, so the listener stays in Immersive
        var actionResult = window.GARBA_IMMERSIVE_PLAYER.action(message.action, message.value);
        if (message.action === 'nonstop' && typeof message.requestId === 'string') {
          Promise.resolve(actionResult).then(function (ok) {
            if (ok || !frame || !frame.contentWindow) return;
            frame.contentWindow.postMessage({ channel: CHANNEL, type: 'action-result', action: 'nonstop', requestId: message.requestId, ok: false }, location.origin);
          }, function () {
            if (!frame || !frame.contentWindow) return;
            frame.contentWindow.postMessage({ channel: CHANNEL, type: 'action-result', action: 'nonstop', requestId: message.requestId, ok: false }, location.origin);
          });
        }
        sendSnapshot(false);
      }
    } else if (message.type === 'exit') setView('simple');
  }
  function startPrototype() {
    ensureFrame(); overlay.hidden = false;
    closeCard(false);
    app.setAttribute('aria-hidden', 'true'); app.inert = true;
    if (!frame.src) {
      var isLocalDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
      var protoPath = isLocalDev ? './public-site/garbo/prototype-3d/?live=1&embed=1&v=20261001-7' : './garbo/prototype-3d/?live=1&embed=1&v=20261001-7';
      frame.src = new URL(protoPath, location.href).href;
    }
    window.addEventListener('message', onMessage);
    sendSnapshot(true);
    clearInterval(syncTimer);
    syncTimer = setInterval(function () { sendSnapshot(!catalogueSent); if (screenRect) placeScreen(screenRect); if (tapArmed) { if (isPlaying()) disarmFirstTap(); else armFirstTap(); } }, 500);
    if (frame.contentDocument && frame.contentDocument.readyState === 'complete') armFirstTap();
    frame.focus({ preventScroll: true });
  }
  function stopPrototype() {
    var wasOpen = overlay && !overlay.hidden;
    clearInterval(syncTimer); syncTimer = 0;
    disarmFirstTap();
    placeScreen(null);
    window.removeEventListener('message', onMessage);
    if (overlay) overlay.hidden = true;
    app.removeAttribute('aria-hidden'); app.inert = false;
    catalogueSent = false; catalogueSignature = '';
    nonstopPromise = null;
    if (wasOpen) {
      var simpleSwitch = document.querySelector('[data-view-switch]');
      if (simpleSwitch) simpleSwitch.focus({ preventScroll: true });
      else if (moreButton) moreButton.focus({ preventScroll: true });
    }
  }

  // In Immersive, Ask Kukdu's panel (drawn by this page over the 3D venue) takes the venue's own card: deep ink glass, a
  // brass rim and a faint glow along the top, ivory type with brass for what you can press. Simple keeps Kukdu's own look.
  var KUKDU_IMMERSIVE_CSS = [
    'html.garba-immersive .ask-scrim{background:rgba(5,3,2,.55)}',
    'html.garba-immersive .ask-panel{color:#f3e6d0;background:radial-gradient(120% 60% at 50% 0%,rgba(214,176,111,.12),transparent 60%),rgba(22,14,11,.95);border:1px solid rgba(214,176,111,.22);box-shadow:0 24px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,240,210,.06);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}',
    'html.garba-immersive .ask-grab{background:rgba(243,230,208,.25)}',
    'html.garba-immersive .ask-head{background:transparent;color:#f3e6d0;border-bottom:1px solid rgba(214,176,111,.22)}',
    'html.garba-immersive .ask-mark{box-shadow:0 0 0 1.5px rgba(214,176,111,.7)}',
    'html.garba-immersive .ask-ib,html.garba-immersive .ask-new{border-color:rgba(243,230,208,.18);background:rgba(243,230,208,.06);color:#f3e6d0}',
    'html.garba-immersive .ask-ib:hover,html.garba-immersive .ask-new:hover{background:rgba(243,230,208,.12)}',
    'html.garba-immersive .ask-hello{color:#f3e6d0}html.garba-immersive .ask-sub{color:#cdbca3}',
    'html.garba-immersive .ask-starter,html.garba-immersive .ask-related button{border-color:rgba(243,230,208,.12);background:#221612;color:#f3e6d0}',
    'html.garba-immersive .ask-starter:hover,html.garba-immersive .ask-starter:focus-visible,html.garba-immersive .ask-related button:hover{border-color:#d6b06f;background:rgba(214,176,111,.14);color:#f3e6d0}',
    'html.garba-immersive .ask-browse,html.garba-immersive .ask-src{color:#d6b06f}',
    'html.garba-immersive .ask-faq details{border-color:rgba(243,230,208,.12);background:#221612;box-shadow:none}html.garba-immersive .ask-faq summary{color:#f3e6d0}html.garba-immersive .ask-faq summary:after{color:#d6b06f}',
    'html.garba-immersive .ask-faq-question{color:#cdbca3}html.garba-immersive .ask-faq-question:hover{background:rgba(243,230,208,.06)}',
    'html.garba-immersive .ask-q{background:rgba(214,176,111,.16);color:#f3e6d0;border:1px solid rgba(214,176,111,.22);box-shadow:none}',
    'html.garba-immersive .ask-a-avatar{box-shadow:0 0 0 1.5px rgba(214,176,111,.6)}',
    'html.garba-immersive .ask-a-content{background:#221612;color:#f3e6d0;border-color:rgba(243,230,208,.12);box-shadow:none}',
    'html.garba-immersive .ask-a .ask-tag{background:rgba(214,176,111,.12);color:#d6b06f}html.garba-immersive .ask-a .ask-tag.not-yet{color:#d8453a}',
    'html.garba-immersive .ask-a h3{color:#ebdcc0}html.garba-immersive .ask-answer-copy{color:#cdbca3}',
    'html.garba-immersive .ask-items li,html.garba-immersive .ask-action-set,html.garba-immersive .ask-related{border-top-color:rgba(243,230,208,.12)}',
    'html.garba-immersive .ask-items strong{color:#f3e6d0}html.garba-immersive .ask-items span,html.garba-immersive .ask-action-label,html.garba-immersive .ask-related-label{color:#978672}',
    'html.garba-immersive .ask-act{border-color:rgba(214,176,111,.22);background:transparent;color:#d6b06f}',
    'html.garba-immersive .ask-act.primary,html.garba-immersive .ask-act:hover{border-color:#d6b06f;background:#d6b06f;color:#0b0605;box-shadow:none}',
    'html.garba-immersive .ask-compose{border-top-color:rgba(243,230,208,.12);background:rgba(11,6,5,.5)}',
    'html.garba-immersive .ask-compose input{border-color:rgba(243,230,208,.12);background:#221612;color:#f3e6d0;box-shadow:none}html.garba-immersive .ask-compose input::placeholder{color:#978672}',
    'html.garba-immersive .ask-compose button{border:0;background:#d6b06f;color:#0b0605}html.garba-immersive .ask-compose button:hover{background:#e2c083}',
    'html.garba-immersive .ask-panel :focus-visible{outline-color:#d6b06f}'
  ].join('');
  function kukduImmersiveStyle() {
    if (document.getElementById('kukduImmersiveStyle')) return;
    var st = document.createElement('style'); st.id = 'kukduImmersiveStyle'; st.textContent = KUKDU_IMMERSIVE_CSS; document.head.appendChild(st);
  }

  function setView(next, quiet) {
    view = next === 'immersive' ? 'immersive' : 'simple';
    try { localStorage.setItem(VIEW_KEY, view); } catch (e) { /* storage unavailable */ }
    app.classList.toggle('view-immersive', view === 'immersive');
    document.documentElement.classList.toggle('garba-immersive', view === 'immersive');
    if (view === 'immersive') kukduImmersiveStyle();
    if (view === 'immersive') startPrototype(); else stopPrototype();
    renderViewChoice();
    if (!quiet) announce(view === 'immersive' ? 'Immersive view on' : 'Simple view on');
  }

  function announce(message) {
    var live = document.getElementById('immersiveViewStatus');
    if (live) { live.textContent = ''; setTimeout(function () { live.textContent = message; }, 30); }
  }

  /* ---------- the More card ---------- */
  var moreButton = document.getElementById('moreButton');
  var card = document.getElementById('moreCard');
  var opener = null;

  function renderViewChoice() {
    document.querySelectorAll('[data-view-switch]').forEach(function (b) { b.setAttribute('aria-checked', String(view === 'immersive')); });
  }
  // A row shows the state of the button it stands for, and only when that button exists on this page
  function renderRows() {
    if (!card) return;
    card.querySelectorAll('[data-proxy]').forEach(function (row) {
      var target = document.getElementById(row.dataset.proxy);
      row.hidden = !target;
      if (!target) return;
      var pressed = target.getAttribute('aria-pressed');
      if (pressed != null) row.setAttribute('aria-pressed', pressed); else row.removeAttribute('aria-pressed');
      var badge = row.querySelector('.more-badge'), src = target.querySelector('.utility-badge');
      if (badge) badge.textContent = src ? src.textContent : '';
    });
  }
  function openCard() {
    if (!card || !moreButton) return;
    opener = document.activeElement;
    renderRows(); renderViewChoice();
    card.hidden = false; moreButton.setAttribute('aria-expanded', 'true');
    var first = card.querySelector('[data-view][aria-pressed="true"]') || card.querySelector('button');
    if (first) first.focus();
  }
  function closeCard(restore) {
    if (!card || card.hidden) return;
    card.hidden = true; moreButton.setAttribute('aria-expanded', 'false');
    if (restore && moreButton) moreButton.focus();
  }

  if (moreButton && card) {
    moreButton.addEventListener('click', function (e) { e.stopPropagation(); if (card.hidden) openCard(); else closeCard(true); });
    card.addEventListener('click', function (e) {
      var row = e.target.closest('[data-proxy]');
      if (row) {
        var target = document.getElementById(row.dataset.proxy);
        closeCard(false);
        if (target) target.click();
        return;
      }
      if (e.target.closest('[data-more-close]')) closeCard(true);
    });
    document.addEventListener('click', function (e) { if (!card.hidden && !card.contains(e.target) && e.target !== moreButton && !moreButton.contains(e.target)) closeCard(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !card.hidden) { e.preventDefault(); closeCard(true); } });
  }

  document.addEventListener('click', function (e) {
    var button = e.target.closest('[data-view-switch]');
    if (button) setView(view === 'immersive' ? 'simple' : 'immersive');
  });

  /* ---------- wiring ---------- */
  window.addEventListener('garba:playback-state-change', function () { sendSnapshot(false); });
  window.addEventListener('garba:atmosphere-change', function () { sendSnapshot(false); });

  window.GARBA_IMMERSIVE_VIEW = {
    get view() { return view; },
    set view(v) { setView(v, true); },
    get sceneReady() { return !!frame && !overlay.hidden; },
  };

  setView(view, true);
})();
