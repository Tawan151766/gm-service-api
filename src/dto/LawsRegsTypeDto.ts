import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLawsRegsTypeDto:
 *       type: object
 *       required:
 *         - type_name
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the laws/regulations type
 *           example: "กฎหมายแรงงาน"
 */
export class CreateLawsRegsTypeDto {
  @IsString()
  @IsNotEmpty()
  type_name!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateLawsRegsTypeDto:
 *       type: object
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the laws/regulations type
 *           example: "กฎหมายแรงงาน"
 */
export class UpdateLawsRegsTypeDto {
  @IsString()
  type_name?: string;
}