import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePerfResultsSectionDto:
 *       type: object
 *       required:
 *         - type_id
 *         - section_name
 *         - date
 *       properties:
 *         type_id:
 *           type: number
 *           description: ID of the performance results type
 *           example: 1
 *         section_name:
 *           type: string
 *           description: Name of the section
 *           example: "ส่วนที่ 1"
 *         date:
 *           type: string
 *           format: date
 *           description: Section date
 *           example: "2025-01-21"
 */
export class CreatePerfResultsSectionDto {
  @IsNumber()
  @IsNotEmpty()
  type_id!: number;

  @IsString()
  @IsNotEmpty()
  section_name!: string;

  @IsDateString()
  @IsNotEmpty()
  date!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePerfResultsSectionDto:
 *       type: object
 *       properties:
 *         type_id:
 *           type: number
 *           description: ID of the performance results type
 *           example: 1
 *         section_name:
 *           type: string
 *           description: Name of the section
 *           example: "ส่วนที่ 1"
 *         date:
 *           type: string
 *           format: date
 *           description: Section date
 *           example: "2025-01-21"
 */
export class UpdatePerfResultsSectionDto {
  @IsNumber()
  type_id?: number;

  @IsString()
  section_name?: string;

  @IsDateString()
  date?: string;
}