import { Router } from "express";
import { LawsRegsTypeController } from "../controllers/LawsRegsTypeController";
import { asyncHandler } from "../utils/asyncHandler";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();
const controller = new LawsRegsTypeController();

/**
 * @swagger
 * tags:
 *   name: Laws/Regulations Types
 *   description: Laws and regulations type management (Requires Bearer Token)
 */

// Apply authentication middleware to all routes
router.use(authenticateToken);

router.get("/", asyncHandler(controller.findAll.bind(controller)));
router.get("/:id", asyncHandler(controller.findById.bind(controller)));
router.post("/", asyncHandler(controller.create.bind(controller)));
router.put("/:id", asyncHandler(controller.update.bind(controller)));
router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export default router;
