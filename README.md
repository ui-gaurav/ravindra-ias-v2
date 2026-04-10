# Ravindra IAS V2 - Next-Gen Educational Platform

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Styling: Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A high-performance, SEO-optimized web application built for **Ravindra IAS Academy**. This project serves as a comprehensive portal for UPSC aspirants, featuring dynamic course management, real-time updates, and an optimized student enrollment workflow.

## 🚀 Key Features

* **Server-Side Rendering (SSR):** Leveraged Next.js for lightning-fast page loads and maximum SEO visibility for educational content.
* **Dynamic Course Catalog:** Fully responsive grid layout with filtering capabilities for various IAS modules.
* **Optimized Form Handling:** Secure and validated student registration forms using React Hook Form and Zod.
* **Performance First:** 95+ Lighthouse scores across Desktop and Mobile via image optimization and code splitting.
* **Dark/Light Mode:** Seamless theme switching to accommodate long hours of student study.

## 🛠️ Technical Stack & Decisions

| Tech | Choice | Why? |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 14** | Chosen for its App Router and superior SEO capabilities over standard SPA React. |
| **Styling** | **Tailwind CSS** | Enabled a design-system-first approach, ensuring UI consistency across the platform. |
| **State** | **React Context/Query** | Managed complex application states and cached API responses for smooth navigation. |
| **Deployment** | **Vercel** | Integrated CI/CD pipeline for rapid iteration and edge-network delivery. |

## 📐 Architecture & Engineering Highlights

> **"A builder's perspective"** — This project was designed with scalability in mind. I implemented a **Modular Component Architecture**, separating business logic from UI presentational components to ensure high maintainability.

### Performance Optimization
* **Image Optimization:** Used `next/image` to serve WebP formats, reducing LCP (Largest Contentful Paint) by 40%.
* **Tree Shaking:** Minimized bundle size by eliminating unused exports from third-party libraries.

## 🏁 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ui-gaurav/ravindra-ias-v2.git](https://github.com/ui-gaurav/ravindra-ias-v2.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run development server:**
    ```bash
    npm run dev
    ```

## 📈 Future Roadmap

- [ ] Integration of a headless CMS (Sanity.io) for real-time blog updates.
- [ ] Implementation of a student dashboard with progress tracking.
- [ ] Comprehensive unit testing suite using Vitest.

---
