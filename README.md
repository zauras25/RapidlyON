# RapidlyOn — Digital Product Studio

A production-oriented Next.js 16 / React 19 website for a digital product design & development studio.

## Positioning

**We turn ideas into digital products.**

Discovery → Research → Strategy → Design → Build → Launch

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production check:

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_SITE_URL` — canonical site URL used by metadata, sitemap, robots, and Open Graph.
- `RESEND_API_KEY` — optional email delivery key for project briefs.
- `PROJECT_INBOX` — inbox that receives project briefs.
- `PROJECT_FROM` — verified sender when using Resend.

Without Resend credentials, project briefs are logged by the API in development rather than silently pretending they were delivered.

## SEO included

- Page-level metadata
- Canonicals
- Open Graph metadata
- Twitter card metadata
- Dynamic Open Graph image
- `robots.txt`
- XML sitemap
- Organization structured data
- Case-study Article structured data
- Semantic headings and accessible form controls
- 404 page

## Case studies

The work section deliberately distinguishes conceptual work from client work and does not invent revenue, user counts, testimonials, or performance metrics.

- True Pay — fintech / SaaS product concept
- Smart Trip — travel / AI product concept
- Umer Mobile Parts — client commerce product in development

## Project brief

The six-step project discovery flow captures contact details, project type, current stage, needs, timeline/budget, and the product idea. The API is ready for Resend-based email delivery through environment variables.
