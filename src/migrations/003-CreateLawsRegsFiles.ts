import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLawsRegsFiles1642000003000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "laws_regs_files",
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
            "laws_regs_files",
            new TableForeignKey({
                columnNames: ["section_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "laws_regs_sections",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("laws_regs_files");
    }
}