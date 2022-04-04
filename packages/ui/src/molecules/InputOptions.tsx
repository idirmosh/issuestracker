import InputLabel from "../atoms/InputLabel";
import React, { ReactElement } from "react";

interface InputOptionProps {
  label: string;
  name: string;
  handler: (e: React.ChangeEvent<{ value: string }>) => void;
  options: Array<string>;
}

function InputOptions({
  label,
  name,
  handler,
  options,
}: InputOptionProps): ReactElement {
  return (
    <div className="col-span-6 mb-4 sm:col-span-3">
      <InputLabel label={label} />
      <select
        onChange={handler}
        name={name}
        className="text-gray-700 py-2.5 px-4 mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md pl-3 pr-10 text-basefocus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default InputOptions;
