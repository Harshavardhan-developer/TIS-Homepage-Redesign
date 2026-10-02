# Tulas International School — Homepage Redesign

## Overview
A React + Vite redesign of the TIS homepage (https://tis.edu.in/). It keeps the crimson brand colour, the "Let's do it with Tulas" tagline and the official copy, images, statistics, rankings and contact details. All content lives in `src/data/content.js`; components only render it.

## Features
- Floating navbar: glass blur on scroll, active-section underline, hover dropdowns with images, "More" menu, Apply Now CTA, theme toggle
- Full-screen mobile menu: accordion items, Escape to close, body scroll lock, keyboard accessible
- Sections: Hero, About, Why TIS, Campus statistics, Sports, Rankings / Awards / Personalities, Parent review, Collaborations, Admissions steps, Final CTA, Footer
- Light/dark theme (saved in localStorage)
- Admissions steps taken from https://admission.tis.edu.in/

## Tech Stack
React 18, Vite 5, Tailwind CSS 3, Framer Motion 11, Lucide React

## Project Structure
```
src/
├── components/
│   ├── layout/      Navbar, Footer
│   ├── sections/    Hero, About, WhyTIS, Statistics, Sports, Highlights,
│   │                Testimonials, Collaborations, Admissions, FinalCTA
│   ├── ui/          Button, MagneticButton, Reveal, TextReveal, SectionHeading
│   └── animation/   ParallaxImage, AnimatedCounter, CustomCursor, ScrollProgress
├── hooks/           useActiveSection (IntersectionObserver)
├── data/            content.js (single source of truth for text + image URLs)
└── index.css
```

## Animation Features
Scroll reveals, text reveal, image parallax, animated counters, magnetic buttons, scroll progress bar, custom cursor (mouse devices only), CSS-driven marquees (sports, collaborations), navbar and mobile-menu transitions. Animations use transform/opacity and respect `prefers-reduced-motion`.

## Responsive Design
Mobile-first Tailwind layouts checked for 375px, 768px and 1280px+. The custom cursor and magnetic effect are disabled on touch devices.

## Local Setup
```bash
npm install
npm run dev
npm run build
```
Delete any existing `node_modules` first if it was created on a different OS (e.g. Windows → Linux).

## Deployment
Push to GitHub, import into Vercel (Vite is auto-detected; build `npm run build`, output `dist`).
