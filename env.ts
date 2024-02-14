import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const DBCREDENCIAL = {
    host: process.env.HOST || "",
    port: Number(process.env.DBPORT) || 3306,
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || ""
}
