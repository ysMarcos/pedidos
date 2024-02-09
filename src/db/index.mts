import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2"
import { DBCREDENCIAL } from "../env.js";

const connection = await mysql.createConnection({
    host: DBCREDENCIAL.host,
    port: DBCREDENCIAL.port,
    user: DBCREDENCIAL.user,
    password: DBCREDENCIAL.password,
    database: DBCREDENCIAL.database
})

export const db: MySql2Database = drizzle(connection)
