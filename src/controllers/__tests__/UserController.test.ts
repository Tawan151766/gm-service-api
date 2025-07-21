import request from 'supertest';
import express from 'express';
import { UserController } from '../UserController';
import { UserService } from '../../services/UserService';

// Mock UserService
jest.mock('../../services/UserService');

describe('UserController', () => {
  let app: express.Application;
  let userController: UserController;
  let mockUserService: jest.Mocked<UserService>;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    
    userController = new UserController();
    mockUserService = new UserService() as jest.Mocked<UserService>;
    (userController as any).userService = mockUserService;

    app.post('/users', userController.createUser);
    app.get('/users', userController.getAllUsers);
    app.get('/users/:id', userController.getUserById);
  });

  describe('POST /users', () => {
    it('should create a user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123'
      };

      const mockUser = { id: 1, ...userData };
      mockUserService.createUser.mockResolvedValue(mockUser as any);

      const response = await request(app)
        .post('/users')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
      expect(response.body.message).toBe('User created successfully');
    });
  });

  describe('GET /users', () => {
    it('should return all users', async () => {
      const mockUsers = [
        { id: 1, email: 'user1@example.com' },
        { id: 2, email: 'user2@example.com' }
      ];

      mockUserService.getAllUsers.mockResolvedValue(mockUsers as any);

      const response = await request(app)
        .get('/users')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUsers);
      expect(response.body.count).toBe(2);
    });
  });
});