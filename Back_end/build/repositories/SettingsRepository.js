"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readFileJson_1 = require("../utils/readFileJson");
class SettingsRepository {
    constructor() { }
    static getSettingsRepository() {
        if (!SettingsRepository.instance) {
            return new SettingsRepository();
        }
        return SettingsRepository.instance;
    }
    getSettingsInfo(type) {
        try {
            const settingsData = (0, readFileJson_1.readFileModeSetting)(path_1.default.join(__dirname, `../config/modeSetting/${type}.json`));
            // const settingsData = JSON.parse(
            //   fs.readFileSync(path.join(__dirname, `../json/${type}.json`), {encoding: 'utf-8'})
            // );
            return settingsData;
        }
        catch (error) {
            console.log(error);
        }
    }
    updateSettingsInfo(type, updatedData) {
        try {
            fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../src/config/modeSetting/${type}.json`), JSON.stringify(updatedData), { encoding: 'utf-8' });
            return updatedData;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = SettingsRepository.getSettingsRepository();