"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
class DeviceRepository {
    constructor() { }
    static getDeviceRepository() {
        if (!DeviceRepository.instance) {
            return new DeviceRepository();
        }
        return DeviceRepository.instance;
    }
    async getOneDevice(device_key) {
        try {
            const device = await models_1.default.device.find({ key: device_key });
            return device;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllDevice() {
        try {
            const device = await models_1.default.device.find();
            return device;
        }
        catch (error) {
            console.log(error);
        }
    }
    async createDevice(data) {
        try {
            const device = await models_1.default.device.create(data);
            return device;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getOneDeviceState(device_key) {
        try {
            const device = await models_1.default.device.find({ key: device_key });
            return device.state;
        }
        catch (error) {
            console.log(error);
        }
    }
    getAllDeviceState() {
        return 'All device state!';
    }
}
exports.default = DeviceRepository.getDeviceRepository();
