import React from "react";

function InputLabel({ label }: { label: string | undefined }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
  );
}

export default InputLabel;
