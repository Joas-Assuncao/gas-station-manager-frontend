import { IDriver } from "@/models/Driver";
import axios from "axios";
import config from "./config";

export const fetcher = (url: string) => {
  return axios
    .request({
      baseURL: config.API_HOST,
      url,
      method: "GET",
    })
    .then((res) => {
      if (!res.data) {
        throw Error("Não foi possível carregar os motoristas.");
      }

      return res.data;
    });
};

export const postFetcher = (url: string, data: IDriver) => {
  return axios
    .request({
      baseURL: config.API_HOST,
      url,
      method: "POST",
      data,
    })
    .then((res) => {
      if (!res.data) {
        throw Error("Não foi possível cadastrar o motorista.");
      }

      return res.data;
    });
};

export const putFetcher = (url: string, data: IDriver) => {
  return axios
    .request({
      baseURL: config.API_HOST,
      url,
      method: "PUT",
      data,
    })
    .then((res) => {
      if (!res.data) {
        throw Error("Não foi possível atualizar o motorista.");
      }

      return res.data;
    });
};
