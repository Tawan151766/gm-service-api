import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserService } from './UserService';
import { LoginDto } from '../dto/LoginDto';
import { AppError } from '../utils/AppError';

export class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async login(loginDto: LoginDto): Promise<{ user: any; token: string }> {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = this.generateToken(user.id);

    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token
    };
  }

  private generateToken(userId: number): string {
    return jwt.sign(
      { userId },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
    } catch (error) {
      throw new AppError('Invalid token', 401);
    }
  }
}