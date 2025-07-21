import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { LoginDto } from '../dto/LoginDto';
import { validate } from 'class-validator';
import { AppError } from '../utils/AppError';

export class AuthController {
  private authService = new AuthService();

  /**
   * @swagger
   * components:
   *   schemas:
   *     LoginDto:
   *       type: object
   *       required:
   *         - email
   *         - password
   *       properties:
   *         email:
   *           type: string
   *           format: email
   *           example: "admin@example.com"
   *         password:
   *           type: string
   *           example: "password123"
   */
  async login(req: Request, res: Response): Promise<void> {
    const dto = Object.assign(new LoginDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw new AppError('Validation failed', 400, errors);
    }

    const result = await this.authService.login(dto);
    
    res.json({
      success: true,
      data: result,
      message: 'Login successful'
    });
  }
}