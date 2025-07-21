import { Router } from 'express';
import { PerfResultsTypeController } from '../controllers/PerfResultsTypeController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();
const controller = new PerfResultsTypeController();

/**
 * @swagger
 * tags:
 *   name: Performance Results Types
 *   description: Performance results type management
 */

router.get('/', asyncHandler(controller.findAll.bind(controller)));
router.get('/:id', asyncHandler(controller.findById.bind(controller)));
router.post('/', asyncHandler(controller.create.bind(controller)));
router.put('/:id', asyncHandler(controller.update.bind(controller)));
router.delete('/:id', asyncHandler(controller.delete.bind(controller)));

export default router;