import { int } from "drizzle-orm/mysql-core";
import { mysqlTable } from "drizzle-orm/mysql-core";

export const table = mysqlTable("table", {
    id: int('id').autoincrement().primaryKey().notNull(),
    number: int('number').notNull()
});
