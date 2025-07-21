import "reflect-metadata";
import { AppDataSource } from "../config/database";
import { runSeeds } from "./createTestUser";
import { logger } from "../utils/logger";

async function main() {
  try {
    console.log("🔌 Connecting to database...");
    await AppDataSource.initialize();
    console.log("✅ Database connected successfully");

    // Run all seeds
    await runSeeds();

    console.log("🎉 All seeds completed successfully!");
    console.log("📋 Test credentials:");
    console.log("   Email: admin@example.com");
    console.log("   Password: password123");
    console.log("🌐 Swagger UI: http://localhost:3001/api-docs");
  } catch (error) {
    console.error("❌ Seed process failed:", error);
    process.exit(1);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log("🔌 Database connection closed");
    }
  }
}

// Run the seed script
main();
