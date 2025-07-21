# API Endpoints Summary for Frontend Development

## 🚀 Base Information

- **Base URL**: `http://localhost:3001`
- **Swagger Documentation**: `http://localhost:3001/api-docs`
- **Authentication**: Bearer Token (JWT)
- **Content-Type**: `application/json`

## 🔐 Authentication

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "Admin User",
      "email": "admin@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful"
}
```

## 📋 Laws & Regulations APIs

### Get All Law Types
```http
GET /api/laws-regs-types
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type_name": "กฎหมายแรงงาน",
      "created_at": "2025-01-21T14:54:01.000Z",
      "updated_at": "2025-01-21T14:54:01.000Z",
      "sections": [
        {
          "id": 1,
          "type_id": 1,
          "section_name": "มาตรา 1",
          "created_at": "2025-01-21T14:54:01.000Z",
          "updated_at": "2025-01-21T14:54:01.000Z",
          "files": [
            {
              "id": 1,
              "section_id": 1,
              "files_path": "/uploads/law1.pdf",
              "files_type": "PDF",
              "created_at": "2025-01-21T14:54:01.000Z",
              "updated_at": "2025-01-21T14:54:01.000Z"
            }
          ]
        }
      ]
    }
  ]
}
```

### Create Law Type
```http
POST /api/laws-regs-types
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "กฎหมายใหม่"
}
```

### Get Specific Law Type
```http
GET /api/laws-regs-types/{id}
Authorization: Bearer <token>
```

### Update Law Type
```http
PUT /api/laws-regs-types/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "กฎหมายที่แก้ไข"
}
```

### Delete Law Type
```http
DELETE /api/laws-regs-types/{id}
Authorization: Bearer <token>
```

## 📊 Performance Results APIs

### Get All Performance Result Types
```http
GET /api/perf-results-types
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type_name": "ผลการดำเนินงานประจำปี",
      "created_at": "2025-01-21T14:54:01.000Z",
      "updated_at": "2025-01-21T14:54:01.000Z",
      "sections": [
        {
          "id": 1,
          "type_id": 1,
          "section_name": "ส่วนที่ 1",
          "date": "2025-01-21",
          "created_at": "2025-01-21T14:54:01.000Z",
          "updated_at": "2025-01-21T14:54:01.000Z",
          "subTopics": [
            {
              "id": 1,
              "section_id": 1,
              "topic_name": "หัวข้อย่อย 1",
              "date": "2025-01-21",
              "created_at": "2025-01-21T14:54:01.000Z",
              "updated_at": "2025-01-21T14:54:01.000Z",
              "files": [
                {
                  "id": 1,
                  "sub_topic_id": 1,
                  "files_path": "/uploads/perf1.pdf",
                  "files_type": "PDF",
                  "created_at": "2025-01-21T14:54:01.000Z",
                  "updated_at": "2025-01-21T14:54:01.000Z"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### Create Performance Result Type
```http
POST /api/perf-results-types
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "ผลการดำเนินงานใหม่"
}
```

### Get Specific Performance Result Type
```http
GET /api/perf-results-types/{id}
Authorization: Bearer <token>
```

### Update Performance Result Type
```http
PUT /api/perf-results-types/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "ผลการดำเนินงานที่แก้ไข"
}
```

### Delete Performance Result Type
```http
DELETE /api/perf-results-types/{id}
Authorization: Bearer <token>
```

## 📝 Post Management APIs

### Get All Post Types
```http
GET /api/post-types
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type_name": "ข่าวประชาสัมพันธ์",
      "created_at": "2025-01-21T14:54:01.000Z",
      "updated_at": "2025-01-21T14:54:01.000Z",
      "postDetails": [
        {
          "id": 1,
          "post_type_id": 1,
          "date": "2025-01-21",
          "title_name": "ข่าวสำคัญ",
          "topic_name": "การประชุม",
          "details": "รายละเอียดข่าว...",
          "created_at": "2025-01-21T14:54:01.000Z",
          "updated_at": "2025-01-21T14:54:01.000Z",
          "photos": [
            {
              "id": 1,
              "post_detail_id": 1,
              "post_photo_file": "/uploads/photo1.jpg",
              "post_photo_status": "active",
              "created_at": "2025-01-21T14:54:01.000Z",
              "updated_at": "2025-01-21T14:54:01.000Z"
            }
          ],
          "pdfs": [
            {
              "id": 1,
              "post_detail_id": 1,
              "post_pdf_file": "/uploads/document1.pdf",
              "created_at": "2025-01-21T14:54:01.000Z",
              "updated_at": "2025-01-21T14:54:01.000Z"
            }
          ],
          "videos": [
            {
              "id": 1,
              "post_detail_id": 1,
              "post_video_file": "/uploads/video1.mp4",
              "created_at": "2025-01-21T14:54:01.000Z",
              "updated_at": "2025-01-21T14:54:01.000Z"
            }
          ]
        }
      ]
    }
  ]
}
```

### Create Post Type
```http
POST /api/post-types
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "ประเภทโพสต์ใหม่"
}
```

### Get Specific Post Type
```http
GET /api/post-types/{id}
Authorization: Bearer <token>
```

### Update Post Type
```http
PUT /api/post-types/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "ประเภทโพสต์ที่แก้ไข"
}
```

### Delete Post Type
```http
DELETE /api/post-types/{id}
Authorization: Bearer <token>
```

## 🛒 Procurement Plan APIs

### Get All Procurement Plan Types
```http
GET /api/procurement-plan-types
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type_name": "แผนการจัดซื้อจัดจ้างประจำปี",
      "created_at": "2025-01-21T14:54:01.000Z",
      "updated_at": "2025-01-21T14:54:01.000Z",
      "files": [
        {
          "id": 1,
          "type_id": 1,
          "files_path": "/uploads/procurement1.pdf",
          "files_type": "PDF",
          "created_at": "2025-01-21T14:54:01.000Z",
          "updated_at": "2025-01-21T14:54:01.000Z"
        }
      ]
    }
  ]
}
```

### Create Procurement Plan Type
```http
POST /api/procurement-plan-types
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "แผนการจัดซื้อใหม่"
}
```

### Get Specific Procurement Plan Type
```http
GET /api/procurement-plan-types/{id}
Authorization: Bearer <token>
```

### Update Procurement Plan Type
```http
PUT /api/procurement-plan-types/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "type_name": "แผนการจัดซื้อที่แก้ไข"
}
```

### Delete Procurement Plan Type
```http
DELETE /api/procurement-plan-types/{id}
Authorization: Bearer <token>
```

## 🔧 Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "property": "type_name",
      "constraints": {
        "isNotEmpty": "type_name should not be empty"
      }
    }
  ]
}
```

### Unauthorized (401)
```json
{
  "success": false,
  "message": "Access token required"
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## 📱 Frontend Integration Examples

### React/JavaScript Example

```javascript
// API Service
class ApiService {
  constructor() {
    this.baseURL = 'http://localhost:3001';
    this.token = localStorage.getItem('token');
  }

  async login(email, password) {
    const response = await fetch(`${this.baseURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    if (data.success) {
      this.token = data.data.token;
      localStorage.setItem('token', this.token);
    }
    return data;
  }

  async getLawTypes() {
    const response = await fetch(`${this.baseURL}/api/laws-regs-types`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async createLawType(typeName) {
    const response = await fetch(`${this.baseURL}/api/laws-regs-types`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type_name: typeName }),
    });
    return response.json();
  }

  async getPostTypes() {
    const response = await fetch(`${this.baseURL}/api/post-types`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async getPerfResultsTypes() {
    const response = await fetch(`${this.baseURL}/api/perf-results-types`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async getProcurementPlanTypes() {
    const response = await fetch(`${this.baseURL}/api/procurement-plan-types`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
}

// Usage Example
const api = new ApiService();

// Login
await api.login('admin@example.com', 'password123');

// Get data
const lawTypes = await api.getLawTypes();
const postTypes = await api.getPostTypes();
const perfResults = await api.getPerfResultsTypes();
const procurementPlans = await api.getProcurementPlanTypes();
```

### Vue.js Example

```javascript
// store/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // Auth
  login(credentials) {
    return apiClient.post('/api/auth/login', credentials);
  },

  // Laws & Regulations
  getLawTypes() {
    return apiClient.get('/api/laws-regs-types');
  },
  createLawType(data) {
    return apiClient.post('/api/laws-regs-types', data);
  },
  updateLawType(id, data) {
    return apiClient.put(`/api/laws-regs-types/${id}`, data);
  },
  deleteLawType(id) {
    return apiClient.delete(`/api/laws-regs-types/${id}`);
  },

  // Posts
  getPostTypes() {
    return apiClient.get('/api/post-types');
  },
  createPostType(data) {
    return apiClient.post('/api/post-types', data);
  },

  // Performance Results
  getPerfResultsTypes() {
    return apiClient.get('/api/perf-results-types');
  },

  // Procurement Plans
  getProcurementPlanTypes() {
    return apiClient.get('/api/procurement-plan-types');
  },
};
```

## 🎯 Quick Start for Frontend Developers

1. **Start the API server**: `npm run dev`
2. **Access Swagger UI**: http://localhost:3001/api-docs
3. **Login to get token**: Use admin@example.com / password123
4. **Test endpoints**: Use the token in Authorization header
5. **Integrate with your frontend**: Use the examples above

## 📞 Support

- **Swagger Documentation**: http://localhost:3001/api-docs
- **Database Schema**: See DatabaseSchema.md
- **Sample Data**: Already seeded in database