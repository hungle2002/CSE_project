"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
// import condtionRepository from '../repositories/CondtionRepository';
const AdaAPI_1 = __importDefault(require("../AdaAPI"));
class ConditionController {
    static async getOneConditionInfo(req, res) {
        const { key } = req.params;
        const value = await AdaAPI_1.default.getLastFeedValue(key);
        res.status(http_status_1.default.OK).json({ conditon: value });
    }
    static async getAllConditionInfo(req, res) {
        const value = await AdaAPI_1.default.getAllLastFeedValue();
        res.status(http_status_1.default.OK).json({ conditon: value });
    }
}
exports.default = ConditionController;
