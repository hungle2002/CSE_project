import fs from 'fs';
import modeSetting from '../interfaces/modeSetting';
import {recordID} from '../interfaces/record';

const readFileModeSetting = (filePath: string): modeSetting => {
  const data = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(data) as modeSetting;
  return jsonData;
};

const readFileID = (filePath: string): Number => {
  const data = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(data) as recordID;
  return jsonData.id;
};

const writeFileID = (filePath: string, id: Number) => {
  const data = {id: id};
  const jsonString = JSON.stringify(data, undefined, 2);
  fs.writeFileSync(filePath, jsonString);
};

export {readFileModeSetting, readFileID, writeFileID};
