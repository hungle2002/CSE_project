import {Request, Response} from 'express';
import status from 'http-status';
import CondtionRepository from '../repositories/CondtionRepository';
import ConsumptionRepository from '../repositories/ConsumptionRepository';
class StatisticController {
  public static async getStatisticConditionValue(req: Request, res: Response) {
    const value = await CondtionRepository.getAllConditionValue();
    const result = value.slice(Math.max(value.length - 7, 0));
    const waterConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.motor')
    const tempConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.coolingmotor')
    const lightConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.light-button')
    const data = [10000, 5000, 30000, 20000, 40200, 15959, 35507];
    res
      .status(status.OK)
      .json({soilCons: waterConsumption, tempCons: tempConsumption, lightCons: lightConsumption, value: result});
  }
}

export default StatisticController;
