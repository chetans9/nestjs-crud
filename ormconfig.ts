import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const ORMConfig : PostgresConnectionOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'user1',
    password: 'user1_password',
    database: 'customers_crud',
    synchronize: false,
    entities : ['./src/**/*.entity.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    
    // cli: {
    //     migrationsDir: "./src/database/migrations/"
    // },
    migrationsTableName: "migrations"
}

const source = new DataSource(ORMConfig);

export default source;
