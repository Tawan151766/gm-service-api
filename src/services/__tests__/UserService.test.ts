import { UserService } from '../UserService';
import { AppDataSource } from '../../config/database';
import { CreateUserDto } from '../../dto/CreateUserDto';
import { AppError } from '../../utils/AppError';

// Mock TypeORM
jest.mock('../../config/database');
jest.mock('bcryptjs');

describe('UserService', () => {
  let userService: UserService;
  let mockRepository: any;

  beforeEach(() => {
    mockRepository = {
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      remove: jest.fn()
    };

    (AppDataSource.getRepository as jest.Mock).mockReturnValue(mockRepository);
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123'
      };

      const mockUser = { id: 1, ...createUserDto };

      mockRepository.findOne.mockResolvedValue(null);
      mockRepository.create.mockReturnValue(mockUser);
      mockRepository.save.mockResolvedValue(mockUser);

      const result = await userService.createUser(createUserDto);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { email: createUserDto.email }
      });
      expect(mockRepository.create).toHaveBeenCalled();
      expect(mockRepository.save).toHaveBeenCalledWith(mockUser);
      expect(result).toEqual(mockUser);
    });

    it('should throw error if user already exists', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123'
      };

      mockRepository.findOne.mockResolvedValue({ id: 1 });

      await expect(userService.createUser(createUserDto))
        .rejects
        .toThrow(new AppError('User with this email already exists', 400));
    });
  });

  describe('getUserById', () => {
    it('should return user if found', async () => {
      const mockUser = { id: 1, name: 'John Doe', email: 'test@example.com' };
      mockRepository.findOne.mockResolvedValue(mockUser);

      const result = await userService.getUserById(1);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        select: ['id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at']
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw error if user not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(userService.getUserById(1))
        .rejects
        .toThrow(new AppError('User not found', 404));
    });
  });
});