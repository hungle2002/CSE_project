import express from 'express';
import ManualModeController from '../controllers/ManualModeController';
const router = express.Router();
// this file should be deleted
router.route('/:type').get(ManualModeController.getManualModeInfo).put(ManualModeController.updateManualModeInfo);

export default router;
