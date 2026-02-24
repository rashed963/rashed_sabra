# Project Goal (Personal Website / Blog)

## Vision
Build a simple, high-trust personal website where blog posts are the canonical archive and are then shared on LinkedIn.

## Primary objective (current phase)
- Keep publishing friction very low.
- Keep architecture maintainable with minimal edit surface.
- Preserve clear separation between content/config and rendering components.

## Audience
- Primary: LinkedIn readers who need a stable canonical archive.
- Secondary: peers/collaborators interested in AI, automation, product, and technology leadership.

## Publishing model
- Blog-first workflow: publish on site, then share on LinkedIn.
- Multiple topics/series can run in parallel.

## Technical approach (current)
- Vite + React + TypeScript frontend.
- Centralized content/config in TypeScript modules.
- Feature-oriented structure under `src/features/*`.
- Route and site config centralized under `src/config/*`.
- Git repository as source of truth.

## Priorities
1. Reliable publishing workflow.
2. Minimal, readable UI.
3. Strong maintainability (few files to edit for common updates).
4. Easy extension without structural rewrites.

## Out of scope (for now)
- CMS/database integration.
- Complex interactive platform features (comments/newsletter/search) unless clearly needed.
- Heavy infrastructure/ops complexity.
