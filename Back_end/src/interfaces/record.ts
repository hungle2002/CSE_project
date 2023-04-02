export interface recordID {
  id: Number;
}

interface ServerRecord {
  SRID: Number;
  tempValue: Number;
  lightValue: Number;
  soilValue: Number;
  time: Date;
}

export default ServerRecord;
