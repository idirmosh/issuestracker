import React, { ReactElement } from "react";

function Divider(): ReactElement {
  return (
    <div className="block h-px w-full bg-gray-200 last-of-type:bg-transparent"></div>
  );
}

export default Divider;
