import useSWR from "swr";
import { toast } from "react-hot-toast";
import router from "next/router";

import { IDriver } from "@/models/Driver";
import { fetcher } from "@/services/driverService";

export function useDriver(id: string) {
  const path = `/drivers/${id}`;

  const { data, error, isLoading } = useSWR<IDriver>(path, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
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
