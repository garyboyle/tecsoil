# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Rules

### Sitemap Updates
**IMPORTANT**: Whenever you make changes to the website content (HTML, text, structure, etc.), you MUST update the `<lastmod>` date in `/sitemap.xml` to today's date in YYYY-MM-DD format. This ensures search engines are notified of content updates.

## Project Overview

This is the Tecsoil Site Assessments website project - a professional site for EPA-certified site assessment services based in Donegal, Ireland.

## Current State

The website is live and includes:
- Hero section with clear value proposition
- Responsive navigation with mobile hamburger menu
- Complete SEO implementation (meta tags, Open Graph, schema.org)
- EPA Code of Practice 2021 compliance information
- Professional accreditations and certifications
- Contact information with Eircode (F94 WT20) and Google Maps integration
- Click-to-call phone numbers

## Development Setup

This project uses modern web development tools:

### Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint on source files
- `npm run format` - Format code with Prettier

### Project Structure
```
src/
├── components/     # Reusable components (future)
├── styles/         # CSS modules (base, layout, components)
├── assets/         # Images, fonts, etc.
└── main.js         # Application entry point
```

### CSS Architecture
- Uses CSS custom properties for theming (`--primary-blue`, `--primary-green`, etc.)
- Organized into three main stylesheets:
  - `base.css` - Reset, variables, typography
  - `layout.css` - Grid, flexbox, responsive design
  - `components.css` - Component-specific styles

### Build System
- Vite for fast development and optimized builds
- ES6 modules support
- Hot module replacement in development