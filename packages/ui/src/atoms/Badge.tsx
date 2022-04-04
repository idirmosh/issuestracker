import React, { ReactElement } from "react";

function Badge({ value }: { value: number }): ReactElement {
  return (
    <span className="bg-gray-500 leading-0 -mb-0.5 text-white text-xs font-medium py-0.5 px-1.5 rounded-md">
      {value.toString()}
    </span>
  );
}
export default Badge;
