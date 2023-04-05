import fs from 'fs';
import path from 'path';
import { readFileModeSetting } from '../utils/readFileJson';

class SettingsRepository {
  // implement singleton pattern
  private static instance: SettingsRepository;

  private constructor() {}
  public static getSettingsRepository(): SettingsRepository {
    if (!SettingsRepository.instance) {
      return new SettingsRepository();
    }
    return SettingsRepository.instance;
  }

  public getSettingsInfo(type: string) {
    try {
      const settingsData = readFileModeSetting(path.join(__dirname, `../config/modeSetting/${type}.json`));
      // const settingsData = JSON.parse(
      //   fs.readFileSync(path.join(__dirname, `../json/${type}.json`), {encoding: 'utf-8'})
      // );
      return settingsData;
    } catch (error) {
      console.log(error);
    }
  }

  public updateSettingsInfo(type: string, updatedData: any){
    try {
      fs.writeFileSync(path.join(__dirname, `../../src/config/modeSetting/${type}.json`), JSON.stringify(updatedData), {encoding: 'utf-8'});
      return updatedData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SettingsRepository.getSettingsRepository();
