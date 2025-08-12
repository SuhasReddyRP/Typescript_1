import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite", // name of your SQLite file
    synchronize: true,           // auto-create tables in dev
    logging: true,                // logs queries in console
    entities: ["src/entity/**/*.ts"],  // path to entities
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
});
