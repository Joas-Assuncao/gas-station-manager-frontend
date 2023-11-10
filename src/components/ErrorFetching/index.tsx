interface IErrorFetchingProps {
  hasError: boolean;
  message: string;
}

export function ErrorFetching({ hasError, message }: IErrorFetchingProps) {
  if (!hasError) return null;

  return (
    <>
      <p className="text-md">{message}</p>
    </>
  );
}
