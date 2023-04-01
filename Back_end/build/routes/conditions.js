"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConditionController_1 = __importDefault(require("../controllers/ConditionController"));
const router = express_1.default.Router();
router.route('/:key').get(ConditionController_1.default.getOneConditionInfo);
// router.route('/').get(ConditionController.getOneConditionInfo);
// router.route('/value').get(ConditionController.getOneConditionInfo);
// router.route('/:key/value').get(ConditionController.getOneConditionInfo);
exports.default = router;
