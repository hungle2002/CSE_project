import {Request, Response} from 'express';
import status from 'http-status';
import SettingsRepository from '../repositories/SettingsRepository';
import Socket from '../providers/Socket';

class SettingsController {
  public static async getSettingsInfo(req: Request, res: Response) {
    const {type} = req.params;
    const settingsInfo = SettingsRepository.getSettingsInfo(type);
    res.status(status.OK).json(settingsInfo);
  }

  public static async updateSettingsInfo(req: Request, res: Response) {
    const {type} = req.params;
    const newSettingsInfo = req.body;
    SettingsRepository.updateSettingsInfo(type, newSettingsInfo);
    Socket.update_settings(type);
    res.status(status.OK).json(newSettingsInfo);
  }
}

export default SettingsController;
