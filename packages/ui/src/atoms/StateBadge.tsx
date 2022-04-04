import React from "react";

function StateBadge({ state }: { state: string }): React.ReactElement {
  const isResolved = state === "resolved";

  return (
    <div
      title={`Issue is ${state}`}
      className={`flex items-center w-min px-2 py-2 -mb-px bg-green-50 border font-medium leading-none uppercase tracking-widest text-[.7rem] rounded-md ${
        isResolved
          ? "bg-green-50 text-green-500 border-green-200"
          : "bg-red-50 text-red-500 border-red-200"
      }`}
    >
      <span
        className={`block rounded-sm w-2.5 h-2.5 tracking-wider ${
          isResolved ? "bg-green-500" : "bg-red-500"
        } mr-1.5`}
      ></span>
      {state}
    </div>
  );
}

export default StateBadge;
