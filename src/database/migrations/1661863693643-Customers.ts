import { MigrationInterface, QueryRunner } from "typeorm";

export class Customers1661863693643 implements MigrationInterface {
    name = 'Customers1661863693643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "address" text NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "active" character varying, "created_at" TIMESTAMP, "gender" character varying, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
