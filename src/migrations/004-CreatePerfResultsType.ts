import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePerfResultsType1642000004000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perf_results_types",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "type_name",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("perf_results_types");
    }
}