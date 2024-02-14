import { Config } from 'drizzle-kit';
import { DBCREDENCIAL } from './env';

export default {
    schema: "./src/modules/*/model.ts",
    out: "./src/db/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: DBCREDENCIAL.host,
        port: DBCREDENCIAL.port,
        user: DBCREDENCIAL.user,
        password: DBCREDENCIAL.password,
        database: DBCREDENCIAL.database
    }
} satisfies Config
