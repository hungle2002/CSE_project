const { get, post } = require("../utils/adaHttpRequest");

const getLastFeedValue = async (feed_key) => {
  const response = await get(`feeds/${feed_key}`);
  return response.last_value;
};

const getAllLastFeedValue = async () => {
  const response = await get(`feeds`);
  const results = [];
  response.forEach((e) => {
    results.push({ key: e.key, value: e.last_value });
  });
  return results;
};

const createFeedValue = async (feed_key, data) => {
  const response = await post(`feeds/${feed_key}/data`, data);
  return response;
};

module.exports = {
  getLastFeedValue,
  getAllLastFeedValue,
  createFeedValue,
};
