import Model from '../models';
import DeviceInfo from '../interfaces/device';

class DeviceRepository {
  // implement singleton pattern
  private static instance: DeviceRepository;

  private constructor() {}
  public static getDeviceRepository(): DeviceRepository {
    if (!DeviceRepository.instance) {
      return new DeviceRepository();
    }
    return DeviceRepository.instance;
  }

  public async getOneDevice(device_key: string) {
    try {
      const device: DeviceInfo = await Model.device.find({key: device_key});
      return device;
    } catch (error) {
      console.log(error);
    }
  }

  public async getAllDevice() {
    try {
      const device: DeviceInfo = await Model.device.find();
      return device;
    } catch (error) {
      console.log(error);
    }
  }

  public async createDevice(data: DeviceInfo): Promise<DeviceInfo | undefined> {
    try {
      await Model.device.create(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getOneDeviceState(device_key: string) {
    try {
      const device: DeviceInfo = await Model.device.find({key: device_key});
      return device.state;
    } catch (error) {
      console.log(error);
    }
  }

  public async updateDeviceState(device_key: string, value: Number) {
    try {
      await Model.device.findOneAndUpdate({key: device_key}, {$set: {state: value}});
      return 'Success';
    } catch (error) {
      console.log(error);
    }
  }

  public getAllDeviceState() {
    return 'All device state!';
  }
}

export default DeviceRepository.getDeviceRepository();