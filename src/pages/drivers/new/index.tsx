import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

import { Input } from "@/components/Input";
import { postFetcher } from "@/services/driverService";
import { FormContainer } from "@/components/FormContainer";
import toast from "react-hot-toast";

export default function NewDriver() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await postFetcher("/drivers", { name, email });

      toast.success("Motorista cadastrado com sucesso!");
      router.push("/");
    } catch (err) {
      toast.error("Não foi possível criar o motorista.");
    }
  }

  function handleChangeName(value: string) {
    setName(value);
  }

  function handleChangeEmail(value: string) {
    setEmail(value);
  }

  return (
    <>
      <Head>
        <title>Create Driver | GSM</title>
      </Head>

      <h1 className="w-full text-center text-3xl">Criar motorista</h1>

      <FormContainer onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            label="Seu nome"
            required={true}
            value={name}
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
            value={email}
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
    </>
  );
}
