"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const serverRecordSchema = new mongoose_1.default.Schema({
    SRID: {
        type: String,
        unique: [true, "ServerRecord: Server record's ID must be unique!"],
        required: [true, "ServerRecord: Server record's ID required!"],
    },
    time: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model('ServerRecord', serverRecordSchema);
