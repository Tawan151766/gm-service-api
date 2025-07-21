import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePerfResultsSection1642000005000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perf_results_sections",
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
                        name: "date",
                        type: "date",
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
            "perf_results_sections",
            new TableForeignKey({
                columnNames: ["type_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "perf_results_types",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("perf_results_sections");
    }
}