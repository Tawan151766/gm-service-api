import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProcurementPlanFile1642000014000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "procurement_plan_files",
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
                        name: "files_path",
                        type: "varchar",
                        length: "500",
                    },
                    {
                        name: "files_type",
                        type: "varchar",
                        length: "100",
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
            "procurement_plan_files",
            new TableForeignKey({
                columnNames: ["type_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "procurement_plan_types",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("procurement_plan_files");
    }
}