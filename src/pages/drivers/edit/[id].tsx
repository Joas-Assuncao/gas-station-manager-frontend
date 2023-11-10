import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useState } from "react";

import { FormContainer } from "@/components/FormContainer";
import { Input } from "@/components/Input";
import { useDriver } from "@/hooks/useDriver";
import { putFetcher } from "@/services/axios";
import { Spinner } from "@/components/Spinner";

export default function EditDriver() {
  const router = useRouter();
  const { driver, isLoading, error } = useDriver(router.query.id as string);
  const [name, setName] = useState<string>(driver.name);
  const [email, setEmail] = useState<string>(driver.email);

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
      toast.error("Erro ao editar motorista");
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
        <title>Edit Driver {name} | GSM</title>
      </Head>
      {!isLoading && (
        <FormContainer onSubmit={handleSubmit}>
          <div className="mb-2">
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
          <div className="mb-2 mt-6">
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
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="h-10 px-5 w-full text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            >
              Salvar motorista
            </button>
          </div>
        </FormContainer>
      )}

      {isLoading && (
        <div className="flex justify-center mt-10">
          <Spinner size="10" />
        </div>
      )}
    </>
  );
}
