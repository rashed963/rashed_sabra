# Homepage Human Network: Decision Log

## Rules

- Every approved decision remains frozen until its gate is deliberately reopened.
- Later-stage discomfort is not solved by improvising a new strategy in code.
- A gate receives one of: `APPROVE`, `REVISE`, or `REJECT`.
- Two unsuccessful revision rounds return the work to the previous gate.

## Decisions

| ID | Decision | Rationale | Status |
|---|---|---|---|
| D-01 | Homepage phase only | Solves one experience before expanding the redesign | Frozen |
| D-02 | Identity and thoughts have equal strategic importance | Visitors must know who Rashed is and experience how he thinks | Frozen |
| D-03 | Identity appears first in the reading order | Prevents an abstract AI experience from hiding the person | Frozen |
| D-04 | Public role is `Head of Product & Technology` | Concrete current leadership identity | Frozen |
| D-05 | Arabic-first with selective English | Preserves authentic voice while retaining natural professional terminology | Frozen |
| D-06 | Primary CTA is `استكشف أفكاري` | Writing is the main next action after identity is established | Frozen |
| D-07 | Secondary CTA is `تعرّف إلى رحلتي` | Professional history remains discoverable without dominating the hero | Frozen |
| D-08 | Visual metaphor is Human-Directed Knowledge Network | Connects AI, systems, writing, and human command in one authored idea | Frozen |
| D-09 | Real portrait is the visual center | Makes the site unmistakably personal | Frozen |
| D-10 | One focused interactive hero | Delivers memorability without turning the page into a motion showcase | Frozen |
| D-11 | Curated thoughts replace taxonomy | Two real articles do not justify a permanent browsing system | Frozen |
| D-12 | Three beliefs: human judgment, leadership clarity, accountable AI | Matches the strongest overlap between background and published writing | Frozen |
| D-13 | Compact proof plus Journey link | Establishes credibility without recreating the CV on the homepage | Frozen |
| D-14 | Deep navy, teal, warm decision signal | Evolves the existing identity while distinguishing system activity from human choice | Frozen |
| D-15 | Isolated prototype before production | Superseded after the owner approved the polished mockup and chose direct implementation | Superseded |
| D-16 | One post-hero `What I Believe` manifesto | Explains the worldview behind the work before presenting articles and proof | Frozen |
| D-17 | Use the provisional English “create it” wording without attribution | Preserves the reference the user likes while avoiding an unsupported attribution | Frozen |
| D-18 | Treat the belief manifesto and space statement as one cinematic section | Superseded during Gate 2 because the combined section overloaded the beliefs | Superseded |
| D-19 | Use eventual space motion as looping video plus poster, not GIF | Provides better compression, playback control, and reduced-motion handling | Frozen |
| D-20 | Borrow the Diamandis section's narrative function, not its expression | Preserves originality by excluding its wording, rocket imagery, signature, and composition | Frozen |
| D-21 | Select Direction B | Its centered portrait and distinctive pacing best match the intended personal presence | Frozen |
| D-22 | Separate the future statement from `What I Believe` | Gives the beliefs room and lets the statement land after readers encounter real writing | Frozen |
| D-23 | Place a cinematic Future Threshold after selected thoughts | Turns the statement into a bridge from published thinking to professional proof | Frozen |
| D-24 | Use the supplied `400x400` portrait as a temporary production asset | Unblocks implementation while keeping final portrait replacement explicitly tracked | Frozen |
| D-25 | Treat the temporary portrait as a contained editorial image | Its baked-in neural background makes honest masking stronger than simulated extraction | Frozen |
| D-26 | Skip the isolated prototype and implement the approved mockup directly | Saves time and tokens after the visual and responsive direction was already approved | Frozen |

## Explicitly Rejected

- Four-track homepage navigation: Build / Think / Learn / Write
- Homepage as an operating notebook or abstract knowledge map
- Full-page Vanta-style or WebGL motion
- Glass-card/Bento-grid composition as the site identity
- Plain editorial notebook with minimal personal presence
- Designing Blog, Journey, and article pages before homepage approval
- Adding graph, versions, series, CMS, or new routes during phase one
- Reusing the rejected Gate 1 UI or information architecture by default

## Archive Record

- Rejected experiment branch: `archive/rejected-thinking-system-gate-1`
- Archive commit: `ef99a4b`
- Clean design branch base: `9f9fd21`
- Design branch: `design/homepage-human-network`

## Gate 1 Decision

- Status: Approved
- Decision: `APPROVE`
- Date: 2026-06-07
- Reason: The owner approved the identity, content hierarchy, belief manifesto, selected writing, visual thesis, and constraints for wireframe exploration.
- Required revisions: None before Gate 2.

## Gate 2 Decision

- Status: Approved
- Decision: `APPROVE B`
- Date: 2026-06-07
- Selected direction: Direction B — Centered Human Signal, revised
- Reason: The centered portrait establishes personal presence, while the revised pacing gives beliefs, writing, and the Future Threshold separate jobs.
- Required revisions: None before the polished mockup gate.
- Direction A status: Not selected
- Polished mockup authorized: Yes — one Direction B mockup at desktop and mobile, plus reduced-motion and keyboard-focus states
- Prototype authorized: No
- Production implementation authorized: No

## Gate 3 Decision

- Status: Approved
- Decision: `APPROVE MOCKUP`
- Date: 2026-06-07
- Artifact: Direction B polished mockup
- Review states:
  - Default desktop
  - Touch/mobile static
  - Keyboard focus
  - Reduced motion and Future Threshold poster
- Temporary portrait replacement: Deferred by owner; track as a post-implementation asset update
- Prototype: Skipped by owner
- Production implementation authorized: Yes — homepage only, preserving existing Blog and Journey routes
