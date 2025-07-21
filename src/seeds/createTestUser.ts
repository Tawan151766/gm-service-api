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
      console.log('✅ Admin user already exists:', {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email
      });
      return existingUser;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    const adminUser = userRepository.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      email_verified_at: new Date(),
      remember_token: null
    });

    const savedUser = await userRepository.save(adminUser);
    console.log('🎉 Admin user created successfully:', {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
      created_at: savedUser.created_at
    });

    return savedUser;
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    throw error;
  }
}

import { createAllSampleData } from './sampleData';

// Additional seed functions for other test data
export async function createSampleData() {
  try {
    console.log('🌱 Creating sample data for testing...');
    
    await createAllSampleData();
    
    console.log('✅ Sample data created successfully');
  } catch (error) {
    console.error('❌ Error creating sample data:', error);
    throw error;
  }
}

// Main seed function
export async function runSeeds() {
  try {
    console.log('🚀 Running database seeds...');
    
    await createTestUser();
    await createSampleData();
    
    console.log('✅ All seeds completed successfully');
  } catch (error) {
    console.error('❌ Seed process failed:', error);
    throw error;
  }
}