// Axios Util Factory

import { HTTP_STATUS_MESSAGES } from "@constants/httpStatus";
import axios from "axios";

const baseURL =
  "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      const errorMessage = HTTP_STATUS_MESSAGES[status] || "Unknown error";
      return Promise.reject(new Error(`HTTP Error ${status}: ${errorMessage}`));
    } else {
      return Promise.reject(new Error("Network Error"));
    }
  }
);

export default axiosInstance;
