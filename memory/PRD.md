# UWS Digital 2.0 — PRD

## Project
Udaipur Wildlife Sanctuary — Static website (HTML/CSS/JS)

## Original Problem Statement
Fix and optimize the entire website UI to be fully responsive and professional across all devices. Then add: 1) Update all sub-page CSS for consistent responsive styling, 2) Scroll entrance animations with IntersectionObserver, 3) Hindi/English language toggle.

## Architecture
- **Frontend**: Static HTML/CSS/JS served via `serve` on port 3000
- **Backend**: Minimal FastAPI health endpoint on port 8001
- **No database** (static content, localStorage for language preference)

## Tech Stack
- HTML5, CSS3 (custom properties, grid, flexbox, IntersectionObserver)
- Vanilla JavaScript (event delegation, IntersectionObserver API)
- Google Fonts (Plus Jakarta Sans, DM Serif Display)

## What's Been Implemented

### Session 1 — April 12, 2026 (CSS Rewrite & Responsive Fix)
- Complete CSS rewrite with BEM structure, mobile-first responsive design
- CSS custom properties, 4 breakpoints (380px/481px/1025px/1400px), 1200px container
- Fixed broken JS (NaN booking total, menu overlay, FAQ toggle)
- Event delegation for reliable DOM event handling
- Added data-testid attributes on all interactive elements

### Session 2 — April 12, 2026 (Sub-pages, Animations, Language Toggle)
- **Sub-page CSS**: Created shared-base.css with common reset/variables/typography imported by all 21 sub-page CSS files. Each file rewritten for responsive design (entry, ev, boating booking/payment/preview/success, gallery, complaint, cafeteria, parking, bicycle, ecohut)
- **Scroll Animations**: IntersectionObserver-based entrance animations (fade-up, stagger, slide-left, scale) on all major sections. Elements reveal as user scrolls, with staggered children for grid sections
- **Hindi/English Toggle**: Full translation system with `data-i18n` attributes. Covers hero, boating, EV cart, booking, bird/wildlife sections, location, facilities, gallery, rules, FAQ headings, quick actions, footer. Preference persisted in localStorage. Active language button visually highlighted

## Passed Tests
- Session 1: 100% (frontend, responsive, interactive, popups, menu)
- Session 2: 100% (scroll animations, language toggle, sub-pages, all previous features)

## Backlog
- P2: Dark mode toggle
- P2: PWA manifest and service worker for offline support
- P3: Translate sub-pages (booking, contact, etc.) to Hindi
- P3: Add more scroll animation variants (parallax on hero bg)
