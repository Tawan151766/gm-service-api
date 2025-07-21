import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { AppDataSource } from "./config/database";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./utils/logger";
import { specs, swaggerUi } from "./config/swagger";
import { createTestUser } from "./seeds/createTestUser";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import lawsRegsTypeRoutes from "./routes/lawsRegsTypeRoutes";
import postTypeRoutes from "./routes/postTypeRoutes";
import perfResultsTypeRoutes from "./routes/perfResultsTypeRoutes";
import procurementPlanTypeRoutes from "./routes/procurementPlanTypeRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"),
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle preflight requests
// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });
// app.options("*", cors()); 
// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerOptions: {
      requestInterceptor: (req: any) => {
        req.headers["Content-Type"] = "application/json";
        return req;
      },
    },
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/laws-regs-types", lawsRegsTypeRoutes);
app.use("/api/post-types", postTypeRoutes);
app.use("/api/perf-results-types", perfResultsTypeRoutes);
app.use("/api/procurement-plan-types", procurementPlanTypeRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: `🚀 Your API is Ready! Run at port http://localhost:${PORT}`,
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use(errorHandler);

// Initialize database and start server
AppDataSource.initialize()
  .then(async () => {
    logger.info("Database connected successfully");

    // Create test user for authentication
    try {
      await createTestUser();
    } catch (error) {
      logger.warn("Could not create test user:", error);
    }

    app.listen(PORT, () => {
      logger.info(`Server is running on port http://localhost:${PORT}`);
      logger.info(`Swagger UI available at: http://localhost:${PORT}/api-docs`);
      logger.info(`Test Login Credentials: admin@example.com / password123`);
    });
  })
  .catch((error) => {
    logger.error("Database connection failed:", error);
    process.exit(1);
  });
