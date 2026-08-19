# Morra Market landing page

Morra is a WhatsApp-first assisted-shopping service for Lagos. Customers can browse the pilot lineup or send a specific market request, including individual items or wholesale quantities. Morra sources from Balogun Market, checks the order, and makes it available on the next market day.

## Customer promise

- **Market days:** Tuesday, Thursday, and Saturday.
- **Free pickup:** CMS, Lagos Island, from 4:00–6:00 PM.
- **Partner delivery:** Available during the same 4:00–6:00 PM window for a fee based on the delivery area, with the fee disclosed before full payment.
- **Sourcing:** Customers can ask for items within the pilot categories, whether they need one piece or a wholesale quantity.
- **Pricing:** The item total plus a 5% service and packaging fee. A one-time ₦500 order-validation fee is paid upfront to send a runner to source the order; it is refunded if the item cannot be sourced and is non-refundable if the customer cancels.

The current pilot categories are fabric by the yard, sealed cosmetics and skincare, perfumes, and jewelry and accessories. Requests outside these categories are useful signals for future expansion but are not currently part of the sourcing promise.

## Website

This repository contains the production landing page. It is intentionally a static page with no inventory database, authentication, checkout, or delivery-management backend. All customer conversations and order coordination begin in WhatsApp.

The page covers:

- The Balogun access problem and Morra’s assisted-shopping solution.
- Browse-or-send-a-list sourcing for individuals and wholesale buyers.
- The Tuesday/Thursday/Saturday operating rhythm.
- Free CMS pickup and fee-based partner delivery.
- Pricing, validation-fee, sourcing, alternative-item, and exchange expectations.
- FAQs and repeated WhatsApp conversion CTAs.

The internal business and copy source of truth is [business.md](./business.md).

## Stack

- Next.js App Router 16.3.1.
- React and TypeScript.
- Tailwind CSS 4.
- Static export to `out/`.
- `next/font` with Bricolage Grotesque and Hanken Grotesk.
- Supplied Morra logo assets in `public/brand/`.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates the static production output in `out/`.

For deployed social metadata, set `NEXT_PUBLIC_SITE_URL` to the public site URL before building.

## Project shape

```text
app/
  page.tsx          Landing page content and layout
  layout.tsx        Fonts, metadata, and document shell
  globals.css       Brand tokens, patterns, motion, and accessibility styles
components/
  morra-icons.tsx   Small inline SVG icon set
public/brand/       Supplied light and navy logo assets
business.md         Internal business and messaging brief
```
