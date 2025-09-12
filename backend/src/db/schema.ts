import { relations } from "drizzle-orm";
import { boolean } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull().unique(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const listsTable = pgTable("lists", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull().unique(),
    subtitle: varchar({ length: 255 }).notNull(),
    created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().$onUpdate(() => new Date()).notNull(),
    user_id: integer('user_id').notNull(),
});

export const listsRelations = relations(listsTable, ({ one }) => ({
	user_di: one(usersTable, {
		fields: [listsTable.id],
		references: [usersTable.id],
	}),
}));

export const tasksTable = pgTable("tasks", {
  id: integer().generatedAlwaysAsIdentity().notNull(),
  title: varchar({ length: 255 }).notNull().unique(),
  subtitle: varchar({ length: 255 }).notNull(),
  description: text(),
  finish: boolean().default(false).notNull(),
  list_id: integer('list_id').notNull(),
});

export const tasksRelations = relations(tasksTable, ({ one }) => ({
	list_id: one(listsTable, {
		fields: [tasksTable.id],
		references: [listsTable.id],
	}),
}));