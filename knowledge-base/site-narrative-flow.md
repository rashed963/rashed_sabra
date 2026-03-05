# Site Narrative Flow

## Purpose
Keep a consistent visitor mental model across pages and prevent disconnected browsing.

## Current narrative path
1. `Home`: identity and positioning.
2. `Journey`: proof through milestones and themes.
3. `Blog`: thinking and operating principles.

## Implementation notes
- In `src/pages/Index.tsx`, the role line is treated as the primary signal.
- In `src/pages/Index.tsx`, rotating copy is intentionally secondary to avoid diluting positioning.
- In `src/pages/Index.tsx`, a proof strip (milestones/themes/posts counts) reinforces authority with concrete signals.
- In `src/pages/Journey.tsx`, a bridge card sends users to `/blog` after timeline consumption.
- In `src/pages/Journey.tsx`, each theme card surfaces related blog posts for direct topic continuation.
- In `src/components/Timeline.tsx`, each milestone exposes concise outcome chips to make impact scannable.
- In `src/pages/Blog.tsx`, `?topic=` query filters preserve context when arriving from `Journey`.
- In `src/features/blog/topics.ts`, topic classification is centralized to keep filtering and linking consistent.
- In `src/components/NeuralBackground.tsx`, interaction priority is protected with `pointer-events-none` and reduced-motion safeguards.
- In `src/pages/Index.tsx` and `src/pages/BlogPost.tsx`, contact CTA placement gives a clear post-read next action.
- In `src/App.tsx`, route-level lazy loading keeps initial load focused on the current page.

## Editing rule
When updating any page copy or CTA, verify that the `Home -> Journey -> Blog` progression remains explicit.
