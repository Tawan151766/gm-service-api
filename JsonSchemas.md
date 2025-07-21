# JSON Schemas for Frontend Development

## 📋 Data Models & Schemas

This document provides JSON schemas and example responses for all API endpoints to help frontend developers understand the data structure.

## 🔐 Authentication Schemas

### Login Request
```json
{
  "email": "string (required, email format)",
  "password": "string (required, min 6 characters)"
}
```

### Login Response
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

## 📋 Laws & Regulations Schemas

### LawsRegsType Schema
```json
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
```

### Create/Update LawsRegsType Request
```json
{
  "type_name": "string (required, max 255 characters)"
}
```

## 📊 Performance Results Schemas

### PerfResultsType Schema
```json
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
```

### Create/Update PerfResultsType Request
```json
{
  "type_name": "string (required, max 255 characters)"
}
```

## 📝 Post Management Schemas

### PostType Schema
```json
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
```

### Create/Update PostType Request
```json
{
  "type_name": "string (required, max 255 characters)"
}
```

### PostDetail Schema (Nested in PostType)
```json
{
  "id": 1,
  "post_type_id": 1,
  "date": "2025-01-21",
  "title_name": "ข่าวสำคัญ",
  "topic_name": "การประชุม",
  "details": "รายละเอียดข่าว...",
  "created_at": "2025-01-21T14:54:01.000Z",
  "updated_at": "2025-01-21T14:54:01.000Z"
}
```

### PostPhoto Schema
```json
{
  "id": 1,
  "post_detail_id": 1,
  "post_photo_file": "/uploads/photo1.jpg",
  "post_photo_status": "active",
  "created_at": "2025-01-21T14:54:01.000Z",
  "updated_at": "2025-01-21T14:54:01.000Z"
}
```

### PostPdf Schema
```json
{
  "id": 1,
  "post_detail_id": 1,
  "post_pdf_file": "/uploads/document1.pdf",
  "created_at": "2025-01-21T14:54:01.000Z",
  "updated_at": "2025-01-21T14:54:01.000Z"
}
```

### PostVideo Schema
```json
{
  "id": 1,
  "post_detail_id": 1,
  "post_video_file": "/uploads/video1.mp4",
  "created_at": "2025-01-21T14:54:01.000Z",
  "updated_at": "2025-01-21T14:54:01.000Z"
}
```

## 🛒 Procurement Plan Schemas

### ProcurementPlanType Schema
```json
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
```

### Create/Update ProcurementPlanType Request
```json
{
  "type_name": "string (required, max 255 characters)"
}
```

## 🔧 Standard Response Schemas

### Success Response
```json
{
  "success": true,
  "data": "any (object, array, or primitive)",
  "message": "string (optional)"
}
```

### Error Response
```json
{
  "success": false,
  "message": "string (error description)",
  "errors": "array (optional, for validation errors)"
}
```

### Validation Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "property": "type_name",
      "constraints": {
        "isNotEmpty": "type_name should not be empty",
        "maxLength": "type_name must be shorter than or equal to 255 characters"
      }
    }
  ]
}
```

## 📱 TypeScript Interfaces

For TypeScript projects, here are the interface definitions:

```typescript
// Authentication
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
    };
    token: string;
  };
  message: string;
}

// Laws & Regulations
interface LawsRegsType {
  id: number;
  type_name: string;
  created_at: string;
  updated_at: string;
  sections?: LawsRegsSection[];
}

interface LawsRegsSection {
  id: number;
  type_id: number;
  section_name: string;
  created_at: string;
  updated_at: string;
  files?: LawsRegsFile[];
}

interface LawsRegsFile {
  id: number;
  section_id: number;
  files_path: string;
  files_type: string;
  created_at: string;
  updated_at: string;
}

// Performance Results
interface PerfResultsType {
  id: number;
  type_name: string;
  created_at: string;
  updated_at: string;
  sections?: PerfResultsSection[];
}

interface PerfResultsSection {
  id: number;
  type_id: number;
  section_name: string;
  date: string;
  created_at: string;
  updated_at: string;
  subTopics?: PerfResultsSubTopic[];
}

interface PerfResultsSubTopic {
  id: number;
  section_id: number;
  topic_name: string;
  date: string;
  created_at: string;
  updated_at: string;
  files?: PerfResultsFile[];
}

interface PerfResultsFile {
  id: number;
  sub_topic_id: number;
  files_path: string;
  files_type: string;
  created_at: string;
  updated_at: string;
}

// Posts
interface PostType {
  id: number;
  type_name: string;
  created_at: string;
  updated_at: string;
  postDetails?: PostDetail[];
}

interface PostDetail {
  id: number;
  post_type_id: number;
  date: string;
  title_name: string;
  topic_name: string;
  details: string;
  created_at: string;
  updated_at: string;
  photos?: PostPhoto[];
  pdfs?: PostPdf[];
  videos?: PostVideo[];
}

interface PostPhoto {
  id: number;
  post_detail_id: number;
  post_photo_file: string;
  post_photo_status: string;
  created_at: string;
  updated_at: string;
}

interface PostPdf {
  id: number;
  post_detail_id: number;
  post_pdf_file: string;
  created_at: string;
  updated_at: string;
}

interface PostVideo {
  id: number;
  post_detail_id: number;
  post_video_file: string;
  created_at: string;
  updated_at: string;
}

// Procurement Plans
interface ProcurementPlanType {
  id: number;
  type_name: string;
  created_at: string;
  updated_at: string;
  files?: ProcurementPlanFile[];
}

interface ProcurementPlanFile {
  id: number;
  type_id: number;
  files_path: string;
  files_type: string;
  created_at: string;
  updated_at: string;
}

// Standard Responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ValidationError[];
}

interface ValidationError {
  property: string;
  constraints: Record<string, string>;
}

// Create/Update DTOs
interface CreateTypeRequest {
  type_name: string;
}

interface UpdateTypeRequest {
  type_name?: string;
}
```

## 🎯 Frontend Data Flow Examples

### React Hook Example
```typescript
import { useState, useEffect } from 'react';

interface ApiService {
  getLawTypes(): Promise<ApiResponse<LawsRegsType[]>>;
  getPostTypes(): Promise<ApiResponse<PostType[]>>;
  // ... other methods
}

const useLawTypes = (apiService: ApiService) => {
  const [lawTypes, setLawTypes] = useState<LawsRegsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLawTypes = async () => {
      try {
        setLoading(true);
        const response = await apiService.getLawTypes();
        if (response.success) {
          setLawTypes(response.data || []);
        } else {
          setError(response.message || 'Failed to fetch law types');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchLawTypes();
  }, [apiService]);

  return { lawTypes, loading, error };
};
```

### Vue Composition API Example
```typescript
import { ref, onMounted } from 'vue';

export const useLawTypes = (apiService: ApiService) => {
  const lawTypes = ref<LawsRegsType[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchLawTypes = async () => {
    try {
      loading.value = true;
      const response = await apiService.getLawTypes();
      if (response.success) {
        lawTypes.value = response.data || [];
      } else {
        error.value = response.message || 'Failed to fetch law types';
      }
    } catch (err) {
      error.value = 'Network error';
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchLawTypes);

  return {
    lawTypes,
    loading,
    error,
    refetch: fetchLawTypes,
  };
};
```

## 📋 Sample Data for Testing

The database is already seeded with sample data:

### Law Types:
- กฎหมายแรงงาน
- กฎหมายสิ่งแวดล้อม
- ระเบียบราชการ
- ข้อบังคับ

### Post Types:
- ข่าวประชาสัมพันธ์
- ข่าวกิจกรรม
- ประกาศ
- ข่าวสาร

### Performance Result Types:
- ผลการดำเนินงานประจำปี
- ผลการดำเนินงานรายไตรมาส
- รายงานการประเมิน
- ผลการตรวจสอบ

### Procurement Plan Types:
- แผนการจัดซื้อจัดจ้างประจำปี
- แผนการจัดซื้อครุภัณฑ์
- แผนการจัดจ้างบริการ
- แผนการจัดซื้อวัสดุ