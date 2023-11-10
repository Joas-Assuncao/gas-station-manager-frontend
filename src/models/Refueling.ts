import { FuelType } from "./enums/FuelType";

export interface IRefueling {
  id?: string;
  liters: number;
  fuelType: FuelType;
  fuelPrice: number;
  totalPrice?: number;
  refuelingDate?: Date;
}
