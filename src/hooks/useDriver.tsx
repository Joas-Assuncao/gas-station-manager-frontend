import { IDriver } from "@/models/Driver";
import { fetcher } from "@/services/axios";
import useSWR from "swr";

export function useDriver(id: string) {
  const path = `/drivers/${id}`;

  const { data, error, isLoading } = useSWR<IDriver>(path, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    driver: data ?? {
      name: "",
      email: "",
    },
    isLoading,
    error,
  };
}
