import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1632062342310 implements MigrationInterface {
    name = 'SchemaSync1632062342310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "description"`);
    }

}
