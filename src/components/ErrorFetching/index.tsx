interface IErrorFetchingProps {
  hasError: boolean;
}

export function ErrorFetching({ hasError }: IErrorFetchingProps) {
  if (!hasError) return null;

  return (
    <>
      <h1>Nenhum motorista.</h1>
    </>
  );
}
