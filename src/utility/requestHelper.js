import axios from "axios";
import { getAccessToken } from "./cookieStorage";
import { handleAuthorization } from "./helpers";
const BASE_API_SERVER = process.env.REACT_APP_BASE_API_SERVER || "";

const request = axios.create({
  baseURL: BASE_API_SERVER,
  withCredentials: false
});

request.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Accept: "application/json",
      authorization: `Bearer ${token}`
    };
  }
  return config;
});

request.interceptors.response.use(
  response => {
    const { code } = response.data;
    if (code === 200) return Promise.resolve(response);
    handleAuthorization(code);
    return Promise.reject(response);
  },
  error => {
    const errorStatus = error.response.data.code || null;
    handleAuthorization(errorStatus);
    return Promise.reject(error.response);
  }
);

export default request;
