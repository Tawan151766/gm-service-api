# Database Schema & Relations Documentation

## 📊 Database Overview

This document describes the database schema and relationships for the GM Service API system.

## 🏗️ Entity Relationship Diagram (ERD)

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   LawsRegsType  │    │ PerfResultsType │    │    PostType     │
│                 │    │                 │    │                 │
│ • id (PK)       │    │ • id (PK)       │    │ • id (PK)       │
│ • type_name     │    │ • type_name     │    │ • type_name     │
│ • created_at    │    │ • created_at    │    │ • created_at    │
│ • updated_at    │    │ • updated_at    │    │ • updated_at    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │ 1:N                   │ 1:N                   │ 1:N
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ LawsRegsSection │    │PerfResultsSection│    │   PostDetail    │
│                 │    │                 │    │                 │
│ • id (PK)       │    │ • id (PK)       │    │ • id (PK)       │
│ • type_id (FK)  │    │ • type_id (FK)  │    │ • post_type_id  │
│ • section_name  │    │ • section_name  │    │ • date          │
│ • created_at    │    │ • date          │    │ • title_name    │
│ • updated_at    │    │ • created_at    │    │ • topic_name    │
└─────────────────┘    │ • updated_at    │    │ • details       │
         │              └─────────────────┘    │ • created_at    │
         │ 1:N                   │             │ • updated_at    │
         ▼                       │ 1:N         └─────────────────┘
┌─────────────────┐              ▼                       │
│  LawsRegsFiles  │    ┌─────────────────┐              │ 1:N
│                 │    │PerfResultsSubTop│              ▼
│ • id (PK)       │    │                 │    ┌─────────────────┐
│ • section_id(FK)│    │ • id (PK)       │    │   PostPhoto     │
│ • files_path    │    │ • section_id(FK)│    │                 │
│ • files_type    │    │ • topic_name    │    │ • id (PK)       │
│ • created_at    │    │ • date          │    │ • post_detail_id│
│ • updated_at    │    │ • created_at    │    │ • post_photo_file│
└─────────────────┘    │ • updated_at    │    │ • post_photo_status│
                       └─────────────────┘    │ • created_at    │
                                │             │ • updated_at    │
                                │ 1:N         └─────────────────┘
                                ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │ PerfResultsFile │    │    PostPdf      │
                       │                 │    │                 │
                       │ • id (PK)       │    │ • id (PK)       │
                       │ • sub_topic_id  │    │ • post_detail_id│
                       │ • files_path    │    │ • post_pdf_file │
                       │ • files_type    │    │ • created_at    │
                       │ • created_at    │    │ • updated_at    │
                       │ • updated_at    │    └─────────────────┘
                       └─────────────────┘
                                              ┌─────────────────┐
                                              │   PostVideo     │
                                              │                 │
                                              │ • id (PK)       │
                                              │ • post_detail_id│
                                              │ • post_video_file│
                                              │ • created_at    │
                                              │ • updated_at    │
                                              └─────────────────┘

┌─────────────────┐
│ProcurementPlanType│
│                 │
│ • id (PK)       │
│ • type_name     │
│ • created_at    │
│ • updated_at    │
└─────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────┐
│ProcurementPlanFile│
│                 │
│ • id (PK)       │
│ • type_id (FK)  │
│ • files_path    │
│ • files_type    │
│ • created_at    │
│ • updated_at    │
└─────────────────┘
```

## 📋 Table Definitions

### 1. Laws & Regulations System

#### `laws_regs_types`
- **Purpose**: Categories of laws and regulations
- **Primary Key**: `id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_name` (VARCHAR(255), NOT NULL) - Name of the law/regulation category
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `laws_regs_sections`
- **Purpose**: Sections within each law/regulation type
- **Primary Key**: `id`
- **Foreign Keys**: `type_id` → `laws_regs_types.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_id` (INT, NOT NULL, FOREIGN KEY)
  - `section_name` (VARCHAR(255), NOT NULL) - Name of the section
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `laws_regs_files`
- **Purpose**: Files attached to each section
- **Primary Key**: `id`
- **Foreign Keys**: `section_id` → `laws_regs_sections.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `section_id` (INT, NOT NULL, FOREIGN KEY)
  - `files_path` (VARCHAR(500), NOT NULL) - Path to the file
  - `files_type` (VARCHAR(100), NOT NULL) - Type of file (PDF, DOC, etc.)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### 2. Performance Results System

#### `perf_results_types`
- **Purpose**: Categories of performance results
- **Primary Key**: `id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_name` (VARCHAR(255), NOT NULL) - Name of the performance result category
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `perf_results_sections`
- **Purpose**: Sections within each performance result type
- **Primary Key**: `id`
- **Foreign Keys**: `type_id` → `perf_results_types.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_id` (INT, NOT NULL, FOREIGN KEY)
  - `section_name` (VARCHAR(255), NOT NULL) - Name of the section
  - `date` (DATE, NOT NULL) - Date of the section
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `perf_results_sub_topics`
- **Purpose**: Sub-topics within each section
- **Primary Key**: `id`
- **Foreign Keys**: `section_id` → `perf_results_sections.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `section_id` (INT, NOT NULL, FOREIGN KEY)
  - `topic_name` (VARCHAR(255), NOT NULL) - Name of the sub-topic
  - `date` (DATE, NOT NULL) - Date of the sub-topic
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `perf_results_files`
- **Purpose**: Files attached to each sub-topic
- **Primary Key**: `id`
- **Foreign Keys**: `sub_topic_id` → `perf_results_sub_topics.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `sub_topic_id` (INT, NOT NULL, FOREIGN KEY)
  - `files_path` (VARCHAR(500), NOT NULL) - Path to the file
  - `files_type` (VARCHAR(100), NOT NULL) - Type of file (PDF, DOC, etc.)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### 3. Post Management System

#### `post_types`
- **Purpose**: Categories of posts
- **Primary Key**: `id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_name` (VARCHAR(255), NOT NULL) - Name of the post category
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `post_details`
- **Purpose**: Main post content
- **Primary Key**: `id`
- **Foreign Keys**: `post_type_id` → `post_types.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `post_type_id` (INT, NOT NULL, FOREIGN KEY)
  - `date` (DATE, NOT NULL) - Post date
  - `title_name` (VARCHAR(255), NOT NULL) - Title of the post
  - `topic_name` (VARCHAR(255), NOT NULL) - Topic name
  - `details` (TEXT, NOT NULL) - Post content
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `post_photos`
- **Purpose**: Photo attachments for posts
- **Primary Key**: `id`
- **Foreign Keys**: `post_detail_id` → `post_details.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `post_detail_id` (INT, NOT NULL, FOREIGN KEY)
  - `post_photo_file` (VARCHAR(500), NOT NULL) - Path to photo file
  - `post_photo_status` (VARCHAR(50), NOT NULL) - Status of photo
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `post_pdfs`
- **Purpose**: PDF attachments for posts
- **Primary Key**: `id`
- **Foreign Keys**: `post_detail_id` → `post_details.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `post_detail_id` (INT, NOT NULL, FOREIGN KEY)
  - `post_pdf_file` (VARCHAR(500), NOT NULL) - Path to PDF file
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `post_videos`
- **Purpose**: Video attachments for posts
- **Primary Key**: `id`
- **Foreign Keys**: `post_detail_id` → `post_details.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `post_detail_id` (INT, NOT NULL, FOREIGN KEY)
  - `post_video_file` (VARCHAR(500), NOT NULL) - Path to video file
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### 4. Procurement Planning System

#### `procurement_plan_types`
- **Purpose**: Categories of procurement plans
- **Primary Key**: `id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_name` (VARCHAR(255), NOT NULL) - Name of the procurement plan category
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

#### `procurement_plan_files`
- **Purpose**: Files for procurement plans
- **Primary Key**: `id`
- **Foreign Keys**: `type_id` → `procurement_plan_types.id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `type_id` (INT, NOT NULL, FOREIGN KEY)
  - `files_path` (VARCHAR(500), NOT NULL) - Path to the file
  - `files_type` (VARCHAR(100), NOT NULL) - Type of file (PDF, DOC, etc.)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### 5. User Management System

#### `users`
- **Purpose**: System users for authentication
- **Primary Key**: `id`
- **Fields**:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `name` (VARCHAR(255), NOT NULL) - User's full name
  - `email` (VARCHAR(255), NOT NULL, UNIQUE) - User's email address
  - `password` (VARCHAR(255), NOT NULL) - Hashed password
  - `email_verified_at` (TIMESTAMP, NULLABLE) - Email verification timestamp
  - `remember_token` (VARCHAR(100), NULLABLE) - Remember token for sessions
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

## 🔗 Relationship Summary

### One-to-Many Relationships:

1. **LawsRegsType** → **LawsRegsSection** (1:N)
   - One law type can have many sections

2. **LawsRegsSection** → **LawsRegsFiles** (1:N)
   - One section can have many files

3. **PerfResultsType** → **PerfResultsSection** (1:N)
   - One performance type can have many sections

4. **PerfResultsSection** → **PerfResultsSubTopic** (1:N)
   - One section can have many sub-topics

5. **PerfResultsSubTopic** → **PerfResultsFile** (1:N)
   - One sub-topic can have many files

6. **PostType** → **PostDetail** (1:N)
   - One post type can have many post details

7. **PostDetail** → **PostPhoto** (1:N)
   - One post can have many photos

8. **PostDetail** → **PostPdf** (1:N)
   - One post can have many PDF files

9. **PostDetail** → **PostVideo** (1:N)
   - One post can have many videos

10. **ProcurementPlanType** → **ProcurementPlanFile** (1:N)
    - One procurement type can have many files

## 🚀 API Endpoints Summary

### Authentication
- `POST /api/auth/login` - User login

### Laws & Regulations
- `GET /api/laws-regs-types` - Get all law types
- `POST /api/laws-regs-types` - Create new law type
- `GET /api/laws-regs-types/{id}` - Get specific law type
- `PUT /api/laws-regs-types/{id}` - Update law type
- `DELETE /api/laws-regs-types/{id}` - Delete law type

### Performance Results
- `GET /api/perf-results-types` - Get all performance result types
- `POST /api/perf-results-types` - Create new performance result type
- `GET /api/perf-results-types/{id}` - Get specific performance result type
- `PUT /api/perf-results-types/{id}` - Update performance result type
- `DELETE /api/perf-results-types/{id}` - Delete performance result type

### Posts
- `GET /api/post-types` - Get all post types
- `POST /api/post-types` - Create new post type
- `GET /api/post-types/{id}` - Get specific post type
- `PUT /api/post-types/{id}` - Update post type
- `DELETE /api/post-types/{id}` - Delete post type

### Procurement Plans
- `GET /api/procurement-plan-types` - Get all procurement plan types
- `POST /api/procurement-plan-types` - Create new procurement plan type
- `GET /api/procurement-plan-types/{id}` - Get specific procurement plan type
- `PUT /api/procurement-plan-types/{id}` - Update procurement plan type
- `DELETE /api/procurement-plan-types/{id}` - Delete procurement plan type

## 🔐 Authentication

All API endpoints (except login) require Bearer Token authentication:

```
Authorization: Bearer <JWT_TOKEN>
```

### Test Credentials:
- **Email**: admin@example.com
- **Password**: password123

## 📱 Frontend Integration Notes

### Data Flow Examples:

1. **Laws & Regulations Flow**:
   ```
   LawsRegsType → LawsRegsSection → LawsRegsFiles
   ```

2. **Performance Results Flow**:
   ```
   PerfResultsType → PerfResultsSection → PerfResultsSubTopic → PerfResultsFile
   ```

3. **Post Management Flow**:
   ```
   PostType → PostDetail → [PostPhoto, PostPdf, PostVideo]
   ```

4. **Procurement Planning Flow**:
   ```
   ProcurementPlanType → ProcurementPlanFile
   ```

### Recommended Frontend Structure:

```javascript
// Example API calls for frontend
const api = {
  // Get law types with sections
  getLawTypes: () => fetch('/api/laws-regs-types'),
  
  // Get performance results with nested data
  getPerfResults: () => fetch('/api/perf-results-types'),
  
  // Get posts with media attachments
  getPosts: () => fetch('/api/post-types'),
  
  // Get procurement plans
  getProcurementPlans: () => fetch('/api/procurement-plan-types')
}
```

## 🌐 Base URLs

- **Development**: http://localhost:3001
- **Swagger UI**: http://localhost:3001/api-docs
- **Production**: https://api.gmservice.com (when deployed)