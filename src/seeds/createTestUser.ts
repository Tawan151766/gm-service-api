import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';

export async function createTestUser() {
  try {
    const userRepository = AppDataSource.getRepository(User);
    
    // Check if test user already exists
    const existingUser = await userRepository.findOne({
      where: { email: 'admin@example.com' }
    });

    if (existingUser) {
      console.log('Test user already exists');
      return existingUser;
    }

    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const testUser = userRepository.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword
    });

    const savedUser = await userRepository.save(testUser);
    console.log('Test user created successfully:', {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email
    });

    return savedUser;
  } catch (error) {
    console.error('Error creating test user:', error);
    throw error;
  }
}