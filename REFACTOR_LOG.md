# Refactor Log

## Phase 1: Feature Structure and Deduplication
- Moved blog domain model/data/selectors into `src/features/blog`.
- Added reusable `PostCard` for blog list rendering to eliminate duplicated markup between home and blog pages.
- Moved journey milestone model/data into `src/features/journey`.
- Updated pages/components to depend on feature modules instead of cross-layer imports.

## Phase 2: Dead Code Cleanup
- Removed obsolete files: `src/data/blog-posts.ts`, `src/data/milestones.ts`, `src/components/TimelineMilestone.tsx`, `src/App.css`.
- Removed unused legacy content assets under `src/content`.

## Validation
- Lint, tests, and production build must pass after each phase.

