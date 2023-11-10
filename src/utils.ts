import { FuelType } from "./models/enums/FuelType";

export function verifyValuesFromTbody(key: string, value: string): string {
  if (key === "refuelingDate") {
    const date = new Date(value);
    const formatedDate = date.toLocaleString();
    return formatedDate;
  }

  if (key === "totalPrice" || key === "fuelPrice") {
    return `R$ ${value.toString().replace(".", ",")}`;
  }

  if (key === "fuelType") {
    return FuelType[Number(value)];
  }

  return value;
}

export function isEmailValid(email: string) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
