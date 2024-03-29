import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

export const get = async (path, options) => {
  const response = await request.get(path, options);
  return response;
};

export const patch = async (path, data = null, options) => {
  const response = await request.patch(path, data, options);
  return response;
};

export const post = async (path, data = null, options) => {
  const response = await request.post(path, data, options);
  return response;
};

export const put = async (path, data = null, options) => {
  const response = await request.put(path, data, options);
  return response;
};

export default request;
