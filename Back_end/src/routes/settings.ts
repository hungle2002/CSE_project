import express from "express";
import SettingsController from "../controllers/SettingsController";
const router = express.Router()

router.route('/:type').get(SettingsController.getSettingsInfo).put(SettingsController.updateSettingsInfo);

export default router