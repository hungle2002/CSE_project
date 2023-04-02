"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileID = exports.readFileID = exports.readFileModeSetting = void 0;
const fs_1 = __importDefault(require("fs"));
const readFileModeSetting = (filePath) => {
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
};
exports.readFileModeSetting = readFileModeSetting;
const readFileID = (filePath) => {
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData.id;
};
exports.readFileID = readFileID;
const writeFileID = (filePath, id) => {
    const data = { id: id };
    const jsonString = JSON.stringify(data);
    fs_1.default.writeFileSync(filePath, jsonString);
};
exports.writeFileID = writeFileID;
