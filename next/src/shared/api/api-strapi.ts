import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiStrapi = axios.create({  
  baseURL: "http://localhost:1337",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createStrapi = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiStrapi({
    ...config,
    ...options,
  }).then((r) => r.data);
};

// export type BodyType<Data> = Data;

// export type ErrorType<Error> = AxiosError<Error>;




