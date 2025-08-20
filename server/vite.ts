/**
 * vite.ts
 *
 * This file sets up the integration of Vite with the Express server.
 * It provides:
 *   - setupVite: mounts the Vite development middleware for hot module replacement (HMR)
 *   - serveStatic: serves the built static client files in production
 *   - log: a simple timestamped logging utility
 *
 * Usage:
 *   - In development, call setupVite(app, server) to enable Vite HMR
 *   - In production, call serveStatic(app) to serve the pre-built client
 */

import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

/**
 * Logs a message with a timestamp and optional source tag
 * @param message - The message to log
 * @param source - Optional source label (default: "express")
 */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Sets up Vite in middleware mode for development
 * - Enables HMR (hot module replacement)
 * - Transforms index.html with cache-busting query strings
 * @param app - Express application instance
 * @param server - HTTP server instance (needed for HMR)
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1); // stop server on Vite error
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  // Catch-all route to transform index.html for any request
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // Add a cache-busting query string to main.tsx to force reload on changes
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Serves the pre-built static client files for production
 * - Throws an error if the build directory does not exist
 * @param app - Express application instance
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // Catch-all route to serve index.html for client-side routing
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
