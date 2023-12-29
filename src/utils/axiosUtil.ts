import axios, { AxiosInstance } from "axios";
import { HTTP_STATUS_MESSAGES } from "@constants/httpStatus";

const baseURL =
  "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api";

export class AxiosSingleton {
  private static instance: AxiosInstance;

  private constructor() {
    AxiosSingleton.instance = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    AxiosSingleton.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;

        if (response) {
          const { status } = response;

          const errorMessage = HTTP_STATUS_MESSAGES[status] || "Unknown error";
          return Promise.reject(
            new Error(`HTTP Error ${status}: ${errorMessage}`)
          );
        } else {
          return Promise.reject(new Error("Network Error"));
        }
      }
    );
  }

  public static getInstance(): AxiosInstance {
    if (!AxiosSingleton.instance) {
      new AxiosSingleton();
    }
    return AxiosSingleton.instance;
  }

  public static setToken(token: string): void {
    if (AxiosSingleton.instance) {
      AxiosSingleton.instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }

  public static removeToken(): void {
    if (AxiosSingleton.instance) {
      AxiosSingleton.instance.defaults.headers.Authorization = `Bearer`;
    }
  }
}


export const axiosInstance = AxiosSingleton.getInstance();

export default AxiosSingleton;
