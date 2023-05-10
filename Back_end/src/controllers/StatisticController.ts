import {Request, Response} from 'express';
import status from 'http-status';
import CondtionRepository from '../repositories/CondtionRepository';
import ConsumptionRepository from '../repositories/ConsumptionRepository';
// import Consumption from '../interfaces/consumption';
class StatisticController {
  public static async getStatisticConditionValue(req: Request, res: Response) {
    const value = await CondtionRepository.getAllConditionValue();
    const result = value.slice(Math.max(value.length - 7, 0));
    const waterConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.motor')
    const tempConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.coolingmotor')
    const lightConsumption = await ConsumptionRepository.getConsumptionValue('cs-ce-dadn.light-button')
    // const data = [30000, 40000, 6000, 77777, 8888, 6666, 15000];
    // data.forEach((value)=>{
    //   const ecec: Consumption = {
    //     date: new Date(),
    //     amount: value,
    //     deviceKey: 'cs-ce-dadn.light-button'
    //   }
    //   ConsumptionRepository.createValue(ecec)
    // })
    res
      .status(status.OK)
      .json({soilCons: waterConsumption, tempCons: tempConsumption, lightCons: lightConsumption, value: result});
  }
}

export default StatisticController;
