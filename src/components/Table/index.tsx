import { useMemo } from "react";

import { Tbody } from "./components/Tbody";
import { Thead } from "./components/Thead";

export function Table({ dataSource }: { dataSource: object[] }) {
  const columnsHeader = useMemo(
    () => (dataSource[0] ? Object.keys(dataSource[0]) : []),
    [dataSource]
  );
  const columnsBody: [string, string][][] = useMemo(
    () => dataSource.map((data) => Object.entries(data)),
    [dataSource]
  );

  if (dataSource.length === 0) return <></>;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <Thead rowHeader={columnsHeader} />
              <Tbody rowBody={columnsBody} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
