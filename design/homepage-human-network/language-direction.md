# Language And Direction Specification

## Base Document

- Primary language: Arabic
- Base markup: `<html lang="ar" dir="rtl">`
- Arabic is the narrative and interface language for phase one.
- English appears selectively for role names, established technical terms, and proper nouns.

## Identity Pattern

```html
<p>راشد صبرة</p>
<p lang="en" dir="ltr">Head of Product &amp; Technology</p>
```

Do not place Arabic and English identity text in one unmarked string.

## English Terms

Use nested markup with `lang="en"` and `dir="ltr"` for:

- `Head of Product & Technology`
- `AI`
- `NLP`
- `MSc in Big Data Systems`
- Product names, company names, and URLs

Do not force English terms into RTL character order.

## Layout Rules

- Document direction comes from HTML `dir`, not CSS `direction`.
- Use logical properties and utilities: inline-start/end and block-start/end.
- Avoid left/right positioning when the concept is semantic rather than purely visual.
- Network geometry can be visually asymmetric, but text alignment and reading order remain RTL.
- DOM order must match reading and keyboard order; CSS visual reordering is not used to reverse meaning.

## Typography

- Arabic receives the primary display hierarchy.
- Latin text is quieter and must not compete with the Arabic thesis.
- Arabic and Latin typefaces should have compatible visual weight, x-height perception, and spacing.
- Avoid all-caps English labels at very small sizes when letter spacing harms legibility.
- Do not use decorative Arabic lettering for body copy or controls.

## Punctuation And Numbers

- Keep Arabic punctuation within Arabic sentences.
- Isolate dates, technical identifiers, and mixed-direction metadata in appropriate spans.
- Test article titles containing colons and question marks in both narrow and wide layouts.
- Keep numerals consistent within each content context.

## Accessible Names

- Link and button labels are meaningful in Arabic without relying on arrows.
- Decorative arrows and network nodes use `aria-hidden="true"`.
- The portrait alt text must describe the image concisely, not repeat the entire hero.
- English role text remains available to assistive technology through its language annotation.

## Phase-One Copy Policy

- No full English homepage state.
- No inactive language switch.
- No machine-translated duplicate copy.
- English technical terms are retained only when they are natural and more precise than an awkward translation.

## Validation

Review at `1440px`, `834px`, and `390px` for:

- Mixed Arabic/English line order
- CTA arrow placement
- Punctuation around article titles
- Focus order
- Text truncation
- Portrait/text mirroring assumptions
- Browser and screen-reader language changes
