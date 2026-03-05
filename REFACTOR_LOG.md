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
