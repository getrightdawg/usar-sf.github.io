/**
 * vite.config.ts
 *
 * Vite configuration for the web.
 *
 * Responsibilities:
 *   - Setup Vite for both development and production
 *   - Configure plugins for React and runtime error overlay
 *   - Define path aliases for cleaner imports
 *   - Set project root and build output directory
 *   - Configure development server file system restrictions
 *
 * Notes:
 *   - Base path is set to "./" for relative asset references
 *   - Production builds output to "dist/public"
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  // Plugins used by Vite
  plugins: [
    react(), // Enable React support
    runtimeErrorOverlay(), // Show runtime errors in overlay
    // Dynamically include Replit Cartographer plugin if in development on Replit
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer()
          ),
        ]
      : []),
  ],

  // Base path for assets
  base: "./",

  // Path resolution aliases
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"), // client source
      "@shared": path.resolve(import.meta.dirname, "shared"), // shared modules
      "@assets": path.resolve(import.meta.dirname, "attached_assets"), // static assets
    },
  },

  // Project root directory
  root: path.resolve(import.meta.dirname, "client"),

  // Build configuration
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"), // output directory
    emptyOutDir: true, // clear output directory before build
  },

  // Development server configuration
  server: {
    fs: {
      strict: true, // restrict file serving to project root
      deny: ["**/.*"], // deny access to hidden files
    },
  },
});
