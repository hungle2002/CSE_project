// axios using
const axios = require("axios");

const request = axios.create({
  baseURL: `https://io.adafruit.com/api/v2/${process.env.AIO_USERNAME}/`,
  headers: {
    "X-AIO-KEY": "aio_pilK91gqXxZRLoo7T7fIrdYtlMAW",
  },
});

const get = async (path, options = null) => {
  const response = await request.get(path, options);
  return response.data;
};

const post = async (path, data = null, options = null) => {
  const response = await request.post(path, data, options);
  return response.data;
};

const patch = async (path, data = null, options = null) => {
  const response = await request.patch(path, data, options);
  return response.data;
};

module.exports = { get, post, patch };
