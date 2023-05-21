import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1683509911684 implements MigrationInterface {
  name = 'Default1683509911684';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "marks" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_051deeb008f7449216d568872c6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "subcategories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_793ef34ad0a3f86f09d4837007c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "suppliers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "instagram" character varying NOT NULL, "address" character varying NOT NULL, "site" character varying NOT NULL, "virtual" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "price_cost" numeric NOT NULL, "price_sale" numeric NOT NULL, "price_promotional" numeric NOT NULL, "in_promotion" character varying NOT NULL, "supplier_id" integer NOT NULL, "subcategory_id" integer NOT NULL, "mark_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_c9de3a8edea9269ca774c919b9" UNIQUE ("subcategory_id"), CONSTRAINT "REL_84bf8b9a66c3d9d4495e7aa7c3" UNIQUE ("mark_id"), CONSTRAINT "REL_0ec433c1e1d444962d592d86c8" UNIQUE ("supplier_id"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "subcategories" ADD CONSTRAINT "FK_f7b015bc580ae5179ba5a4f42ec" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_c9de3a8edea9269ca774c919b9a" FOREIGN KEY ("subcategory_id") REFERENCES "subcategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_84bf8b9a66c3d9d4495e7aa7c36" FOREIGN KEY ("mark_id") REFERENCES "marks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_0ec433c1e1d444962d592d86c86" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_0ec433c1e1d444962d592d86c86"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_84bf8b9a66c3d9d4495e7aa7c36"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_c9de3a8edea9269ca774c919b9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "subcategories" DROP CONSTRAINT "FK_f7b015bc580ae5179ba5a4f42ec"`,
    );
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "suppliers"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "subcategories"`);
    await queryRunner.query(`DROP TABLE "marks"`);
  }
}
