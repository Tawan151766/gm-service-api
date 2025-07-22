import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { LawsRegsSection } from '../entities/LawsRegsSection';
import { LawsRegsFiles } from '../entities/LawsRegsFiles';
import { LawsRegsType } from '../entities/LawsRegsType';
import { PerfResultsFile } from '../entities/PerfResultsFile';
import { PerfResultsSubTopic } from '../entities/PerfResultsSubTopic';
import { PerfResultsSection } from '../entities/PerfResultsSection';
import { PerfResultsType } from '../entities/PerfResultsType';
import { PostDetail } from '../entities/PostDetail';
import { PostPhoto } from '../entities/PostPhoto';
import { PostPdf } from '../entities/PostPdf';
import { PostVideo } from '../entities/PostVideo';
import { PostType } from '../entities/PostType';
import { ProcurementPlanFile } from '../entities/ProcurementPlanFile';
import { ProcurementPlanType } from '../entities/ProcurementPlanType';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'restful_api',
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  // Disable migrations during build and production
  migrationsRun: false,
  entities: [
    User,
    LawsRegsType,
    LawsRegsSection,
    LawsRegsFiles,
    PerfResultsType,
    PerfResultsSection,
    PerfResultsSubTopic,
    PerfResultsFile,
    PostType,
    PostDetail,
    PostPhoto,
    PostPdf,
    PostVideo,
    ProcurementPlanType,
    ProcurementPlanFile,
  ],
  // Only include migrations in development
  migrations: process.env.NODE_ENV === 'development' ? ['src/migrations/*.ts'] : [],
  subscribers: process.env.NODE_ENV === 'development' ? ['src/subscribers/*.ts'] : [],
});