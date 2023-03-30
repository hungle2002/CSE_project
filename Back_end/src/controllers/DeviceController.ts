import {Request, Response} from 'express';
import status from 'http-status';
import deviceRepository from '../repositories/DeviceRepository';
import AdaAPI from '../AdaAPI';
import DeviceRepository from '../repositories/DeviceRepository';

class DeviceController {
  // get all information about one device include state and other informatio
  public static async getOneDeviceInfo(req: Request, res: Response) {
    const {key} = req.params;
    const device = await deviceRepository.getOneDevice(key);
    res.status(status.OK).json({device: device});
  }

  // get all device information
  public static async getAllDeviceInfo(req: Request, res: Response) {
    const device = await deviceRepository.getAllDevice();
    res.status(status.OK).json({device: device});
  }

  // get one device state
  public static async getOneDeviceState(req: Request, res: Response) {
    const {key} = req.params;
    const device = deviceRepository.getOneDeviceState(key);
    res.status(status.OK).json({device: device});
  }

  // get all device state
  public static async getAllDeviceState(req: Request, res: Response) {
    const device = deviceRepository.getAllDeviceState();
    res.status(status.OK).json({device: device});
  }

  // create new state for device
  public static async createDeviceState(req: Request, res: Response) {
    const {key} = req.params;
    const {data} = req.body;
    const newDeviceState = await AdaAPI.createFeedValue(key, data);
    res.status(status.OK).json({device: newDeviceState});
  }

  // create new device
  public static async createDevice(req: Request, res: Response) {
    const {data} = req.body;
    const newDevice = await DeviceRepository.createDevice(data);
    res.status(status.OK).json({device: newDevice});
  }
}

export default DeviceController;
