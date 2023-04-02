import {Request, Response} from 'express';
import status from 'http-status';
import CondtionRepository from '../repositories/CondtionRepository';
import {getAllSetting} from '../services/ConditionService';

class ConditionController {
  public static async getAllConditionInfo(req: Request, res: Response) {
    const condition = getAllSetting();
    const value = await CondtionRepository.getAllConditionValue();
    res.status(status.OK).json({condition: condition, value: value[value.length - 1]});
  }

  // public static async getAllConditionValue(req: Request, res: Response) {
  //   const condition = await CondtionRepository.getLatestConditionValue();
  //   res.status(status.OK).json({condition: condition});
  // }

  public static async getOneConditionValue(req: Request, res: Response) {
    const {key} = req.params;
    const condition = await CondtionRepository.getAllConditionValue();
    res.status(status.OK).json({condition: condition});
  }
}

export default ConditionController;
