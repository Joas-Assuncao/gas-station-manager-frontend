import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { Input } from "@/components/Input";
import { postFetcher } from "@/services/refuelingService";
import { FormContainer } from "@/components/FormContainer";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";

export default function NewRefueling() {
  const [liters, setLiters] = useState<number>(0);
  const [fuelType, setFuelType] = useState<number>(2);
  const [fuelPrice, setFuelPrice] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await postFetcher(`/refuelings/${router.query.id}`, {
        liters,
        fuelType,
        fuelPrice,
      });

      toast.success("Abastecimento cadastrado com sucesso!");
      router.push(`/drivers/edit/${router.query.id}`);
    } catch (err) {
      toast.error("Não foi possível cadastrar o abastecimento.");
    } finally {
      setIsSubmitting(false);
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

      <h1 className="w-full text-3xl">Criar abastecimento</h1>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="number"
          name="liters"
          placeholder="Quantidade de litros"
          label="Litros *"
          required
          value={liters}
          onChange={handleChangeLiters}
        />
        <Input
          type="number"
          name="fuelPrice"
          placeholder="Preço do combustível"
          label="Preço do combustível *"
          required
          value={fuelPrice}
          onChange={handleChangeFuelPrice}
        />
        <Select value={fuelType} onChange={handleChangeFuelType} />
        <Button
          isLoading={isSubmitting}
          disabled={!liters || !fuelType || !fuelPrice}
          text="Adicionar abastecimento"
        />
      </FormContainer>
    </>
  );
}
