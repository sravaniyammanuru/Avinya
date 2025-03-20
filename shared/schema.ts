import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  college: text("college").notNull(),
  event: text("event").notNull(),
  teamSize: text("team_size").notNull(),
  accommodation: text("accommodation").notNull(),
  message: text("message"),
});

export const insertRegistrationSchema = createInsertSchema(registrations).pick({
  name: true,
  email: true,
  phone: true,
  college: true,
  event: true,
  teamSize: true,
  accommodation: true,
  message: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
