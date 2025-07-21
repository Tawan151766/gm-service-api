import { Request, Response } from 'express';
import { PerfResultsTypeService } from '../services/PerfResultsTypeService';
import { CreatePerfResultsTypeDto, UpdatePerfResultsTypeDto } from '../dto/PerfResultsTypeDto';
import { validate } from 'class-validator';
import { AppError } from '../utils/AppError';

export class PerfResultsTypeController {
  private service = new PerfResultsTypeService();

  /**
   * @swagger
   * /api/perf-results-types:
   *   get:
   *     summary: Get all performance results types
   *     tags: [Performance Results Types]
   *     responses:
   *       200:
   *         description: List of performance results types
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
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
   * /api/perf-results-types/{id}:
   *   get:
   *     summary: Get performance results type by ID
   *     tags: [Performance Results Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Performance results type details
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
   * /api/perf-results-types:
   *   post:
   *     summary: Create new performance results type
   *     tags: [Performance Results Types]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreatePerfResultsTypeDto'
   *     responses:
   *       201:
   *         description: Type created successfully
   *       400:
   *         description: Validation error
   */
  async create(req: Request, res: Response): Promise<void> {
    const dto = Object.assign(new CreatePerfResultsTypeDto(), req.body);
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
   * /api/perf-results-types/{id}:
   *   put:
   *     summary: Update performance results type
   *     tags: [Performance Results Types]
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
   *             $ref: '#/components/schemas/UpdatePerfResultsTypeDto'
   *     responses:
   *       200:
   *         description: Type updated successfully
   *       404:
   *         description: Type not found
   */
  async update(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const dto = Object.assign(new UpdatePerfResultsTypeDto(), req.body);
    
    const type = await this.service.update(id, dto);
    res.json({
      success: true,
      data: type
    });
  }

  /**
   * @swagger
   * /api/perf-results-types/{id}:
   *   delete:
   *     summary: Delete performance results type
   *     tags: [Performance Results Types]
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
      message: 'Performance Results Type deleted successfully'
    });
  }
}