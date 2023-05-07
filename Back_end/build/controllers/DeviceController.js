"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const DeviceRepository_1 = __importDefault(require("../repositories/DeviceRepository"));
const AdaAPI_1 = __importDefault(require("../AdaAPI"));
const DeviceRepository_2 = __importDefault(require("../repositories/DeviceRepository"));
const Socket_1 = __importDefault(require("../providers/Socket"));
const DevicesService_1 = require("../services/DevicesService");
class DeviceController {
    // get all information about one device include state and other information
    static async getOneDeviceInfo(req, res) {
        const { key } = req.params;
        const device = await DeviceRepository_1.default.getOneDevice(key);
        res.status(http_status_1.default.OK).json({ device: device });
    }
    // get all device information
    static async getAllDeviceInfo(req, res) {
        const device = await DeviceRepository_1.default.getAllDevice();
        res.status(http_status_1.default.OK).json({ devices: device });
    }
    // get one device state
    static async getOneDeviceState(req, res) {
        const { key } = req.params;
        const device = DeviceRepository_1.default.getOneDeviceState(key);
        res.status(http_status_1.default.OK).json({ device: device });
    }
    // get all device state
    static async getAllDeviceState(req, res) {
        // get current device state from repo
        const devices = await (0, DevicesService_1.getNewDeviceState)();
        res.status(http_status_1.default.OK).json({ devices: devices });
    }
    // create new state for device
    static async createDeviceState(req, res) {
        const { key } = req.params;
        const data = req.body;
        const newDeviceState = await AdaAPI_1.default.createFeedValue(key, data);
        Socket_1.default.update_device_state(key, Number(newDeviceState.value));
        DeviceRepository_2.default.updateDeviceState(key, Number(newDeviceState.value));
        res.status(http_status_1.default.OK).json({ device: newDeviceState });
    }
    // create new device
    static async createDevice(req, res) {
        const { data } = req.body;
        const newDevice = await DeviceRepository_2.default.createDevice(data);
        if (newDevice) {
            Socket_1.default.create_device(newDevice.typ, newDevice.des);
        }
        res.status(http_status_1.default.OK).json({ device: newDevice });
    }
}
exports.default = DeviceController;
