# Kukdu motion states

Each state is a painted Kukdu pose from the Kukdu brand sheet, embedded in its own SVG with a small CSS movement. Each file carries its own artwork (a browser blocks external resources inside an SVG loaded with `<img>`), so none makes a network request.

| State | Asset | Pose | Use |
| --- | --- | --- | --- |
| Idle | `kukdu-idle.svg` | The portrait, smiling | Launcher and resting panel header. Very low-motion breathing and head tilt. |
| Listening | `kukdu-listening.svg` | Wings folded, attentive | While the composer has meaningful user input or Kukdu is waiting for submit. |
| Thinking | `kukdu-thinking.svg` | Wing on chin, a question mark | Only during deterministic routing/search work. Do not artificially delay an answer to show it. |
| Talking | `kukdu-talking.svg` | Pointing, explaining | Briefly while an answer is inserted/rendered. |
| Success | `kukdu-success.svg` | Wings up, celebrating | One-shot acknowledgement after a successful direct action. Plays once. |

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
