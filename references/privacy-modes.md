# Privacy modes and approval gates

## Opening question

Ask this before requesting tickets or bookings:

> 你准备怎样使用这个旅行网页？
>
> A. 公开分享，不包含个人信息（推荐）——隐藏票据二维码、订单号、姓名、联系方式、座位号和订单截图。
>
> B. 仅供自己使用，包含完整信息——可整理票据和预约资料，但建议只保存在自己的设备上，不要上传到公开网站。
>
> C. 公开分享，并保留部分个人信息——存在被查看或冒用的风险，稍后需要逐项确认。

Record the chosen mode in the working notes.

## Mode A: safe public sharing

May show by default: travel dates and city route; airport/station names and times; useful flight or train numbers; hotel and restaurant names and dates; attractions, transport advice, source links, weather links, and maps.

Must hide and exclude from the website folder: names, phone numbers, emails, account names, passport data, QR/barcodes, ticket IDs, booking references, confirmation numbers, seat or room numbers, room type, payment details, private notes, and raw ticket/order screenshots or PDFs.

Create only a sanitized public PDF unless the traveler separately requests a private local PDF.

## Mode B: personal complete use

Before generation, state:

> 这份文件会包含个人资料或可使用的票据。请只保存在自己的设备上，不要上传到GitHub、Cloudflare或其他公开网站。

If the traveler later asks to deploy it, stop and offer to generate a mode A copy first.

## Mode C: selected personal information on a public site

Ask the traveler to approve or reject each applicable category: transport number, hotel name, room type, restaurant time, seat number, price, booking reference, raw order document, ticket QR/barcode, and name/contact information.

Preselect only transport numbers, hotel names, and restaurant times. Everything else defaults to hidden.

If any raw document, QR/barcode, booking reference, seat number, payment detail, or contact field is selected, give a second warning describing the selected fields and require the exact meaning of “确认公开” before proceeding. A generic “继续” is insufficient.

## Final privacy report

Before producing any public ZIP, show actual categories and counts, for example:

```text
本次网页隐私检查

公开展示：航班时间、酒店名称、餐厅名称、景点路线
自动隐藏：2张二维码、3个订单号、2个座位号、1个邮箱、4张订单截图
网页附件中不会包含被隐藏的原始文件
```

For mode A, the itinerary confirmation may cover this report. Mode C still requires its separate high-risk confirmation.

## Publication invariant

Unlinked is not private. A sensitive file located anywhere inside the deployable folder or ZIP is treated as public. Inspect the final archive manifest and extracted contents, not only visible page links.
