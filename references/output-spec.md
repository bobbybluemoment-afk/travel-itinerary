# Output specification

## Filenames

Use trip-specific names with a privacy label:

- `<trip>_公开分享版_网页.zip`
- `<trip>_公开分享版_行程.pdf`
- `<trip>_个人完整版_网页.zip`
- `<trip>_个人完整版_资料.pdf`
- `<trip>_GitHub与Cloudflare部署说明.pdf`

Never use “公开版” for a file containing normally hidden personal fields.

## Static website

The ZIP must deploy without installing packages or running a build. Include at minimum `index.html`, `style.css`, `app.js`, `itinerary.json`, and `data.js`; add `assets/` only for approved public assets. `data.js` must assign the exact same sanitized object as `itinerary.json` to `window.ITINERARY` for local-file fallback.

Requirements:

- mobile-first and usable at 320px without page overflow;
- trip title, dates, route, and daily-itinerary entry in the first viewport;
- daily summaries with expandable details;
- overall and per-day map links;
- hotels/restaurants according to the privacy mode;
- source links beside relevant items;
- print styles and graceful empty/error states;
- weather links when live forecast data is unavailable;
- exchange conversion may use a public API, but failure must not block the itinerary.

Do not require a server, database, login, secret, or environment variable. Keep the `data.js` fallback so local `file://` preview works.

## Data model

Use this compact shape and extend only when necessary:

```json
{
  "title": "日本关西·关东之旅",
  "dateRange": "2026-09-23 — 2026-10-05",
  "route": ["上海", "东京", "京都", "大阪"],
  "days": [{
    "date": "2026-09-24",
    "city": "东京",
    "summary": "抵达后寄存行李并游览涩谷",
    "items": [{"time": "15:20", "title": "涩谷散步", "location": "Shibuya", "details": ["提前到观景台入口"]}]
  }],
  "stays": [],
  "checklist": []
}
```

Omit sensitive keys entirely in mode A instead of leaving empty placeholders.

## PDF

The public PDF contains the route, one section per day, fixed times, transport, allowed hotels/restaurants, important notes, and useful links. Optimize for phone reading and A4 printing; avoid clipped tables and tiny text.

Mark the optional private PDF “个人完整版｜请勿公开上传” on the cover and every page footer.

Render and inspect representative pages and the final page. Check Chinese fonts, page breaks, links, overflow, blank pages, and privacy labels.

## Validation

1. Extract the ZIP into a fresh temporary folder.
2. List every archived file and verify no hidden source document is included.
3. Open the page and check navigation, expand/collapse, links, and mobile layout.
4. Search public text files for names, emails, phone numbers, booking references, seat/room numbers, and private notes.
5. Render and inspect PDFs.
6. State the privacy mode and list delivered files.
