import Head from "next/head";

import { ErrorFetching } from "@/components/ErrorFetching";
import { useDrivers } from "@/hooks/useDrivers";
import { Table } from "@/components/Table";

export default function Home() {
  const { drivers, error, isLoading } = useDrivers();

  return (
    <>
      <Head>
        <title>Gas Station Manager</title>
      </Head>
      <main>
        <h1 className="text-3xl mb-4">Motoristas</h1>
        <ErrorFetching hasError={error || !drivers[0]} />
        <Table dataSource={drivers} />
      </main>
    </>
  );
}
