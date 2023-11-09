export function Thead({ rowHeader }: { rowHeader: string[] }) {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        {rowHeader.map((header) => {
          if (header === "id") {
            return (
              <th scope="col" key={header} className="capitalize px-6 py-4">
                edit
              </th>
            );
          }

          return (
            <th scope="col" key={header} className="capitalize px-6 py-4">
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
