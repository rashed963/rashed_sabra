# Knowledge Base

This folder captures stable project context for ongoing maintenance decisions.

## Scope
- Keep content short, factual, and updated when architecture/process changes.
- This folder is currently tracked in Git for team/agent continuity.

## Files
- `project-goal.md`: product direction, audience, workflow, and technical approach.
- `personal-background.md`: personal/professional context and writing focus.
- `blog-authoring.md`: admin workflow for creating markdown blog posts.

## Current maintenance change points
Most routine frontend updates should be done in:
- `src/config/routes.ts`
- `src/config/site.ts`
- `src/features/copy/ar.ts`
- `src/content/blog/*.md`
- `src/features/journey/data.ts`
- `src/features/journey/content.ts`

## Blog authoring command
Use this command to create a new blog article markdown file:

`npm run article:new -- --slug your-article-slug --lang ar`

## Reference
- LinkedIn: `https://www.linkedin.com/in/rashed-sabra`
