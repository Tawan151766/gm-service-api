import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePostTypeDto:
 *       type: object
 *       required:
 *         - type_name
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the post type
 *           example: "ข่าวประชาสัมพันธ์"
 */
export class CreatePostTypeDto {
  @IsString()
  @IsNotEmpty()
  type_name!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePostTypeDto:
 *       type: object
 *       properties:
 *         type_name:
 *           type: string
 *           description: Name of the post type
 *           example: "ข่าวประชาสัมพันธ์"
 */
export class UpdatePostTypeDto {
  @IsString()
  type_name?: string;
}