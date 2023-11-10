import Head from "next/head";

import { ErrorFetching } from "@/components/ErrorFetching";
import { useDrivers } from "@/hooks/useDrivers";
import { TableContainer } from "@/components/Table";
import { Thead } from "@/components/Table/components/Thead";
import { Tbody } from "@/components/Table/components/Tbody";
import { useMemo } from "react";
import { IDriver } from "@/models/Driver";
import { Spinner } from "@/components/Spinner";

export default function Home() {
  const { drivers, error, isLoading } = useDrivers();

  const columnsHeader = useMemo(
    () => (drivers[0] ? Object.keys(drivers[0]) : []),
    [drivers]
  );
  const columnsBody: [string, string][][] = useMemo(
    () => drivers.map((driver: IDriver) => Object.entries(driver)),
    [drivers]
  );

  return (
    <>
      <Head>
        <title>Gas Station Manager</title>
      </Head>
      <main>
        <h1 className="text-3xl mb-4 mt-4">Motoristas</h1>
        <ErrorFetching
          hasError={error || !drivers[0]}
          message="Nenhum motorista registrado."
        />

        {isLoading && (
          <div className="flex justify-center mt-10">
            <Spinner size="10" />
          </div>
        )}

        {!isLoading && (
          <TableContainer>
            <Thead rowHeader={columnsHeader} />
            <Tbody rowBody={columnsBody} />
          </TableContainer>
        )}
      </main>
    </>
  );
}
