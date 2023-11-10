import { IRefueling } from "@/models/Refueling";
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
        throw Error("Não foi possível carregar os abastecimentos.");
      }

      return res.data;
    });
};

export const postFetcher = (url: string, data: IRefueling) => {
  return axios
    .request({
      baseURL: config.API_HOST,
      url,
      method: "POST",
      data,
    })
    .then((res) => {
      if (!res.data) {
        throw Error("Não foi possível cadastrar o abastecimento.");
      }

      return res.data;
    });
};
