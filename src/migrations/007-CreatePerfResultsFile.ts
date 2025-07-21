import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePerfResultsFile1642000007000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perf_results_files",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "sub_topic_id",
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
            "perf_results_files",
            new TableForeignKey({
                columnNames: ["sub_topic_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "perf_results_sub_topics",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("perf_results_files");
    }
}