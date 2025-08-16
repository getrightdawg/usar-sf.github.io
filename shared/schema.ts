import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

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

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertStatsSchema = createInsertSchema(asfStats);
export const insertEventSchema = createInsertSchema(events);
export const insertCourseSchema = createInsertSchema(courses);
export const insertPropagandaSchema = createInsertSchema(propaganda);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ASFStats = typeof asfStats.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Propaganda = typeof propaganda.$inferSelect;
