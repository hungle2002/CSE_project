import {Request, Response} from 'express';
import status from 'http-status';
import SafeModeRepository from '../repositories/SafeModeRepository';
// this file should be deleted
class SafeModeController {
  public static async getSafeModeInfo(req: Request, res: Response) {
    const {type} = req.params;
    const safeModeInfo = SafeModeRepository.getSafeModeInfo(type);
    res.status(status.OK).json({safeAction: safeModeInfo?.safeAction, safeMin: safeModeInfo?.safeMin, safeMax: safeModeInfo?.safeMax});
  }

  public static async updateSafeModeInfo(req: Request, res: Response) {
    const {type} = req.params;
    const newSafeModeInfo = req.body;
    const safeModeInfo = SafeModeRepository.getSafeModeInfo(type);
    const updatedSafeModeInfo = {
      ...safeModeInfo,
      safeAction: newSafeModeInfo.safeAction,
      safeMin: newSafeModeInfo.safeMin,
      safeMax: newSafeModeInfo.safeMax,
    };
    SafeModeRepository.updateSafeModeInfo(type, updatedSafeModeInfo);
    res.status(status.OK).json(updatedSafeModeInfo);
  }
}

export default SafeModeController;
