import { IDriver } from "@/models/Driver";
import { fetcher } from "@/services/driverService";
import useSWR from "swr";

export function useDrivers() {
  const path = "/drivers";

  const { data, error, isLoading } = useSWR<IDriver[]>(path, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    drivers: data ?? [],
    isLoading,
    error,
  };
}
