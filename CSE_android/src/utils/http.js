import axios from "axios";
import { ipLAN } from "../config/ipCOnfig";

const request = axios.create({
  baseURL: `https://my-smart-farm-api.onrender.com/api/v1/`,
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
