import { IRefueling } from "@/models/Refueling";
import { fetcher } from "@/services/driverService";
import useSWR from "swr";

export function useRefuelings(id: string) {
  const path = `/refuelings/${id}`;

  const { data, error, isLoading } = useSWR<IRefueling[]>(path, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    refuelings: data ?? [],
    isLoading,
    error,
  };
}
