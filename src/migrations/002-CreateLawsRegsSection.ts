import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateLawsRegsSection1642000002000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "laws_regs_sections",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "type_id",
            type: "int",
          },
          {
            name: "section_name",
            type: "varchar",
            length: "255",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "laws_regs_sections",
      new TableForeignKey({
        columnNames: ["type_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "laws_regs_types",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("laws_regs_sections");
  }
}
