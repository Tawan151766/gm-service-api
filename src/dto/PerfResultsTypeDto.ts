import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePerfResultsTypeDto:
 *       type: object
 *       required:
 *         - type_name
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the performance results type
 *           example: "ผลการดำเนินงานประจำปี"
 */
export class CreatePerfResultsTypeDto {
  @IsString()
  @IsNotEmpty()
  type_name!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePerfResultsTypeDto:
 *       type: object
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the performance results type
 *           example: "ผลการดำเนินงานประจำปี"
 */
export class UpdatePerfResultsTypeDto {
  @IsString()
  type_name?: string;
}