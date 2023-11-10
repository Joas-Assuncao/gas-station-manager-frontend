import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/Button";
import { ErrorFetching } from "@/components/ErrorFetching";
import { FormContainer } from "@/components/FormContainer";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { TableContainer } from "@/components/Table";
import { Tbody } from "@/components/Table/components/Tbody";
import { Thead } from "@/components/Table/components/Thead";
import { useDriver } from "@/hooks/useDriver";
import { useFormatTableData } from "@/hooks/useFormatTableData";
import { useRefuelings } from "@/hooks/useRefuelings";
import { putFetcher } from "@/services/driverService";
import { isEmailValid } from "@/utils";
import { HeaderRefuelings } from "@/components/HeaderRefuelings";

export default function EditDriver() {
  const router = useRouter();
  const { driver, isLoading } = useDriver(router.query.id as string);
  const { refuelings, isLoading: isLoadingRefuelings } = useRefuelings(
    router.query.id as string
  );
  const [name, setName] = useState<string>(driver.name);
  const [email, setEmail] = useState<string>(driver.email);
  const { columnsHeader, columnsBody } = useFormatTableData(refuelings);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
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
    },
    [email, name, router.query.id]
  );

  const handleChangeName = useCallback((value: string) => {
    setName(value);
  }, []);

  const handleChangeEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  return (
    <>
      <Head>
        <title>Edit Driver | GSM</title>
      </Head>

      <h1 className="w-full text-center text-3xl">Editar motorista</h1>

      <Spinner isLoading={isLoading} />

      {!isLoading && (
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            label="Seu nome *"
            required={true}
            value={name || driver.name}
            onChange={handleChangeName}
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            label="Seu e-mail *"
            required={true}
            value={email || driver.email}
            onChange={handleChangeEmail}
          />
          <Button
            disabled={!name || !email || !isEmailValid(email)}
            text="Salvar motorista"
          />
        </FormContainer>
      )}

      <HeaderRefuelings router={router} />

      <Spinner isLoading={isLoadingRefuelings} />

      <ErrorFetching
        hasError={!refuelings[0]}
        message="Nenhum abastecimento registrado."
      />

      {!isLoadingRefuelings && (
        <TableContainer>
          <Thead rowHeader={columnsHeader} />
          <Tbody rowBody={columnsBody} />
        </TableContainer>
      )}
    </>
  );
}
