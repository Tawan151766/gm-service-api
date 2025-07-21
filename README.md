# RESTful API with TypeScript, Express, and TypeORM

A well-structured RESTful API built with clean architecture principles, featuring clear separation of concerns and comprehensive security measures.

## 🏗️ Architecture

- **Controller Layer**: Handles HTTP requests/responses and calls services
- **Service Layer**: Contains business logic and database operations
- **Entity Layer**: TypeORM entities that map to database tables
- **DTO Layer**: Data Transfer Objects with validation using class-validator
- **Middleware**: Authentication, error handling, and security middleware
- **Utils**: Helper functions and utilities

## 🚀 Features

- ✅ Clean Architecture with separation of concerns
- ✅ TypeORM with MySQL integration
- ✅ JWT Authentication
- ✅ Input validation with class-validator
- ✅ Error handling middleware
- ✅ Security middleware (Helmet, CORS, Rate limiting)
- ✅ Logging with Winston
- ✅ Unit tests with Jest
- ✅ Hot reload with ts-node-dev

## 📦 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **TypeORM** - Object-Relational Mapping
- **MySQL** - Database
- **JWT** - Authentication
- **class-validator** - Input validation
- **Winston** - Logging
- **Jest** - Testing

## 🛠️ Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database credentials and JWT secret.

3. **Setup MySQL database:**
   Create a MySQL database with the name specified in your `.env` file.

4. **Run the application:**
   ```bash
   # Development with hot reload
   npm run dev

   # Build for production
   npm run build
   npm start
   ```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Users
- `POST /api/users` - Create user (public)
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get user by ID (protected)
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

### Health Check
- `GET /health` - Health check endpoint

## 🔐 Authentication

Include JWT token in Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 📝 Example Usage

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Get Users (with token)
```bash
curl -X GET http://localhost:3000/api/users \
  -H "Authorization: Bearer <your-jwt-token>"
```

## 🏗️ Project Structure

```
src/
├── config/          # Database configuration
├── controllers/     # Request handlers
├── dto/            # Data Transfer Objects
├── entities/       # TypeORM entities
├── middleware/     # Custom middleware
├── routes/         # Route definitions
├── services/       # Business logic
└── utils/          # Helper utilities
```

## 🔒 Security Features

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Cross-Origin Resource Sharing configuration
- **Rate Limiting**: Prevents abuse by limiting requests
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Input Validation**: class-validator for request validation

## 📊 Logging

Logs are written to:
- Console (development)
- `logs/error.log` (error level)
- `logs/combined.log` (all levels)

## 🤝 Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Ensure all tests pass
4. Follow TypeScript best practices