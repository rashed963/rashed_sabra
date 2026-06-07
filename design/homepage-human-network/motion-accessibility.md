# Motion And Accessibility Specification

## Principle

The hero interaction communicates a living system under human direction. Motion is decorative enhancement, not required content or navigation.

## Motion Scope

- Motion is concentrated in the hero.
- A second, non-interactive motion area is permitted only in the approved mid-page space manifesto.
- The portrait remains stable.
- Network paths may drift subtly, respond to pointer proximity, and converge toward a warm decision signal.
- Pointer response must be restrained and bounded; no chasing cursor or rapid parallax.
- Outside the hero and space manifesto, sections use no continuous background animation.
- Scroll-triggered transitions, if later approved, are limited to opacity and small transforms.

## Space Manifesto Motion

- Use a short, seamless, muted looping WebM/MP4 asset with a static poster image.
- Do not use GIF as the production format.
- The video is decorative: empty alt semantics, no controls required, and no information carried by motion.
- Add a dark overlay so the English statement remains readable at every frame.
- Do not autoplay audio.
- Pause or remove the video when reduced motion is requested.
- Loading or playback failure displays the poster with the complete statement.
- Avoid rapid travel, camera rotation, flashes, meteors, or high-contrast bursts.

## Technical Constraints For Prototype

- Prefer SVG for paths, nodes, masks, and lightweight interaction.
- Do not introduce Canvas, WebGL, Three.js, Vanta.js, or a new animation dependency at Gate 4 unless SVG cannot demonstrate the approved behavior.
- Animate `transform` and `opacity`.
- Do not animate layout properties such as width, height, top, left, or margins.
- Do not apply `will-change` globally.
- Decorative layers use `pointer-events: none`.

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Disable pointer-reactive movement.
- Disable path drawing, pulsing, drifting, and parallax.
- Replace the space video with its static poster.
- Present a complete static network composition.
- Keep all text, CTAs, portrait, pillars, and proof unchanged.
- Do not replace disabled motion with flashing or abrupt fades.

## Keyboard And Focus

- All links and buttons remain reachable in logical DOM order.
- Focus order follows the Arabic reading sequence.
- Focus indication uses a clearly visible solid outline of at least 2px with sufficient contrast.
- Network, portrait overlays, and warm signals cannot obscure focus indicators.
- Hover-only information is prohibited.
- The primary and secondary CTAs retain visible labels; no icon-only hero controls.

## Contrast And Readability

- Normal body text targets at least 4.5:1 contrast.
- Large text and non-text UI targets applicable WCAG contrast requirements.
- Teal and warm accents are not the only means of communicating state.
- Motion and glow may not reduce the apparent contrast of Arabic text.
- Long text never sits directly over active network paths.

## Interaction Safety

- No flashing content.
- No automatic audio.
- No motion that follows the pointer beyond the hero boundary.
- Interaction must not trap the pointer, keyboard, or scroll.
- The hero remains understandable on touch devices with no hover state.
- Loading failure leaves a readable static layout.

## Prototype Review States

The polished mockup and prototype must show:

1. Default desktop
2. Pointer-active desktop
3. Keyboard-focus desktop
4. Reduced-motion desktop
5. Touch/mobile static behavior
6. Portrait-loading or portrait-failure fallback
7. Space-video poster and playback-failure fallback

## Gate Criteria

- Identity and CTAs remain clear with motion disabled.
- No interactive control is hidden under the visual layer.
- The hero remains usable by keyboard and touch.
- Motion adds meaning and character without becoming the page’s primary subject.
- The space statement remains fully legible over both video and poster states.
