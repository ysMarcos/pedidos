import { float } from "drizzle-orm/mysql-core";
import { varchar } from "drizzle-orm/mysql-core";
import { int } from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";

export const item = mysqlTable("item", {
    id: int('id').autoincrement().primaryKey().notNull(),
    name: varchar('name', {length: 255}).notNull(),
    value: float('value').notNull()
});
