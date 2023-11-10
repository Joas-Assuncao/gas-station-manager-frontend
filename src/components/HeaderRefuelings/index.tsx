import Link from "next/link";
import { NextRouter } from "next/router";

export function HeaderRefuelings({ router }: { router: NextRouter }) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-2xl">Abastecimentos do motorista:</h1>
      <Link
        className="px-3 py-2 border border-gray-100 rounded-md"
        href={`/refuelings/${router.query.id}`}
      >
        Adicionar abastecimento
      </Link>
    </div>
  );
}
