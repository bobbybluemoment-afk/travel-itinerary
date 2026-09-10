---
name: travel-itinerary-publisher
description: Turn trip dates, bookings, screenshots, PDFs, maps, and travel-guide links into a confirmed itinerary, a deployable static website ZIP, and a polished PDF. Use when a traveler wants to create or revise a travel itinerary website or printable trip plan; includes explicit public/private privacy routing and optional GitHub plus Cloudflare deployment guidance.
---

# Travel Itinerary Publisher

Create a useful trip plan before creating files. Treat uploaded tickets and reservations as source material, not automatically publishable assets.

## Start with privacy mode

Before collecting detailed trip information, ask the traveler to choose one mode:

1. **Public sharing without personal information (recommended):** safe to publish; remove private identifiers and source documents.
2. **Personal use with complete information:** may contain tickets and bookings; warn that the files should stay on the traveler's own device.
3. **Public sharing with selected personal information:** explain the risk, collect field-level choices, require a second explicit confirmation, and show a final privacy report before generating files.

Read [references/privacy-modes.md](references/privacy-modes.md) and follow its gates exactly. Never treat an unlisted or ambiguous item as approved for publication.

## Collect the trip

Ask for the minimum missing information in one compact message:

- dates, origin, destinations, traveler count, and accessibility needs;
- confirmed transport, stays, tickets, restaurant reservations, and transfers;
- desired attractions plus guide or map links;
- pace, interests, walking tolerance, start-time preference, and meal constraints;
- website language, title, visual preference, and requested live features.

Accept partial information and mark unknowns instead of forcing completeness. Read [references/input-and-review.md](references/input-and-review.md) when extracting screenshots, PDFs, emails, or links.

## Confirm before producing files

First return a concise confirmation draft containing the overall route, one-line plans for each day, confirmed fixed-time items, conflicts or missing critical facts, and what will be public or hidden.

Do not create final artifacts until the traveler confirms the draft. Later edits follow the same pattern: show the proposed change, wait for confirmation, then regenerate affected files.

## Produce the deliverables

After confirmation, create:

1. A self-contained static website folder and ZIP that does not require a database or build command.
2. A polished, print-ready itinerary PDF matching the selected privacy mode.
3. If requested in personal mode, a separate local-only private travel PDF.
4. A short deployment guide for GitHub and Cloudflare Pages.

Use `assets/site-template/` as the default website shell. Customize typography, colors, and content while preserving mobile responsiveness, collapsible daily details, accessible controls, route/map links, and print behavior. Write the same sanitized trip object to `itinerary.json` and `data.js` so both deployed and local-file previews work. Do not put private source documents inside the website directory unless mode 3 explicitly authorizes each file after the second confirmation.

Read [references/output-spec.md](references/output-spec.md) for file naming, website/PDF requirements, and validation. Use the PDF skill to render and visually verify final PDFs. Use image tools only for non-sensitive decorative travel imagery when it materially improves the result.

## Deployment guidance

Do not sign in, create repositories, push code, or deploy on the user's behalf unless they explicitly ask and authorize that action. By default, give the generated files and ask whether deployment help is needed.

If requested, read [references/deployment.md](references/deployment.md). Guide the user one screen at a time through GitHub and Cloudflare Pages, waiting for completion or a screenshot before moving on. Reconfirm that the selected ZIP is safe for public upload.

## Non-negotiable safeguards

- Never infer consent to publish personal information from consent to generate files.
- Never hide sensitive files merely by omitting links; exclude them from public ZIPs entirely.
- Never put QR codes, barcodes, names, contact details, booking references, passport data, payment details, seat numbers, or raw order screenshots into the recommended public mode.
- Preserve source links beside the relevant day when safe, but do not claim to have read a blocked page; summarize only accessible content or user-provided context.
- Distinguish fixed reservations from suggested times and label uncertainty plainly.
- Prefer a realistic route with recovery time over an overfilled itinerary.
