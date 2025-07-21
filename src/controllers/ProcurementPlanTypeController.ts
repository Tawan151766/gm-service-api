import { Request, Response } from 'express';
import { ProcurementPlanTypeService } from '../services/ProcurementPlanTypeService';
import { CreateProcurementPlanTypeDto, UpdateProcurementPlanTypeDto } from '../dto/ProcurementPlanTypeDto';
import { validate } from 'class-validator';
import { AppError } from '../utils/AppError';

export class ProcurementPlanTypeController {
  private service = new ProcurementPlanTypeService();

  /**
   * @swagger
   * /api/procurement-plan-types:
   *   get:
   *     summary: Get all procurement plan types
   *     tags: [Procurement Plan Types]
   *     responses:
   *       200:
   *         description: List of procurement plan types
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
   * /api/procurement-plan-types/{id}:
   *   get:
   *     summary: Get procurement plan type by ID
   *     tags: [Procurement Plan Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Procurement plan type details
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
   * /api/procurement-plan-types:
   *   post:
   *     summary: Create new procurement plan type
   *     tags: [Procurement Plan Types]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateProcurementPlanTypeDto'
   *     responses:
   *       201:
   *         description: Type created successfully
   *       400:
   *         description: Validation error
   */
  async create(req: Request, res: Response): Promise<void> {
    const dto = Object.assign(new CreateProcurementPlanTypeDto(), req.body);
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
   * /api/procurement-plan-types/{id}:
   *   put:
   *     summary: Update procurement plan type
   *     tags: [Procurement Plan Types]
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
   *             $ref: '#/components/schemas/UpdateProcurementPlanTypeDto'
   *     responses:
   *       200:
   *         description: Type updated successfully
   *       404:
   *         description: Type not found
   */
  async update(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const dto = Object.assign(new UpdateProcurementPlanTypeDto(), req.body);
    
    const type = await this.service.update(id, dto);
    res.json({
      success: true,
      data: type
    });
  }

  /**
   * @swagger
   * /api/procurement-plan-types/{id}:
   *   delete:
   *     summary: Delete procurement plan type
   *     tags: [Procurement Plan Types]
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
      message: 'Procurement Plan Type deleted successfully'
    });
  }
}