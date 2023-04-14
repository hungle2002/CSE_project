/* eslint-disable prettier/prettier */

import path from 'path';
import {readFileModeSetting, writeFileModeSetting} from '../utils/readFileJson';

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
      const settingsData = readFileModeSetting(path.join(__dirname, `../../src/config/modeSetting/${type}.json`));
      return settingsData;
    } catch (error) {
      console.log(error);
    }
  }

  public updateSettingsInfo(type: string, updatedData: any) {
    try {
      updatedData= writeFileModeSetting(path.join(__dirname, `../../src/config/modeSetting/${type}.json`),updatedData)
      return updatedData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SettingsRepository.getSettingsRepository();
