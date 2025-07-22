import jwt, { Secret } from 'jsonwebtoken';
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
    const payload = { userId };
    const secret: Secret = process.env.JWT_SECRET || 'fallback-secret';
    let expiresIn: any = '24h';
    if (process.env.JWT_EXPIRES_IN) {
      if (/^\d+$/.test(process.env.JWT_EXPIRES_IN)) {
        expiresIn = Number(process.env.JWT_EXPIRES_IN);
      } else {
        expiresIn = process.env.JWT_EXPIRES_IN;
      }
    }
    return jwt.sign(payload, secret, { expiresIn });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
    } catch (error) {
      throw new AppError('Invalid token', 401);
    }
  }
}