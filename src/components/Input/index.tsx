interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  value: string | undefined;
  label: string;
  onChange: (value: string) => void;
}

export function Input({
  type,
  name,
  placeholder,
  required,
  value,
  label,
  onChange,
}: IInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <label>
      <span className="text-gray-300">{label}</span>
      <input
        type={type}
        name={name}
        className="w-full block px-3 py-2 text-gray-800 outline-none mt-2 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
