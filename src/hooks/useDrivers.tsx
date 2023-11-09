import { fetcher } from "@/services/axios";
import useSWR from "swr";

export function useDrivers() {
  const path = "/drivers";

  const { data, error, isLoading } = useSWR(path, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    drivers: data ?? [],
    isLoading,
    error,
  };
}
