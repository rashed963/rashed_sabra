# Website Content Refinement Report

Generated: 2026-06-12

## Summary

- Initial inventory: 207 user-facing text entries across public pages, shared UI, articles, journey content, SEO metadata, accessibility labels, and the development-only admin helper.
- Initial refinement: 1903 → 1410 words, a 25.9% reduction before the corrective language-consistency pass.
- Pure-English editorial sections remaining after correction: 0.
- Disallowed Arabic translations of approved English terms remaining: 0.
- Deprecated forms remaining: 0 instances of `AI/NLP`, `الذكاء الاصطناعي`, `معالجة اللغة الطبيعية`, `هندسة البرمجيات`, `محاكاة الروبوتات`, `حوكمة AI`, or `خصائص`.

The original reduction metrics remain the baseline for the content-editing pass. The later corrective pass prioritized bilingual consistency over further compression. `content-audit.csv` is the historical before/after snapshot from that initial pass; `language-consistency-audit.csv` records the final corrective pass.

## Page Metrics

| Page / area | Entries | Before words | After words | Reduction | Changed entries |
|---|---:|---:|---:|---:|---:|
| 404 | 2 | 4 | 4 | 0% | 0 |
| Admin (development only) | 15 | 62 | 62 | 0% | 0 |
| Article: الأتمتة الذكية تتعطل عند سؤال إداري واحد | 5 | 124 | 89 | 28.2% | 3 |
| Article: الأتمتة الذكية في المؤسسات: أين تبدأ فعليًا؟ | 5 | 133 | 94 | 29.3% | 2 |
| Article: هل نصمّم الشركات حول الهرم… أم حول الذكاء؟ | 5 | 472 | 293 | 37.9% | 2 |
| Blog | 15 | 50 | 48 | 4% | 3 |
| Blog post template | 4 | 19 | 17 | 10.5% | 2 |
| Global / Accessibility | 1 | 3 | 3 | 0% | 0 |
| Global / Footer | 3 | 8 | 8 | 0% | 0 |
| Global / Header | 6 | 10 | 11 | -10% | 1 |
| Global / Navigation | 4 | 5 | 5 | 0% | 0 |
| Global / SEO | 5 | 42 | 40 | 4.8% | 4 |
| Home | 32 | 233 | 196 | 15.9% | 13 |
| Home / Hero | 1 | 2 | 2 | 0% | 0 |
| Journey | 49 | 471 | 349 | 25.9% | 24 |
| Journey / Timeline | 19 | 33 | 31 | 6.1% | 8 |
| Shared UI | 36 | 232 | 158 | 31.9% | 19 |

## Key Consistency Fixes

- Established an Arabic-first policy: navigation, headings, labels, calls to action, descriptions, article prose, and accessibility copy are Arabic.
- Removed decorative English editorial copy, including **What I Believe**, **Working themes**, **Writing archive**, **Continue the conversation**, and the English future statement.
- Standardized approved industry terms in Latin script: **Product & Technology**, **Software Engineering**, **Robotics Simulation**, **AI Governance**, **Delivery Reliability**, **Technical Strategy**, **Features**, **AI**, and **NLP**.
- Kept official titles, credentials, brands, named concepts, organizations, commands, paths, and code values in English.
- Arabic prose now uses **AI وNLP**, never **AI/NLP**.
- Reduced repeated “clarity, ownership, testability, trusted systems” messaging. The homepage now owns the positioning; journey principles describe behavior; milestones provide supporting context.
- Condensed the Organizational Singularity article by merging repeated explanations of the human role, process redesign, governance, and organizational learning.
- Removed the unsupported “digital-transformation consultant” claim from SEO metadata pending confirmation.

## Readability Rules

- Flag a sentence over 25 words for review.
- Allow mixed Arabic/English only when the English words appear in the approved terminology list.
- Prefer one idea per paragraph and one action per CTA.
- Keep article excerpts to one sentence and use the body to add context.
- Treat factual career scope, metrics, dates, and role titles as verification items, not copywriting opportunities.
- Do not publish pure-English sections unless the site introduces an explicit language switch.

## Terminology Glossary

The enforceable glossary is maintained in `terminology-glossary.csv`. The complete writing rule is documented in `language-policy.md`.

## Open Questions / Missing Context

1. Is “Head of Product & Technology” your exact current public title, and should it be used everywhere as the primary role?
2. How should the overlapping WIANCO periods “2022 - present” and “2024 - present” be explained: promotion, expanded remit, or a thematic phase within the same role?
3. What are the exact degree names, institutions, and dates behind “Damascus University / HIAST,” “2013 - 2021,” and “MSc in Big Data Systems”?
4. Which current responsibilities are safe to state publicly across product, engineering, quality, delivery, operations, and AI governance?
5. Are there public, non-confidential outcomes or metrics for the L-One and WIANCO roles that can replace general impact language?
6. Which AI/NLP projects, publications, or Arabic-language research examples can be named publicly to support the “AI Engineer” positioning?
7. Should the Organizational Singularity article name or link to the lecture/source that introduced the concept?
8. The previous SEO description called you a digital-transformation consultant. Is that an active public positioning, or should it remain removed?

## Validation Checklist

- [x] Side-by-side before/after copy captured in `content-audit.csv`
- [x] Word counts and reduction calculated per entry, page, and overall
- [x] Long-sentence threshold checked at 25 words
- [x] Mixed-language density checked for Arabic copy
- [x] Deprecated terms checked across source content
- [x] Glossary created for future consistency
- [x] Corrective language comparison captured in `language-consistency-audit.csv`
- [x] Arabic-first language policy documented in `language-policy.md`
- [x] Pure-English editorial sections removed
- [x] Approved English terms checked for single consistent usage
- [x] Missing factual context consolidated above
- [ ] Resolve factual questions using LinkedIn and/or the current job description
- [ ] Re-run this audit after factual updates
