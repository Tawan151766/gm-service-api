import { Request, Response } from 'express';
import { PostTypeService } from '../services/PostTypeService';
import { CreatePostTypeDto, UpdatePostTypeDto } from '../dto/PostTypeDto';
import { validate } from 'class-validator';
import { AppError } from '../utils/AppError';

export class PostTypeController {
  private service = new PostTypeService();

  /**
   * @swagger
   * /api/post-types:
   *   get:
   *     summary: Get all post types
   *     tags: [Post Types]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: List of post types
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *       401:
   *         description: Unauthorized - Invalid or missing token
   */
  async findAll(req: Request, res: Response): Promise<void> {
    const types = await this.service.findAll();
    res.json({
      success: true,
      data: types
    });
  }

  /**
   * @swagger
   * /api/post-types/{id}:
   *   get:
   *     summary: Get post type by ID
   *     tags: [Post Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Post type details
   *       404:
   *         description: Type not found
   */
  async findById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const type = await this.service.findById(id);
    res.json({
      success: true,
      data: type
    });
  }

  /**
   * @swagger
   * /api/post-types:
   *   post:
   *     summary: Create new post type
   *     tags: [Post Types]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreatePostTypeDto'
   *     responses:
   *       201:
   *         description: Type created successfully
   *       400:
   *         description: Validation error
   */
  async create(req: Request, res: Response): Promise<void> {
    const dto = Object.assign(new CreatePostTypeDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw new AppError('Validation failed', 400, errors);
    }

    const type = await this.service.create(dto);
    res.status(201).json({
      success: true,
      data: type
    });
  }

  /**
   * @swagger
   * /api/post-types/{id}:
   *   put:
   *     summary: Update post type
   *     tags: [Post Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdatePostTypeDto'
   *     responses:
   *       200:
   *         description: Type updated successfully
   *       404:
   *         description: Type not found
   */
  async update(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const dto = Object.assign(new UpdatePostTypeDto(), req.body);
    
    const type = await this.service.update(id, dto);
    res.json({
      success: true,
      data: type
    });
  }

  /**
   * @swagger
   * /api/post-types/{id}:
   *   delete:
   *     summary: Delete post type
   *     tags: [Post Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Type deleted successfully
   *       404:
   *         description: Type not found
   */
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    await this.service.delete(id);
    res.json({
      success: true,
      message: 'Post Type deleted successfully'
    });
  }
}