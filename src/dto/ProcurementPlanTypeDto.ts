import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateProcurementPlanTypeDto:
 *       type: object
 *       required:
 *         - type_name
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the procurement plan type
 *           example: "แผนการจัดซื้อจัดจ้างประจำปี"
 */
export class CreateProcurementPlanTypeDto {
  @IsString()
  @IsNotEmpty()
  type_name!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateProcurementPlanTypeDto:
 *       type: object
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the procurement plan type
 *           example: "แผนการจัดซื้อจัดจ้างประจำปี"
 */
export class UpdateProcurementPlanTypeDto {
  @IsString()
  type_name?: string;
}