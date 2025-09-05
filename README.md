<!-- Banner (soon) -->
<p align="center">
  <img src="" alt="" />
</p>

<h1 align="center">🇺🇸 Army Special Forces (ASF) - Official Website</h1>

<p align="center">
  <b>Zanance's United States Army Special Forces | 1st SFG • 5th SFG • 10th SFG</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-white?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-gray?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-black?style=for-the-badge&logo=postgresql" />
  <img src="https://img.shields.io/badge/Style-TailwindCSS-lightgray?style=for-the-badge&logo=tailwind-css" />
</p>

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
   - [Frontend Architecture](#frontend-architecture)
   - [Backend Architecture](#backend-architecture)
   - [Database Schema Design](#database-schema-design)
   - [Project Structure](#project-structure)
   - [Development Architecture](#development-architecture)
3. [External Dependencies](#external-dependencies)
   - [Database & ORM](#database--orm)
   - [Frontend Libraries](#frontend-libraries)
   - [Development Tools](#development-tools)
   - [Design System](#design-system)
4. [Screenshots](#screenshots)
5. [License](#license)

---

## 🪖 Overview

This is a **full-stack web application** for the **Army Special Forces (ASF)** within Zanance's United States Army.
It serves as the **official website** showcasing ASF’s operations, recruitment process, organizational structure, and more.

---

## 🏗 System Architecture

### ⚡ Frontend Architecture

- **Framework**: React (TypeScript) with Vite for lightning-fast builds.
- **Routing**: Wouter (lightweight React router alternative).
- **UI Components**: Radix UI primitives + shadcn/ui for accessibility and consistency.
- **Styling**: Tailwind CSS with custom ASF color palette.
- **State Management**: TanStack Query (React Query) for server state.
- **Animations**: Framer Motion for smooth transitions.
- **Typography**: Inter + Rajdhani for a modern military aesthetic.

### 🖥 Backend Architecture

- **Runtime**: Node.js + Express.js.
- **Language**: TypeScript (ESM).
- **Dev Server**: tsx for running TS in development.
- **Build**: esbuild (server), Vite (client).
- **Storage**: In-memory with easy migration to database.
- **Abstraction**: CRUD storage layer for entities.

### 🗄 Database Schema Design

- **ORM**: Drizzle ORM for PostgreSQL.
- **Schema**: Located in `/shared/schema.ts`.
- **Tables**:
  - `users` – Authentication & profiles
  - `asf_stats` – Unit stats
  - `events` – Operations & training events
  - `courses` – Training & certifications
  - `propaganda` – Media & promotional material
- **Migrations**: Drizzle Kit.

### 📂 Project Structure

/client → Frontend (React)
/server → Backend (Express)
/shared → Shared TS types & DB schema

- UI components are separated into **reusable** and **page-specific** groups.

### 🛠 Development Architecture

- Hot Reload (HMR) with Vite.
- Strict TypeScript mode.
- Path aliases for clean imports.
- Runtime error modal in dev.
- Custom API request logging.

---

## 🔗 External Dependencies

### Database & ORM

- Neon (serverless PostgreSQL)
- Drizzle ORM
- connect-pg-simple (PostgreSQL sessions)

### Frontend Libraries

- Radix UI components
- TanStack React Query
- Framer Motion
- React Hook Form + resolvers
- date-fns
- clsx + class-variance-authority
- cmdk (Command Palette)

### Development Tools

- Vite + React plugin
- esbuild (server bundling)
- TypeScript
- Replit-specific Vite plugins
- PostCSS + Autoprefixer

### Design System

- shadcn/ui on Radix primitives
- Tailwind CSS military palette
- Lucide React icons
- Google Fonts: Inter + Rajdhani

---

## 📜 License

View LICENSE for more information.

---
