interface DeviceInfo {
  typ: String;
  location: String;
  des: String;
  lastChecked: Number;
  price: Number;
  state: Number;
  usingTime: Number;
  key: String;
  installedDate?: String;
  startOn?: String;
}

export default DeviceInfo;
