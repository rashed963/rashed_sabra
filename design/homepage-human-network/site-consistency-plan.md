# Site Consistency Plan

## Scope

Extend the approved Human-Directed Knowledge Network identity from the homepage to:

- `/blog`
- `/blog/:slug`
- `/journey`
- the `404` route
- shared header, footer, layout, and content components used by those routes

The homepage remains the visual source of truth. Its portrait, hero interaction, content order, and temporary portrait asset remain unchanged.

## Audit

### Existing strengths

- Deep navy, electric teal, warm signal, and light editorial colors are already defined.
- Arabic-first typography and selective English labels are established.
- Shared shells and type utilities provide a useful base.
- The header, footer, skip link, semantic headings, and reduced-motion rule already cover important accessibility needs.
- Blog and Journey content architecture is clear and should remain intact.

### Inconsistencies to resolve

- Interior page intros use generic spacing and do not carry the homepage's indexed editorial language.
- Buttons, text links, filters, and focus states use several unrelated treatments.
- Blog rows do not reuse the homepage's article imagery or restrained image treatment.
- Blog Post keeps long-form reading on the atmospheric dark background instead of the approved light editorial surface.
- Journey sections have useful content but weak visual hierarchy between themes, principles, proof, timeline, and closing invitation.
- Timeline metadata and outcome labels read as generic UI rather than editorial annotation.
- The 404 page bypasses the shared header and footer and uses a generic muted background.
- Header active-state logic does not identify a Blog Post as part of the Blog section.

## Shared Visual System

### Refined visual language

- Display typography: `Alexandria` for Arabic-first headings and mixed Arabic/English statements. Its geometric construction gives the identity more character without sacrificing legibility.
- Reading typography: `IBM Plex Sans Arabic` for paragraphs, navigation, and controls.
- Technical typography: `IBM Plex Mono` for indices, metadata, dates, and selective English labels.
- Dark field: warm ink-navy rather than cyan-black.
- System signal: mineral teal for paths, active states, and primary actions.
- Human signal: amber for focus, deliberate decisions, and rare emphasis.
- Editorial surface: warm ivory paper with blue-black ink, muted slate copy, and quiet mineral rules.
- Colors are semantic tokens shared by homepage and interior routes; route-specific hard-coded approximations are removed.

### Page shells

- Keep `page-shell` for wide editorial content and `reading-shell` for long-form prose.
- Add a shared interior-page wrapper with the homepage navy atmosphere and restrained grid/radial signals.
- Use a consistent page intro with generous spacing, a small indexed label, a balanced Arabic heading, and a concise lede.
- Use the light editorial surface only where it improves reading or creates a deliberate narrative beat.

### Headings and section labels

- Use mono labels with a two-digit section number and selective English terminology.
- Pair section labels with thin rules rather than badges or glass panels.
- Keep Arabic headings strong and spacious; reserve uppercase English for small supporting labels.

### Cards and content rows

- Prefer ruled rows and flat editorial panels over floating or glass cards.
- Blog rows include the existing article image, muted to match the homepage treatment.
- Journey proof items use a restrained top signal and equal-height layout without heavy shadows.

### Buttons and links

- Define one rounded action style derived from the homepage buttons.
- Provide primary, secondary, and light-surface variants.
- Define one underlined editorial text-link treatment for navigation within content.
- Keep filters as a ruled tab-like control, not pills.

### Metadata

- Use compact mono text, tabular numerals, teal accents, and middle-dot separators.
- Treat dates, reading time, section numbers, timeline periods, and outcome labels consistently.

### Article typography

- Place the article body on the light editorial surface with dark ink.
- Preserve the existing Markdown block structure.
- Give headings, lists, quotations, and body paragraphs distinct spacing and readable measures.
- Keep the hero and article footer in the navy system to retain continuity with the rest of the site.

### Focus states

- Apply a visible warm outline to interactive links, buttons, filters, navigation, and whole-card links.
- Preserve the skip link and ensure the shared header controls receive the same focus treatment.

### Responsive behavior

- At approximately `390px`, stack page-intro actions, collapse article rows to image-first layouts, and keep all controls at comfortable touch sizes.
- At approximately `768px`, use two-column editorial grids where content length allows.
- At approximately `1440px`, preserve controlled line lengths and align section labels, content, and supporting metadata on the shared shell.
- Avoid horizontal overflow from English phrases, metadata, images, and timeline labels.

### Motion

- Interior pages use color, spacing, and rules rather than continuous motion.
- Hover movement is limited to small image or arrow changes.
- Existing reduced-motion behavior disables nonessential transitions and transforms.

## Route Changes

### Blog

- Introduce the shared indexed page intro.
- Restyle topic filters as a bordered editorial control with clear pressed and focus states.
- Present posts as image-led ruled rows using the homepage's muted image language.
- Add an intentional empty state for valid filters with no matching posts.

### Blog Post

- Separate the dark article introduction from the light reading surface.
- Keep metadata and back navigation close to the title.
- Improve heading, quotation, list, image, and paragraph rhythm without changing parsed content.
- Finish with a restrained dark call to continue the conversation on LinkedIn.

### Journey

- Use the shared page intro and action vocabulary.
- Give each existing section an indexed heading and distinct but restrained composition.
- Keep themes and proof concise, strengthen principles as editorial statements, and refine the timeline hierarchy.
- End with a clear Blog invitation using the shared action style.

### 404

- Restore the shared layout, navigation, skip link, and footer.
- Use a static network/ring signal around `404`, a concise message, and a primary route back home.

## Accessibility Review

- Verify heading order and semantic regions.
- Verify `aria-current`, `aria-pressed`, menu labeling, and decorative image treatment.
- Verify keyboard focus on navigation, filters, article links, actions, and skip navigation.
- Verify color contrast on dark and light surfaces.
- Verify reduced motion and touch layouts.

## Verification Record

- `390px`: Blog, Blog Post, Journey, and 404 reviewed in exact device emulation. Mobile actions stack correctly, content rows collapse without losing hierarchy, article typography remains readable, and no route has horizontal overflow.
- `768px`: All four routes reviewed. Intro line lengths, mixed Arabic/English headings, article image overlap, Journey grids, and 404 composition remain balanced.
- `1440px`: All four routes reviewed. Wide shells, reading measure, section alignment, article rows, and shared navigation remain controlled.
- Overflow check: `document.documentElement.scrollWidth === window.innerWidth` on every reviewed route at all three target widths.
- Semantic check: one `h1` on every reviewed route; Blog Post reports the Blog navigation item as `aria-current="page"`.
- Keyboard check: skip link, brand, mobile menu, and topic filters receive visible keyboard focus; tested outline is a solid `2px` warm signal.
- Reduced motion: nonessential editorial transitions resolve to `0s`, and root smooth scrolling resolves to `auto`.
- Refined visual language: Alexandria is loaded and applied to display headings; IBM Plex Sans Arabic remains the reading face; IBM Plex Mono remains the metadata face.
- Palette contrast: dark text, muted text, primary actions, warm focus, paper text, paper metadata, paper signal, and cosmos labels meet WCAG AA contrast for their intended sizes.
- Complete tests: passed, `4` files and `6` tests.
- Lint: passed.
- Production build: passed.

## Deferred Work

- Replace `public/profile/portrait-temporary.jpg` only when the approved final portrait is available.
- No new routes, taxonomies, graph features, CMS work, dependencies, or content migrations are included.
