import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';
import { LoginDto } from '../dto/LoginDto';
import { validateDto } from '../utils/validation';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const loginDto = await validateDto(LoginDto, req.body);
      const result = await this.authService.login(loginDto);
      
      res.json({
        success: true,
        data: result,
        message: 'Login successful'
      });
    } catch (error) {
      next(error);
    }
  };
}