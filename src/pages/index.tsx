import Head from "next/head";

import { ErrorFetching } from "@/components/ErrorFetching";
import { useDrivers } from "@/hooks/useDrivers";
import { TableContainer } from "@/components/Table";
import { Thead } from "@/components/Table/components/Thead";
import { Tbody } from "@/components/Table/components/Tbody";
import { Spinner } from "@/components/Spinner";
import { useFormatTableData } from "@/hooks/useFormatTableData";

export default function Home() {
  const { drivers, error, isLoading } = useDrivers();
  const { columnsHeader, columnsBody } = useFormatTableData(drivers);

  return (
    <>
      <Head>
        <title>Gas Station Manager</title>
      </Head>

      <main>
        <h1 className="text-3xl">Motoristas</h1>

        <Spinner isLoading={isLoading} />

        <ErrorFetching
          hasError={error || !drivers[0]}
          message="Nenhum motorista registrado."
        />

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
