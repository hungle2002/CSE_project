import fs from 'fs';
import path from 'path';
import { readFileModeSetting } from '../utils/readFileJson';
// this file should be deleted
class SafeModeRepository {
  // implement singleton pattern
  private static instance: SafeModeRepository;

  private constructor() {}
  public static getSafeModeRepository(): SafeModeRepository {
    if (!SafeModeRepository.instance) {
      return new SafeModeRepository();
    }
    return SafeModeRepository.instance;
  }

  public getSafeModeInfo(type: string) {
    try {
      const safeModeData = readFileModeSetting(path.join(__dirname, `../config/modeSetting/${type}.json`));
      return safeModeData;
    } catch (error) {
      console.log(error);
    }
  }

  public updateSafeModeInfo(type: string, updatedData: any){
    try {
      fs.writeFileSync(path.join(__dirname, `../config/modeSetting/${type}.json`), JSON.stringify(updatedData), {encoding: 'utf-8'});
      return updatedData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SafeModeRepository.getSafeModeRepository();
