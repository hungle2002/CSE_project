import fs from 'fs';
import path from 'path';
import { readFileModeSetting } from '../utils/readFileJson';
// this file should be deleted
class ManualModeRepository {
  // implement singleton pattern
  private static instance: ManualModeRepository;

  private constructor() {}
  public static getManualModeRepository(): ManualModeRepository {
    if (!ManualModeRepository.instance) {
      return new ManualModeRepository();
    }
    return ManualModeRepository.instance;
  }

  public getManualModeInfo(type: string) {
    try {
      const manualModeData = readFileModeSetting(path.join(__dirname, `../config/modeSetting/${type}.json`));
      return manualModeData;
    } catch (error) {
      console.log(error);
    }
  }

  public updateManualModeInfo(type: string, updatedData: any) {
    try {
      fs.writeFileSync(path.join(__dirname, `../config/modeSetting/${type}.json`), JSON.stringify(updatedData), {encoding: 'utf-8'});
      console.log("repo put", updatedData)
      return updatedData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ManualModeRepository.getManualModeRepository();
