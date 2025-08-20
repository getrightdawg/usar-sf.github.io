/**
 * routes.ts
 *
 * This file is responsible for registering all routes and creating the HTTP server.
 * Currently, it sets up an HTTP server wrapping the Express app.
 *
 * Usage:
 *   - Import `registerRoutes` in your server entry point (e.g., index.ts)
 *   - Call it with your Express app to get the HTTP server instance
 *   - Add API or web routes to the `app` inside this file
 */

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

/**
 * Registers all routes for the Express app and returns the HTTP server.
 *
 * @param app - Express application instance
 * @returns Promise resolving to the HTTP Server
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Create an HTTP server using the Express app
  const httpServer = createServer(app);

  // Example of how you could add routes in the future:
  // app.get("/api/users/:id", async (req, res) => {
  //   const user = await storage.getUser(req.params.id);
  //   if (!user) return res.status(404).json({ message: "User not found" });
  //   res.json(user);
  // });

  return httpServer;
}
