interface ISelectProps {
  value: number | undefined;
  onChange: (value: string) => void;
}

export function Select({ value, onChange }: ISelectProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value.toString());
  }

  return (
    <label>
      <span className="text-gray-300">Tipo de combustível *</span>
      <select
        name="fuelType"
        className="w-full block px-3 py-2 text-gray-800 outline-none mt-2 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Selecione um tipo de combustível"
        required
        value={value}
        onChange={handleChange}
      >
        <option value="2">GASOLINE</option>
        <option value="1">DIESEL</option>
        <option value="3">ETHANOL</option>
      </select>
    </label>
  );
}
