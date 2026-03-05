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
- In `src/pages/Journey.tsx`, a bridge card sends users to `/blog` after timeline consumption.

## Editing rule
When updating any page copy or CTA, verify that the `Home -> Journey -> Blog` progression remains explicit.
