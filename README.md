# Brew & Co — Specialty Coffee

> A warm neighbourhood coffee shop website built with **Astro 4**, TypeScript, and vanilla CSS.

![Astro](https://img.shields.io/badge/Astro-4-orange?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## ✨ Features
- Static site generation (zero JS by default, hydrated where needed)
- Fully responsive minimalist warm design
- Contact form with client-side validation
- Scroll-reveal animations
- Sitemap auto-generation
- SEO meta tags + Open Graph

## 🚀 Getting Started
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## 🗂 Structure
```
src/
├── pages/         # Route pages (.astro)
├── layouts/       # Layout.astro (base HTML shell)
├── components/    # Nav, Hero, MenuHighlight, Story, Gallery, Contact, Footer
public/
├── styles/global.css
└── scripts/main.js
```

## 🔒 Security
- `X-Content-Type-Options` meta tag
- External links use `rel="noopener noreferrer"`
- Form inputs validated before submission
- No eval(), no inline event handlers in production

## 📦 Deploy
Works with **Netlify**, **Vercel**, **Cloudflare Pages** — all support Astro out of the box.
```bash
npm run build   # outputs to dist/
```
---
© 2025 Brew & Co.
