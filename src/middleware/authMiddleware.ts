import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';
import { AppError } from '../utils/AppError';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    console.log('Auth Header:', authHeader); // Debug log
    
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    console.log('Extracted Token:', token ? 'Token exists' : 'No token'); // Debug log

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Access token required'
      });
      return;
    }

    const authService = new AuthService();
    const decoded = authService.verifyToken(token);
    console.log('Token decoded successfully'); // Debug log
    
    // You can add user lookup here if needed
    req.user = decoded;
    
    next();
  } catch (error) {
    console.log('Auth Error:', error); // Debug log
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        success: false,
        message: error.message
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
  }
};