const { deviceKeys } = require("../config/deviceKeys");
const {
  getLastFeedValue,
  createFeedValue,
  getAllLastFeedValue,
} = require("../adaFruit");

const defaultDevices = [
  {
    id: 0,
    type: "Sensor",
    des: "Temperature",
    date: "13/4/2021",
    check: "11 days",
    price: 15,
    consumption: 1,
    state: 0,
    key: deviceKeys.tempSensor,
  },
  {
    id: 1,
    type: "Motor",
    des: "Watering",
    date: "1/2/2022",
    check: "1 days",
    price: 119,
    consumption: 200,
    state: 1,
    key: deviceKeys.waterMotor,
  },
  {
    id: 2,
    type: "Sensor",
    des: "Lighting",
    date: "11/6/2022",
    check: "20 days",
    price: 12,
    consumption: 0.5,
    state: 1,
    key: deviceKeys.lightSensor,
  },
  {
    id: 3,
    type: "Sensor",
    des: "Soil moisture",
    date: "21/1/2023",
    check: "2 days",
    price: 2,
    consumption: 1,
    state: 1,
    key: deviceKeys.soilSensor,
  },
  {
    id: 4,
    type: "Sensor",
    des: "Smoking",
    date: "6/11/2022",
    check: "9 days",
    price: 11,
    consumption: 0.8,
    state: 1,
    key: deviceKeys.smokeSensor,
  },
  {
    id: 5,
    type: "Motor",
    des: "Sunning sys",
    date: "16/1/2021",
    check: "6 days",
    price: 21,
    consumption: 1.5,
    state: 1,
    key: deviceKeys.lightMotor,
  },
  {
    id: 6,
    type: "Motor",
    des: "Display sys",
    date: "6/12/2022",
    check: "8 days",
    price: 10,
    consumption: 3,
    state: 1,
    key: deviceKeys.lcdMotor,
  },
];
const getDevice = async (req, res) => {
  const { id } = req.params;
  const items = defaultDevices;
  for (let i = 0; i < items.length; i++) {
    if (items[i].key === id) {
      items[i].number = Number(await getLastFeedValue(id));
      res.status(200).json({ device: items[i] });
    }
  }
  res.status(404).json({ result: "Not found" });
};

const getDeviceState = async (req, res) => {
  const { id } = req.params;
  const value = await getLastFeedValue(id);
  res.status(404).json({ value: value });
};

const createDeviceState = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await createFeedValue(id, data);
  res.status(200).json({ result });
};

const getAllDevice = async (req, res) => {
  let devices = defaultDevices;
  const conditions = await getAllLastFeedValue();

  for (let i = 0; i < devices.length; i++) {
    for (let j = 0; j < conditions.length; j++) {
      if (devices[i].key === conditions[j].key) {
        devices[i].state = conditions[j].value > 0 ? 1 : 0;
      }
    }
  }
  res.status(200).json({ devices });
};

const getAllDeviceState = async (req, res) => {
  const devices = await getAllLastFeedValue();
  devices.forEach((e) => {
    e.state = e.value > 0 ? 1 : 0;
  });
  res.status(200).json({ devices });
};

module.exports = {
  getDevice,
  getAllDevice,
  getDeviceState,
  createDeviceState,
  getAllDeviceState,
};
