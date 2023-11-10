import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import toast from "react-hot-toast";

import { Input } from "@/components/Input";
import { postFetcher } from "@/services/driverService";
import { FormContainer } from "@/components/FormContainer";
import { isEmailValid } from "@/utils";
import { Button } from "@/components/Button";

export default function NewDriver() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await postFetcher("/drivers", { name, email });

        toast.success("Motorista cadastrado com sucesso!");
        router.push("/");
      } catch (err) {
        toast.error("Não foi possível criar o motorista.");
      }
    },
    [email, name, router]
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
        <title>Create Driver | GSM</title>
      </Head>

      <h1 className="w-full text-center text-3xl">Criar motorista</h1>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          label="Seu nome *"
          required
          value={name}
          onChange={handleChangeName}
        />
        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          label="Seu e-mail *"
          required
          value={email}
          onChange={handleChangeEmail}
        />
        <Button
          disabled={!name || !email || !isEmailValid(email)}
          text="Salvar motorista"
        />
      </FormContainer>
    </>
  );
}
