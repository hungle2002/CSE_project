interface DeviceInfo {
  typ: String;
  location: String;
  des: String;
  lastChecked: Number;
  price: Number;
  state: Boolean;
  usingTime: Number;
  key: String;
  installedDate?: Date;
  startOn?: Date;
}

export default DeviceInfo;
