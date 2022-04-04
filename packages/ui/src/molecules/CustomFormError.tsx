import React from "react";
import { HiInformationCircle } from "react-icons/hi";

function CustomFormError({ error }: { error: string }) {
  return (
    <div className="flex items-center bg-red-50 border border-red-100 p-4 rounded-md mb-4">
      <HiInformationCircle className="fill-red-900 mr-1" />
      <p className="text-sm font-medium text-red-900">{error}</p>
    </div>
  );
}

export default CustomFormError;
