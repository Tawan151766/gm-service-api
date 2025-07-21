import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePerfResultsSubTopic1642000006000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perf_results_sub_topics",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "section_id",
                        type: "int",
                    },
                    {
                        name: "topic_name",
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
            "perf_results_sub_topics",
            new TableForeignKey({
                columnNames: ["section_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "perf_results_sections",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("perf_results_sub_topics");
    }
}