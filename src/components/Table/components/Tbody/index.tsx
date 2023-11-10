import { verifyValuesFromTbody } from "@/utils";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";

interface ITbody {
  rowBody: [string, string][][];
}

export function Tbody({ rowBody }: ITbody) {
  return (
    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
      {rowBody.map((row, index) => (
        <tr className="border-b dark:border-neutral-500" key={index}>
          {row.map(([key, value]) => {
            if (key === "id") {
              return (
                <td key={key} className="px-6 py-4">
                  <Link
                    href={`/drivers/edit/${value}`}
                    className="flex max-w-max text-xl border border-transparent transition-colors duration-150 rounded-full p-1 hover:border hover:border-gray-500"
                  >
                    <AiOutlineEdit />
                  </Link>
                </td>
              );
            }

            return (
              <td key={key} className="whitespace-nowrap px-6 py-4">
                {verifyValuesFromTbody(key, value)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
