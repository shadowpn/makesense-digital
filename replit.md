# SensePower Digital - Portfolio & Services Platform

## Overview

This is a modern portfolio and digital services website for SensePower Digital, a Sydney-based fullstack development and QA testing studio. The application showcases professional services, case studies, work history, and provides client contact capabilities with file upload support. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query (React Query)** for server state management and data fetching

**UI & Styling**
- **Tailwind CSS v4** (new CSS-first approach) for utility-first styling
- **shadcn/ui** component library (Radix UI primitives) for accessible, customizable components
- **Framer Motion** for animations and transitions
- **Lucide Icons** for consistent iconography
- **Custom CSS variables** for theming with dark mode support (lime green & purple accent colors)

**Design System**
- Components follow the "New York" shadcn style variant
- Consistent spacing, typography, and color palette defined in `index.css`
- Custom fonts: Inter (sans), JetBrains Mono (mono), Space Grotesk (display)
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite middleware for HMR
- Production mode serves pre-built static assets

**API Structure**
- RESTful API endpoints under `/api` prefix
- Contact form endpoint (`POST /api/contact`) with file upload support
- Request logging middleware for debugging
- JSON body parsing with raw body capture for webhook support

**File Uploads**
- **Multer** for multipart/form-data handling
- Memory storage (files stored in memory, not disk)
- File validation: allowed types (PDF, ZIP, JPG, PNG, MP4), max 5MB
- Extension and MIME type validation for security

**Email Integration**
- **Nodemailer** configured for sending contact form submissions
- Email service credentials expected via environment variables

### Data Storage

**Database**
- **PostgreSQL** via Neon serverless database (`@neondatabase/serverless`)
- **Drizzle ORM** for type-safe database queries and migrations
- Schema defined in `shared/schema.ts` for code sharing between client/server
- Migration files stored in `./migrations` directory

**Current Schema**
- Users table with username/password (basic schema, likely for future admin features)
- Contact submissions stored in-memory via `MemStorage` class (temporary storage, should migrate to database)

**Storage Interface**
- Abstracted storage layer (`IStorage` interface) allows swapping implementations
- Current implementation uses in-memory Map storage (`MemStorage`)
- Contact submissions include: name, email, company, project type, budget, message, optional file attachment

### Authentication & Security

**Current State**
- No active authentication implemented (schema exists but unused)
- Basic input validation on contact form (email format, required fields, string length)
- File upload security: MIME type validation, file size limits, extension whitelist
- CORS and request sanitization via Express middleware

**Future Considerations**
- User schema suggests planned admin authentication
- Password hashing not yet implemented

### SEO & Meta Tags

**Dynamic SEO**
- Client-side SEO utility (`utils/seo.ts`) for updating meta tags per page
- Open Graph and Twitter Card meta tags
- Canonical URLs and page-specific titles/descriptions
- Custom Vite plugin (`vite-plugin-meta-images.ts`) for og:image URLs in Replit deployments

**Static Assets**
- `robots.txt` with sitemap reference
- Favicon and OpenGraph images served from public directory

### Development Workflow

**Build Pipeline**
- Development: Vite dev server with Express API proxy
- Production: Vite builds to `dist/public`, Express server bundled with esbuild to `dist/index.js`
- TypeScript compilation checking via `tsc`
- Database migrations via `drizzle-kit push`

**Code Organization**
- `client/` - Frontend React application
- `server/` - Backend Express API
- `shared/` - Shared TypeScript types and schemas (Drizzle)
- `attached_assets/` - Static assets like images and documents

**Path Aliases**
- `@/` → client source files
- `@shared/` → shared schemas and types
- `@assets/` → attached asset files

## External Dependencies

### Third-Party Services

**Neon Database**
- Serverless PostgreSQL hosting
- Connection via `DATABASE_URL` environment variable
- Required for production operation

**Email Service**
- Nodemailer configured (provider not specified in code)
- Requires SMTP credentials via environment variables

**Calendly Integration**
- Mentioned in resume/docs as external API integration
- Not evident in current codebase

**MailChimp Integration**
- Mentioned in resume/docs as external API integration
- Not evident in current codebase

### Development Tools

**Replit-Specific Plugins**
- `@replit/vite-plugin-cartographer` - Development navigation
- `@replit/vite-plugin-dev-banner` - Development environment indicator
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- Custom meta image plugin for Replit deployment URLs

### Key NPM Packages

**UI Component Libraries**
- 25+ Radix UI primitive packages for accessible components
- `class-variance-authority` for component variants
- `cmdk` for command palette functionality

**Form Handling**
- `react-hook-form` for form state management
- `@hookform/resolvers` with Zod for validation
- `drizzle-zod` for schema-based validation

**Database & ORM**
- `drizzle-orm` v0.39+ for database operations
- `drizzle-kit` for migrations
- `@neondatabase/serverless` for Neon connection

**Utilities**
- `date-fns` for date manipulation
- `nanoid` for unique ID generation
- `clsx` and `tailwind-merge` for className utilities