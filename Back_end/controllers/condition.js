const { deviceKeys } = require("../config/deviceKeys");
const { getLastFeedValue, getAllLastFeedValue } = require("../adaFruit");
var conditionItem = [
  {
    key: deviceKeys.tempSensor,
    number: 50,
    topRange: 35,
    bottomRange: 10,
    startTime: "0",
    endTime: "0",
  },
  {
    key: deviceKeys.lightSensor,
    number: 180,
    topRange: 220,
    bottomRange: 180,
    startTime: "17:00",
    endTime: "6:00",
  },
  {
    key: deviceKeys.soilSensor,
    number: 72,
    topRange: 60,
    bottomRange: 40,
    startTime: "0",
    endTime: "0",
  },
];

const getOneCondition = async (req, res) => {
  const { id } = req.params;
  const items = conditionItem;
  for (let i = 0; i < items.length; i++) {
    if (items[i].key === id) {
      items[i].number = Number(await getLastFeedValue(id));
      res.status(200).json({ condition: items[i] });
    }
  }
  res.status(404).json({ result: "Not found" });
};

const getAllCondition = async (req, res) => {
  let results = conditionItem;
  const conditions = await getAllLastFeedValue();
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < conditions.length; j++) {
      if (results[i].key === conditions[j].key) {
        results[i].number = conditions[j].value;
      }
    }
  }
  res.status(200).json({ condition: results });
};

const getOneConditionValue = async (req, res) => {
  const { id } = req.params;
  const value = await getLastFeedValue(id);
  res.status(404).json({ value: value });
};

const getAllConditionValue = async (req, res) => {
  const data = await getAllLastFeedValue();
  res.status(404).json({ data });
};
module.exports = {
  getOneCondition,
  getOneConditionValue,
  getAllCondition,
  getAllConditionValue,
};
