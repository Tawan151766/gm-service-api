import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLawsRegsSectionDto:
 *       type: object
 *       required:
 *         - type_id
 *         - section_name
 *       properties:
 *         type_id:
 *           type: number
 *           description: ID of the laws/regulations type
 *           example: 1
 *         section_name:
 *           type: string
 *           description: Name of the section
 *           example: "มาตรา 1"
 */
export class CreateLawsRegsSectionDto {
  @IsNumber()
  @IsNotEmpty()
  type_id!: number;

  @IsString()
  @IsNotEmpty()
  section_name!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateLawsRegsSectionDto:
 *       type: object
 *       properties:
 *         type_id:
 *           type: number
 *           description: ID of the laws/regulations type
 *           example: 1
 *         section_name:
 *           type: string
 *           description: Name of the section
 *           example: "มาตรา 1"
 */
export class UpdateLawsRegsSectionDto {
  @IsNumber()
  type_id?: number;

  @IsString()
  section_name?: string;
}