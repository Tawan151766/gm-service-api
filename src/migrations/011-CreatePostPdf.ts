import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePostPdf1642000011000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "post_pdfs",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "post_detail_id",
                        type: "int",
                    },
                    {
                        name: "post_pdf_file",
                        type: "varchar",
                        length: "500",
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
            "post_pdfs",
            new TableForeignKey({
                columnNames: ["post_detail_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "post_details",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("post_pdfs");
    }
}