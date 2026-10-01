# Kukdu motion states

All Kukdu motion assets reuse `kukdu-avatar.svg` as the canonical artwork. They do not duplicate the rooster drawing and make no external network request.

| State | Asset | Use |
| --- | --- | --- |
| Idle | `kukdu-idle.svg` | Launcher and resting panel header. Very low-motion breathing/head tilt with an occasional blink. |
| Listening | `kukdu-listening.svg` | While the composer has meaningful user input or Kukdu is waiting for submit. |
| Thinking | `kukdu-thinking.svg` | Only during deterministic routing/search work. Do not artificially delay an answer to show it. |
| Talking | `kukdu-talking.svg` | Briefly while an answer is inserted/rendered. |
| Success | `kukdu-success.svg` | One-shot acknowledgement after a successful direct action. Do not loop. |

## Runtime contract

A future shared Kukdu component should change only the image `src`/state attribute. The launcher, panel header and answer avatar should not each carry their own rooster drawing.

Suggested mapping:

- default/open panel: idle
- non-empty composer focus/input: listening
- route/catalogue/page lookup: thinking
- answer insertion: talking, then idle
- successful action that remains in the panel: success, then idle

Animations are embedded in the local SVG assets. Each asset contains its own `prefers-reduced-motion: reduce` fallback, so reduced-motion users receive a static frame. The runtime should also avoid unnecessary state churn under reduced motion.

## Performance

- No GIF/video.
- No Lottie/Rive dependency.
- No remote asset request.
- Keep the 32–48 px launcher visually quiet. Idle motion must remain subtle while music is playing.
- Preload only the state assets used by the open support panel; the launcher needs idle only until interaction.
