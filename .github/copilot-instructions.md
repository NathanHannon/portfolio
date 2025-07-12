# Portfolio Project - AI Coding Agent Instructions

## Architecture Overview
This is a full-stack React portfolio with Express.js backend and PostgreSQL database, using a hybrid approach with both Prisma schema and direct SQL queries.

**Key Structure:**
- `client/src/` - React frontend with Vite build system
- `server/` - Express.js backend with PostgreSQL connection
- `server/prisma/schema.prisma` - Database schema (Prisma managed but using direct SQL)

## Development Workflows

### Running the Project
```bash
npm run dev          # Starts both client and server concurrently
npm run server       # Backend only on port 5000  
npm run client       # Frontend only via Vite
npm run build        # Production build for DigitalOcean
```

### Database Operations
- Uses direct SQL queries (`server/database_connection.js`) NOT Prisma Client
- SSL certificate required: `certs/portfolio-db-ca-certificate.crt`
- Schema in `server/prisma/schema.prisma` for reference only
- Example pattern in `server/routes/projects.js` lines 25-45

## Project-Specific Patterns

### Component Structure
- Each component has co-located `.scss` file (e.g., `About/About.jsx` + `About/About.scss`)
- SCSS imports use `@use` syntax: `@use "ProjectCard/ProjectCard.scss"`
- Global styles: `client/src/custom.scss` (Bootstrap override) + `index.scss`

### Theme System
- Dark/light mode via `ThemeContext` with localStorage persistence
- Body classes: `.dark-mode` and `.force-light-mode`
- Respects system preference on first visit

### API Communication
- Environment-based API URLs: `client/src/environments/environment.js`
- Backend routes prefixed with `/api` (handled in `server/routes/projects.js`)
- CORS configured with domain validation in `server/app.js` lines 26-35

### Security & Headers
- Custom domain validation: `validateDomain()` function in `app.js`
- Security headers, rate limiting, and CSP policies applied
- Static file serving from `../build` directory

### Asset Management
- Public assets in `client/public/` (copied to build)
- Component assets in `client/src/assets/` (processed by Vite)
- Special handling for `.well-known/nostr.json` in Express

## Key Dependencies
- **Frontend:** React Router, FontAwesome, Bootstrap 4, React Helmet, SCSS
- **Backend:** Express, CORS, Helmet, Rate Limiting, PostgreSQL (pg)
- **Build:** Vite (not Create React App), Concurrently for dev mode

## Deployment Notes
- DigitalOcean optimized build: `npm run build:digitalocean`
- Dockerfile.prod uses multi-stage build pattern
- Service Worker registration enabled for PWA features
