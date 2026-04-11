# Ravindra IAS v2

A full-featured web platform for **Ravindra IAS Academy** — a premier UPSC coaching institute — built from scratch in **2 hours** during a college frontend competition.

[![Next.js](https://img.shields.io/badge/Framework-Next.js_14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://ravindra-ias-v2.vercel.app/)

**Live Demo:** https://ravindra-ias-v2.vercel.app/
**Baseline (original WordPress site):** https://ravindrasias.com/

---

## Context

This was built as part of a **timed college frontend competition** (2-hour time limit). The brief was to redesign the existing Ravindra IAS WordPress site — a decade-old production site serving real users.

The goal was not just to make it look better, but to make fundamentally better architectural decisions:
- Chose **Next.js over React+Vite** for SSR and real SEO value
- Chose **TypeScript** for type safety and maintainability under pressure
- Focused on component architecture that would scale, not just a static mockup

---

## Lighthouse Scores

Measured against the original production site:

| Metric | **This project (v2)** | Original WordPress site |
|---|---|---|
| Performance | 🟢 **99** | 🟠 79 |
| Accessibility | 🟢 **94** | 🟢 88 |
| Best Practices | 🟢 **100** | 🟢 100 |
| SEO | 🟢 **100** | 🟢 92 |

The SEO gap (100 vs 92) is a direct result of the SSR decision — Next.js serves fully-rendered HTML to crawlers, whereas a client-side SPA cannot.

---

## Tech Stack & Why

| Choice | Reasoning |
|---|---|
| **Next.js 14 (App Router)** | SSR for real SEO — a coaching institute's pages need to rank on Google. A Vite SPA cannot match this. |
| **TypeScript (88.2% of codebase)** | Enforced correctness under time pressure. Type-safe component props prevented entire classes of bugs. |
| **Tailwind CSS** | Utility-first approach maximised speed — no context switching between component files and stylesheets. |
| **Vercel** | Zero-config deployment with edge CDN — live URL available within minutes of pushing code. |

---

## Project Structure

```
ravindra-ias-v2/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home
│   ├── about/
│   ├── courses/
│   ├── resources/
│   └── selections/
├── components/           # Reusable UI components
├── constants/            # Shared data and config
├── lib/                  # Utility functions
└── public/               # Static assets
```

---

## Pages Built

| Page | Description |
|---|---|
| **Home** | Hero, feature badges, course overview, stats, syllabus breakdown, contact form |
| **About** | Institute story, director profiles |
| **Courses** | Responsive course card grid (9 programmes) |
| **Study Resources** | Resource listing |
| **Our Selections** | Success stories |

---

## Key Engineering Decisions

**Why SSR over CSR?**
A coaching institute's pages (courses, about, home) are content-heavy and benefit enormously from server rendering — both for performance and for Google indexing. A client-side SPA would render a blank shell to crawlers. Next.js App Router made SSR the default with no extra configuration.

**Why TypeScript in a 2-hour competition?**
TypeScript adds upfront cost but removes ambiguity. With typed component props and constants, I could refactor quickly without second-guessing data shapes. The 88.2% TypeScript coverage reflects using it throughout, not just at the edges.

**Scope management under time pressure**
Some features (live counter animations, form backend) were intentionally deferred — shipping a structurally sound, fully navigable site was the priority over incomplete interactivity.

---

## Running Locally

```bash
git clone https://github.com/ui-gaurav/ravindra-ias-v2.git
cd ravindra-ias-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## What I'd Add With More Time

- Form submission backend (EmailJS or a Next.js API route)
- Animated counters for the stats section with real data
- Dark/light mode toggle
- CMS integration (Sanity.io) for content management by non-technical staff
- Unit tests with Vitest for component logic

---

*Built by [Gaurav Arya](https://github.com/ui-gaurav) · First-year B.Tech, Computer Science & Design, MITS Gwalior*
