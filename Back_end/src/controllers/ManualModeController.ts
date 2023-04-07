import {Request, Response} from 'express';
import status from 'http-status';
import ManualModeRepository from '../repositories/ManualModeRepository';
// this file should be deleted
class ManualModeController {
  public static async getManualModeInfo(req: Request, res: Response) {
    const {type} = req.params;
    const manualModeInfo = ManualModeRepository.getManualModeInfo(type);
    res.status(status.OK).json({manualMin: manualModeInfo?.manualMin, manualMax: manualModeInfo?.manualMax});
  }

  public static async updateManualModeInfo(req: Request, res: Response) {
    const {type} = req.params;
    const newManualModeInfo = req.body;
    const manualModeInfo = ManualModeRepository.getManualModeInfo(type);
    const updatedManualModeInfo = {
      ...manualModeInfo,
      manualMin: newManualModeInfo.manualMin,
      manualMax: newManualModeInfo.manualMax,
    };
    ManualModeRepository.updateManualModeInfo(type, updatedManualModeInfo);
    res.status(status.OK).json(updatedManualModeInfo);
  }
}

export default ManualModeController;
