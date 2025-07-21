import { Router } from 'express';
import { ProcurementPlanTypeController } from '../controllers/ProcurementPlanTypeController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();
const controller = new ProcurementPlanTypeController();

/**
 * @swagger
 * tags:
 *   name: Procurement Plan Types
 *   description: Procurement plan type management
 */

router.get('/', asyncHandler(controller.findAll.bind(controller)));
router.get('/:id', asyncHandler(controller.findById.bind(controller)));
router.post('/', asyncHandler(controller.create.bind(controller)));
router.put('/:id', asyncHandler(controller.update.bind(controller)));
router.delete('/:id', asyncHandler(controller.delete.bind(controller)));

export default router;