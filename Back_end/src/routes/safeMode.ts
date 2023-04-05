import express from "express";
import SafeModeController from "../controllers/SafeModeController";
const router = express.Router()
// this file should be deleted
router.route('/:type').get(SafeModeController.getSafeModeInfo).put(SafeModeController.updateSafeModeInfo);

export default router