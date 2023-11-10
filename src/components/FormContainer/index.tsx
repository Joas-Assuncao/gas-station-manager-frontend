interface IFormContainerProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export function FormContainer({ children, onSubmit }: IFormContainerProps) {
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <div className="w-full p-8 m-auto rounded-md lg:max-w-xl">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}
