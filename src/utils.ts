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
