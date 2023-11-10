import { useState } from "react";
import Head from "next/head";

import { Input } from "@/components/Input";
import { postFetcher } from "@/services/refuelingService";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { FormContainer } from "@/components/FormContainer";
import { Select } from "@/components/Select";

export default function NewRefueling() {
  const [liters, setLiters] = useState<number>(0);
  const [fuelType, setFuelType] = useState<number>(2);
  const [fuelPrice, setFuelPrice] = useState<number>(0);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await postFetcher(`/refuelings/${router.query.id}`, {
        liters,
        fuelType,
        fuelPrice,
      });

      toast.success("Abastecimento cadastrado com sucesso!");
      router.push(`/drivers/edit/${router.query.id}`);
    } catch (err) {
      toast.error("Não foi possível cadastrar o abastecimento.");
    }
  }

  function handleChangeLiters(value: string) {
    setLiters(Number(value));
  }

  function handleChangeFuelType(value: string) {
    setFuelType(Number(value));
  }

  function handleChangeFuelPrice(value: string) {
    setFuelPrice(Number(value));
  }

  return (
    <>
      <Head>
        <title>Create Refueling | GSM</title>
      </Head>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <Input
            type="number"
            name="liters"
            placeholder="Utilize . ao invés de ,"
            label="Litros"
            required={true}
            value={liters}
            onChange={handleChangeLiters}
          />
        </div>
        <div>
          <Input
            type="number"
            name="fuelPrice"
            placeholder="Utilize . ao invés de ,"
            label="Preço do combustível"
            required={true}
            value={fuelPrice}
            onChange={handleChangeFuelPrice}
          />
        </div>
        <div>
          <Select value={fuelType} onChange={handleChangeFuelType} />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="h-10 px-5 w-full text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
          >
            Adicionar abastecimento
          </button>
        </div>
      </FormContainer>
    </>
  );
}
