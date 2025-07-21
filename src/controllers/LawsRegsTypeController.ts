import { Request, Response } from "express";
import { LawsRegsTypeService } from "../services/LawsRegsTypeService";
import {
  CreateLawsRegsTypeDto,
  UpdateLawsRegsTypeDto,
} from "../dto/LawsRegsTypeDto";
import { validate } from "class-validator";
import { AppError } from "../utils/AppError";

export class LawsRegsTypeController {
  private service = new LawsRegsTypeService();

  /**
   * @swagger
   * /api/laws-regs-types:
   *   get:
   *     summary: Get all laws/regulations types
   *     tags: [Laws/Regulations Types]
   *     responses:
   *       200:
   *         description: List of laws/regulations types
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
      data: types,
    });
  }

  /**
   * @swagger
   * /api/laws-regs-types/{id}:
   *   get:
   *     summary: Get laws/regulations type by ID
   *     tags: [Laws/Regulations Types]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Laws/regulations type details
   *       404:
   *         description: Type not found
   */
  async findById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const type = await this.service.findById(id);
    res.json({
      success: true,
      data: type,
    });
  }

  /**
   * @swagger
   * /api/laws-regs-types:
   *   post:
   *     summary: Create new laws/regulations type
   *     tags: [Laws/Regulations Types]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateLawsRegsTypeDto'
   *     responses:
   *       201:
   *         description: Type created successfully
   *       400:
   *         description: Validation error
   */
  async create(req: Request, res: Response): Promise<void> {
    const dto = Object.assign(new CreateLawsRegsTypeDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw new AppError("Validation failed", 400, errors);
    }

    const type = await this.service.create(dto);
    res.status(201).json({
      success: true,
      data: type,
    });
  }

  /**
   * @swagger
   * /api/laws-regs-types/{id}:
   *   put:
   *     summary: Update laws/regulations type
   *     tags: [Laws/Regulations Types]
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
   *             $ref: '#/components/schemas/UpdateLawsRegsTypeDto'
   *     responses:
   *       200:
   *         description: Type updated successfully
   *       404:
   *         description: Type not found
   */
  async update(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const dto = Object.assign(new UpdateLawsRegsTypeDto(), req.body);

    const type = await this.service.update(id, dto);
    res.json({
      success: true,
      data: type,
    });
  }

  /**
   * @swagger
   * /api/laws-regs-types/{id}:
   *   delete:
   *     summary: Delete laws/regulations type
   *     tags: [Laws/Regulations Types]
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
      message: "Laws/Regulations Type deleted successfully",
    });
  }
}
