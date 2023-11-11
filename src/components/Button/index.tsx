import { Spinner } from "../Spinner";

interface IButtonProps {
  text: string;
  disabled?: boolean;
  isLoading: boolean;
}

export function Button({ text, disabled, isLoading }: IButtonProps) {
  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={disabled || isLoading}
        type="submit"
        className="h-10 w-full p-2 flex items-center justify-center text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:cursor-pointer hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-indigo-700"
      >
        {!isLoading && text}
        <Spinner
          size="6"
          className="text-gray-800 fill-gray-600"
          isLoading={isLoading}
        />
      </button>
    </div>
  );
}
