import express from 'express';
import ConditionController from '../controllers/ConditionController';

const router = express.Router();
router.route('/:key').get(ConditionController.getOneConditionInfo);
router.route('/').get(ConditionController.getOneConditionInfo);
router.route('/value').get(ConditionController.getOneConditionInfo);
router.route('/:key/value').get(ConditionController.getOneConditionInfo);

export default router;
