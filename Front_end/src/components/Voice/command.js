import {devicesKey} from "./data";
import { create } from "../../apiServices/searchService";


const changeStateDevice = async (key, value) =>{
    try {
        const update_value = value;
          await create({
            path: `device/${key}/state`,
            data: { value: update_value },
          });
      } catch (error) {
        console.log(error);
      }
} 

export const turnOnDevice = (device) =>{
  changeStateDevice(devicesKey[device], 1)
}

export const turnOffDevice = (device) =>{
  changeStateDevice(devicesKey[device], 0)
}