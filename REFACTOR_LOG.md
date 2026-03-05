# Refactor Log

## Phase 1: Feature Structure and Deduplication
- Moved blog domain model/data/selectors into `src/features/blog`.
- Added reusable `PostCard` for blog list rendering to eliminate duplicated markup between home and blog pages.
- Moved journey milestone model/data into `src/features/journey`.
- Updated pages/components to depend on feature modules instead of cross-layer imports.

## Phase 2: Dead Code Cleanup
- Removed obsolete files: `src/data/blog-posts.ts`, `src/data/milestones.ts`, `src/components/TimelineMilestone.tsx`, `src/App.css`.
- Removed unused legacy content assets under `src/content`.

## Phase 3: Centralized Frontend Change Points
- Added `src/config/routes.ts` and `src/config/site.ts` as central sources for routes, navigation, profile, and external links.
- Added `src/features/copy/ar.ts` as a central source for UI copy.
- Added `src/features/journey/content.ts` for journey themes.
- Rewired header, footer, routes, and page-level copy to consume centralized config/content files.

## Validation
- Lint, tests, and production build must pass after each phase.

## Phase 4: Positioning and Narrative Flow
- Strengthened homepage identity hierarchy in `src/pages/Index.tsx` by increasing visual weight for the primary role line and reducing emphasis on rotating helper copy.
- Improved hero readability by slightly widening the bio measure to keep the primary positioning statement legible.
- Added a narrative bridge section in `src/pages/Journey.tsx` that directs visitors from career proof (`Journey`) to thought leadership (`Blog`).
- Introduced explicit `Journey -> Blog` CTA via `routes.blog` to make the user path intentional rather than implicit.

## Phase 5: Topic-Level Information Architecture
- Added `src/features/blog/topics.ts` to centralize post topic classification.
- Added topic query filtering (`?topic=`) in `src/pages/Blog.tsx` with visible filter chips.
- Extended `src/pages/Journey.tsx` theme cards to show related blog links and fallback topic navigation.
- Updated knowledge base narrative guidance in `knowledge-base/site-narrative-flow.md`.

## Phase 6: Trust Signals and Reading Focus
- Added a proof strip in `src/pages/Index.tsx` using real counts from milestones, themes, and published posts.
- Updated `src/components/NeuralBackground.tsx` to avoid pointer interception (`pointer-events-none`) so content interaction remains primary.
- Added reduced-motion behavior in `src/components/NeuralBackground.tsx` with lower node count and disabled cursor-reactive effects.

## Phase 7: Conversion and Credibility Hardening
- Added explicit contact CTAs on `src/pages/Index.tsx` and `src/pages/BlogPost.tsx` using the canonical LinkedIn entry point.
- Added milestone outcome chips in `src/components/Timeline.tsx` to surface practical delivery signals.
- Enabled route-level lazy loading in `src/App.tsx` and lazy loading for heavy visuals/components in `src/components/Layout.tsx` and `src/pages/Journey.tsx`.
- Verified production bundle now splits into smaller page/component chunks with no large-chunk warning.

## Phase 8: Accessibility Hardening
- Added a skip-to-content link and focusable `main` landmark in `src/components/Layout.tsx`.
- Added `aria-current`, `aria-expanded`, and `aria-controls` semantics to navigation controls in `src/components/SiteHeader.tsx`.
- Added `aria-pressed` and labeled grouping for topic filter chips in `src/pages/Blog.tsx`.
- Revalidated with lint, test, and production build.
