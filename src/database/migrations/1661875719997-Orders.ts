import { MigrationInterface, QueryRunner } from "typeorm";

export class Orders1661875719997 implements MigrationInterface {
    name = 'Orders1661875719997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP, "customerId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
