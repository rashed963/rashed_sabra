# Personal Blog Frontend

Vite + React + TypeScript frontend for an Arabic personal site.

## Scripts
- `npm run dev`: start local dev server
- `npm run build`: production build
- `npm run preview`: preview production build
- `npm run lint`: run ESLint
- `npm test`: run Vitest once
- `npm run test:watch`: run Vitest in watch mode
- `npm run article:new -- --slug your-slug --lang ar`: generate a new markdown article file

## Stack
- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- React Router

## Project Structure
- `src/config/` central app configuration (`routes.ts`, `site.ts`)
- `src/features/copy/ar.ts` central Arabic UI copy
- `src/features/blog/` blog domain types/content parser/selectors/components
- `src/content/blog/` markdown articles (`*.md`) with frontmatter
- `src/features/journey/` journey domain types/content
- `src/pages/` route-level pages
- `src/components/` shared layout/presentation components
- `src/components/ui/` shadcn/ui primitives

## Minimal-Change Files (for future updates)
For most content and navigation updates, edit only these files:
- `src/config/site.ts`
- `src/config/routes.ts`
- `src/features/copy/ar.ts`
- `src/content/blog/*.md`
- `src/features/journey/data.ts`
- `src/features/journey/content.ts`

## Maintenance Rules
- Use `npm` as the package manager (single lockfile policy).
- Keep route strings inside `src/config/routes.ts`.
- Keep user-facing text in `src/features/copy/ar.ts`.
- Keep blog articles in `src/content/blog/*.md` (UTF-8).
- Keep page files focused on rendering and composition.

## Blog Authoring (Admin Workflow)
1. Generate a file:
   - `npm run article:new -- --slug your-article-slug --lang ar`
2. Open the generated file under `src/content/blog/`.
3. Fill frontmatter and markdown body.
4. Run `npm run dev` and verify the article appears on `/blog`.

Notes:
- Supported languages: `ar`, `en`
- Admin helper route exists at `/admin/articles/new` in development only and is hidden from main navigation.
