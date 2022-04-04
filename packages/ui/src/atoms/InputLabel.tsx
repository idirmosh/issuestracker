import React from "react";

function InputLabel({ label }: { label: string | undefined }) {
  return (
    <label className="mb-2 block text-sm font-normal text-gray-500">
      {label}
    </label>
  );
}

export default InputLabel;
