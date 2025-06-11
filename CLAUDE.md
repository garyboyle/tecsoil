# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the TECSOIL Site Assessments website project. Currently, the project contains only a design mockup (DESIGN-WITHTEXT.jpg) showing the intended layout and content for a site assessment services company based in Ireland.

## Current State

The project is in initial setup phase with no code implementation yet. The design file shows:
- Company branding and navigation (HOME, ABOUT US, OUR SERVICES, OUR PRODUCTS, CONTACT)
- Content about wastewater treatment and site assessments
- Professional accreditations and certifications
- Contact information for Donegal, Ireland location

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