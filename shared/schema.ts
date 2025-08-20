/**
 * schema.ts
 *
 * This file defines the database schema for the application using Drizzle ORM and Zod.
 * It includes:
 *   - Table definitions for Postgres with type-safe columns
 *   - Zod validation schemas for safe data insertion
 *   - TypeScript types inferred from the tables and schemas
 *
 * Tables included:
 *   - users: user accounts for authentication
 *   - asf_stats: statistics about Army Special Forces
 *   - events: ASF events and operations
 *   - courses: training programs and courses
 *   - propaganda: media and informational posts
 *
 * Usage:
 *   - Import tables into your Drizzle ORM queries
 *   - Use Zod schemas to validate API input before inserting into the DB
 *   - Use inferred types for full type safety in TypeScript
 */
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/**
 * Users table
 * - Stores user accounts for login/authentication
 * - id: primary key, auto-generated UUID
 * - username: unique string
 * - password: hashed password string
 */
export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

/**
 * ASF Statistics table
 * - Stores various statistics about the Army Special Forces
 * - activePersonnel: number of currently active personnel
 * - operationsHosted: number of operations hosted
 * - successRate: operations success rate percentage
 * - designatedFighters: number of specialized fighters
 * - trainingHours: total training hours
 */
export const asfStats = pgTable("asf_stats", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  activePersonnel: integer("active_personnel").notNull(),
  operationsHosted: integer("operations_hosted").notNull(),
  successRate: integer("success_rate").notNull(),
  designatedFighters: integer("designated_fighters").notNull(),
  trainingHours: integer("training_hours").notNull(),
});

/**
 * Events table
 * - Stores ASF events, operations, and exercises
 * - title: event title
 * - description: event description/details
 * - type: type/category of event
 * - status: current status (planned, active, completed, etc.)
 * - location: optional location string
 * - duration: optional duration string
 * - unitDeployed: optional deployed unit
 */
export const events = pgTable("events", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull(),
  location: text("location"),
  duration: text("duration"),
  unitDeployed: text("unit_deployed"),
});

/**
 * Courses table
 * - Stores ASF courses/training programs
 * - title: course name
 * - description: details about the course
 * - duration: length of course
 * - award: certificate or rank awarded
 * - prerequisites: required skills/qualifications
 * - schedule: optional schedule info
 * - isActive: whether the course is currently active
 */
export const courses = pgTable("courses", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
  award: text("award").notNull(),
  prerequisites: text("prerequisites").notNull(),
  schedule: text("schedule"),
  isActive: boolean("is_active").default(true),
});

/**
 * Propaganda table
 * - Stores media and informational posts
 * - title: media title
 * - description: optional description
 * - imageUrl: optional image URL
 * - category: type/category of media
 * - isHighlight: flag for featured media
 */
export const propaganda = pgTable("propaganda", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  category: text("category").notNull(),
  isHighlight: boolean("is_highlight").default(false),
});

/**
 * Zod schemas for inserting data
 * - Validates API inputs before sending to database
 */
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertStatsSchema = createInsertSchema(asfStats);
export const insertEventSchema = createInsertSchema(events);
export const insertCourseSchema = createInsertSchema(courses);
export const insertPropagandaSchema = createInsertSchema(propaganda);

/**
 * TypeScript types inferred from tables & Zod schemas
 */
export type InsertUser = z.infer<typeof insertUserSchema>; // for inserting a new user
export type User = typeof users.$inferSelect; // full user row
export type ASFStats = typeof asfStats.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Propaganda = typeof propaganda.$inferSelect;
