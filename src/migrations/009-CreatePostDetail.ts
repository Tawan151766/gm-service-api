import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePostDetail1642000009000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "post_details",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "post_type_id",
                        type: "int",
                    },
                    {
                        name: "date",
                        type: "date",
                    },
                    {
                        name: "title_name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "topic_name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "details",
                        type: "text",
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
            "post_details",
            new TableForeignKey({
                columnNames: ["post_type_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "post_types",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("post_details");
    }
}