/**
 * index.ts
 *
 * Main server entry point.
 *
 * Responsibilities:
 *   - Initialize the Express app
 *   - Configure middleware (JSON parsing, URL encoding, static files)
 *   - Setup request logging for API calls
 *   - Register routes and HTTP server
 *   - Setup error handling middleware
 *   - Integrate Vite in development or serve static files in production
 *   - Start the server on the specified port
 *
 * Usage:
 *   - Run `npm run dev` for development with Vite HMR
 *   - Run `npm run start` for production serving the built client
 */

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();

// Middleware: parse JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware: serve static files
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname)));

/**
 * Request logging middleware for API calls
 * - Measures duration of requests
 * - Captures JSON response for logging
 */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

/**
 * Async IIFE to setup server
 */
(async () => {
  // Register routes and create HTTP server
  const server = await registerRoutes(app);

  /**
   * Error-handling middleware
   * - Returns JSON error response
   * - Throws error to propagate in dev mode (Vite)
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Development vs Production
  if (app.get("env") === "development") {
    await setupVite(app, server); // dev with Vite HMR
  } else {
    serveStatic(app); // production static files
  }

  // Start server with dynamic host for Render compatibility
  const port = parseInt(process.env.PORT || "5000", 10);
  const host =
    process.env.HOST ||
    (app.get("env") === "development" ? "127.0.0.1" : "0.0.0.0");

  server.listen({ port, host }, () => {
    log(`⚡ [express] serving on http://${host}:${port}`);
  });
})();
