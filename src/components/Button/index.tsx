interface IButtonProps {
  text: string;
  disabled?: boolean;
}

export function Button({ text, disabled }: IButtonProps) {
  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={disabled}
        type="submit"
        className="h-10 w-full px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:cursor-pointer hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-indigo-700"
      >
        {text}
      </button>
    </div>
  );
}
