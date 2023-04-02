"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const CondtionRepository_1 = __importDefault(require("../repositories/CondtionRepository"));
const ConditionService_1 = require("../services/ConditionService");
class ConditionController {
    static async getAllConditionInfo(req, res) {
        const condition = (0, ConditionService_1.getAllSetting)();
        const value = await CondtionRepository_1.default.getAllConditionValue();
        res.status(http_status_1.default.OK).json({ condition: condition, value: value[value.length - 1] });
    }
    static async getAllConditionValue(req, res) {
        const condition = await CondtionRepository_1.default.getLatestConditionValue();
        res.status(http_status_1.default.OK).json({ condition: condition });
    }
    static async getOneConditionValue(req, res) {
        const { key } = req.params;
        const condition = await CondtionRepository_1.default.getAllConditionValue();
        res.status(http_status_1.default.OK).json({ condition: condition });
    }
}
exports.default = ConditionController;
