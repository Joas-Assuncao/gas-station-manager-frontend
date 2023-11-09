import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Input } from "@/components/Input";
import { useDriver } from "@/hooks/useDriver";

export default function EditDriver() {
  const router = useRouter();
  const { driver, isLoading, error } = useDriver(router.query.id as string);
  const [name, setName] = useState<string>(driver?.name);
  const [email, setEmail] = useState<string>(driver?.email);

  return (
    <>
      <Head>
        <title>Edit Driver {name} | GSM</title>
      </Head>
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md lg:max-w-xl">
          <form className="mt-6">
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
