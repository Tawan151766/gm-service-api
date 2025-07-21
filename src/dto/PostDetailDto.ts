import { IsNotEmpty, IsString, IsNumber, IsDateString } from "class-validator";

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePostDetailDto:
 *       type: object
 *       required:
 *         - post_type_id
 *         - date
 *         - title_name
 *         - topic_name
 *         - details
 *       properties:
 *         post_type_id:
 *           type: number
 *           description: ID of the post type
 *           example: 1
 *         date:
 *           type: string
 *           format: date
 *           description: Post date
 *           example: "2025-01-21"
 *         title_name:
 *           type: string
 *           description: Title of the post
 *           example: "ข่าวประชาสัมพันธ์"
 *         topic_name:
 *           type: string
 *           description: Topic name
 *           example: "การประชุมสำคัญ"
 *         details:
 *           type: string
 *           description: Post details
 *           example: "รายละเอียดของข่าวประชาสัมพันธ์"
 */
export class CreatePostDetailDto {
  @IsNumber()
  @IsNotEmpty()
  post_type_id!: number;

  @IsDateString()
  @IsNotEmpty()
  date!: string;

  @IsString()
  @IsNotEmpty()
  title_name!: string;

  @IsString()
  @IsNotEmpty()
  topic_name!: string;

  @IsString()
  @IsNotEmpty()
  details!: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePostDetailDto:
 *       type: object
 *       properties:
 *         post_type_id:
 *           type: number
 *           description: ID of the post type
 *           example: 1
 *         date:
 *           type: string
 *           format: date
 *           description: Post date
 *           example: "2025-01-21"
 *         title_name:
 *           type: string
 *           description: Title of the post
 *           example: "ข่าวประชาสัมพันธ์"
 *         topic_name:
 *           type: string
 *           description: Topic name
 *           example: "การประชุมสำคัญ"
 *         details:
 *           type: string
 *           description: Post details
 *           example: "รายละเอียดของข่าวประชาสัมพันธ์"
 */
export class UpdatePostDetailDto {
  @IsNumber()
  post_type_id?: number;

  @IsDateString()
  date?: string;

  @IsString()
  title_name?: string;

  @IsString()
  topic_name?: string;

  @IsString()
  details?: string;
}
