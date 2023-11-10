import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import { FormContainer } from "@/components/FormContainer";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { TableContainer } from "@/components/Table";
import { Thead } from "@/components/Table/components/Thead";
import { useDriver } from "@/hooks/useDriver";
import { useRefuelings } from "@/hooks/useRefuelings";
import { putFetcher } from "@/services/driverService";
import { IRefueling } from "@/models/Refueling";
import { Tbody } from "@/components/Table/components/Tbody";
import { ErrorFetching } from "@/components/ErrorFetching";
import Link from "next/link";

export default function EditDriver() {
  const router = useRouter();
  const { driver, isLoading } = useDriver(router.query.id as string);
  const { refuelings, isLoading: isLoadingRefuelings } = useRefuelings(
    router.query.id as string
  );
  const [name, setName] = useState<string>(driver.name);
  const [email, setEmail] = useState<string>(driver.email);

  const columnsHeader = useMemo(
    () => (refuelings[0] ? Object.keys(refuelings[0]) : []),
    [refuelings]
  );

  const columnsBody: [string, string][][] = useMemo(
    () => refuelings.map((refueling: IRefueling) => Object.entries(refueling)),
    [refuelings]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const data = await putFetcher(`/drivers/${router.query.id}`, {
        name,
        email,
      });

      toast.success("Motorista editado com sucesso!");

      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      toast.error("Não foi possível editar o motorista");
    }
  }

  function handleChangeName(value: string) {
    setName(value);
  }

  function handleChangeEmail(value: string) {
    setEmail(value);
  }

  if (isLoading) {
    return <Spinner size="10" />;
  }

  return (
    <>
      <Head>
        <title>Edit Driver | GSM</title>
      </Head>

      <h1 className="w-full text-center text-3xl">Editar motorista</h1>

      {isLoading && (
        <div className="flex justify-center mt-10">
          <Spinner size="10" />
        </div>
      )}

      {!isLoading && (
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              label="Seu nome"
              required={true}
              value={name || driver.name}
              onChange={handleChangeName}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              label="Seu e-mail"
              required={true}
              value={email || driver.email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            >
              Salvar motorista
            </button>
          </div>
        </FormContainer>
      )}

      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Abastecimentos do motorista:</h1>
        <Link
          className="px-3 py-2 border border-gray-100 rounded-md"
          href={`/refuelings/${router.query.id}`}
        >
          Adicionar abastecimento
        </Link>
      </div>
      {isLoadingRefuelings && (
        <div className="flex justify-center mt-10">
          <Spinner size="10" />
        </div>
      )}

      <ErrorFetching
        hasError={!refuelings[0]}
        message="Nenhum abastecimento registrado."
      />

      <TableContainer>
        <Thead rowHeader={columnsHeader} />
        <Tbody rowBody={columnsBody} />
      </TableContainer>
    </>
  );
}
