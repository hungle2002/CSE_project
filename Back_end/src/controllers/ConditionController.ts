import {Request, Response} from 'express';
import status from 'http-status';
// import condtionRepository from '../repositories/CondtionRepository';
import AdaAPI from '../AdaAPI';

class ConditionController {
  public static async getOneConditionInfo(req: Request, res: Response) {
    const {key} = req.params;
    const value = await AdaAPI.getLastFeedValue(key);
    res.status(status.OK).json({conditon: value});
  }

  public static async getAllConditionInfo(req: Request, res: Response) {
    const value = await AdaAPI.getAllLastFeedValue();
    res.status(status.OK).json({conditon: value});
  }
}

export default ConditionController;
