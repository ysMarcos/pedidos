import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2"

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "poste23",
    database: "orders"
})

export const db: MySql2Database = drizzle(connection)
