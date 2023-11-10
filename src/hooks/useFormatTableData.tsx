import { useMemo } from "react";

interface IFormatTableDataReturn {
  columnsHeader: string[];
  columnsBody: [string, string][][];
}

export function useFormatTableData(
  data: Array<object>
): IFormatTableDataReturn {
  const columnsHeader = useMemo<string[]>(
    () => (data[0] ? Object.keys(data[0]) : []),
    [data]
  );

  const columnsBody: [string, string][][] = useMemo<[string, string][][]>(
    () => data.map((driver) => Object.entries(driver)),
    [data]
  );

  return { columnsHeader, columnsBody };
}
