# Portrait Asset Specification

## Role

The portrait is the homepage’s human anchor, not an avatar, background texture, or decorative cutout. The knowledge network must organize around the person.

## Required Source

- Real, recent, high-resolution portrait supplied by Rashed
- Minimum recommended source: 2400px on the long edge
- Preferred formats: high-quality JPEG, PNG, or TIFF
- Avoid screenshots, compressed messaging-app exports, and images with baked-in text
- Usage rights must permit publication on the personal website

## Temporary Gate 3 Source

- File: `mockup/assets/portrait-temporary.jpg`
- Source dimensions: `400x400`
- Status: Approved by the owner for polished mockup review only
- Known limitation: compressed square image with a baked-in neural background
- Treatment: preserve the source, use a contained mask, and do not simulate background removal
- Replacement: required before prototype approval

## Preferred Capture

- Orientation: portrait or flexible 4:5 crop
- Framing: head and upper torso with space around shoulders
- Gaze: toward camera or slightly toward the text column
- Expression: confident, approachable, not overly staged
- Lighting: clear face separation with recoverable shadow detail
- Background: simple or removable; avoid complex objects crossing the silhouette
- Clothing: professional but natural to Rashed’s public identity

## Crop Deliverables

The polished mockup requires:

1. Desktop hero crop, approximately 4:5
2. Tablet crop, approximately 4:5
3. Mobile-safe crop, approximately 3:4
4. Fallback static crop with no network overlap

Keep face, eyes, and essential silhouette inside a central safe region. The network may extend beyond the portrait, but no critical path may cross the eyes or mouth.

## Processing

- Background removal may be used if edge quality remains natural.
- Retouching must preserve recognizable features and natural skin texture.
- Color grading should fit deep navy and teal without tinting skin unnaturally.
- A subtle rim light may be introduced in the mockup, but the portrait must still work without it.
- Do not generate a replacement face or stylized identity from text alone.

## Layout Stability

- Final implementation must declare intrinsic width and height.
- Reserve the portrait aspect ratio before image load.
- Use responsive `srcset`/`sizes` when production begins.
- The initial viewport must not shift when the portrait loads.

## Fallbacks

- Wireframes use a neutral labeled silhouette.
- Polished mockups may use the explicitly approved temporary portrait, but must label it for replacement.
- If the final image cannot support all crops, request a different source rather than forcing an unsafe crop.
- Reduced-motion mode uses the same portrait with a static network composition.

## Approval Checklist

- [ ] Final source resolution is sufficient
- [ ] Face remains clear at 390px
- [ ] Desktop and mobile crops are approved
- [ ] Background cleanup is acceptable
- [ ] Skin tone remains natural
- [ ] Network does not obscure identity
- [ ] Image rights are confirmed

Gate 3 temporary status:

- [x] Temporary source approved for mockup review
- [x] Mockup visibly identifies the source as temporary
- [ ] Final high-resolution source supplied
