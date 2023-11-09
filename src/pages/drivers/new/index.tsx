import { useState } from "react";
import Head from "next/head";

import { Input } from "@/components/Input";
import { postFetcher } from "@/services/axios";
import { useRouter } from "next/navigation";

export default function NewDriver() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { back } = useRouter();

  async function handleSubmit() {
    try {
      await postFetcher("/drivers", { name, email });

      back();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Head>
        <title>Create Driver | GSM</title>
      </Head>
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md lg:max-w-xl">
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <Input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                label="Seu nome"
                required={true}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="mb-2 mt-6">
              <Input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                label="Seu e-mail"
                required={true}
                value={email}
                setValue={setEmail}
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
          </form>
        </div>
      </div>
    </>
  );
}
