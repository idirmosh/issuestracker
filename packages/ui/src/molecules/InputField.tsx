import InputLabel from "../atoms/InputLabel";
import React from "react";

interface IInputProps {
  name: string;
  holder?: string;
  label?: string | undefined;
  value?: string;
  handler: (e: React.ChangeEvent<{ value: string }>) => void;
}

function InputField({ name, holder, label, value, handler }: IInputProps) {
  let isPassword = name === "password";
  return (
    <div className="block col-span-6 mb-4 sm:col-span-3">
      <InputLabel label={label} />
      <input
        defaultValue={value}
        type={isPassword ? "password" : "text"}
        name={name}
        placeholder={holder}
        onChange={handler}
        className="text-gray-800 mb-4 py-3 px-4 mt-1 focus-visible:ring-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
      />
    </div>
  );
}
export default InputField;
