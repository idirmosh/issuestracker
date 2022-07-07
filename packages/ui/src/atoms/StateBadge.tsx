import React from "react";

function StateBadge({ status }: { status: string }): React.ReactElement {
  const isResolved = status === "resolved";

  const statuslevels = [
    { name: "OPEN", value: 4, color: "#0F6FDE" },
    { name: "DUBLICATE", value: 3, color: "#EFA044" },
    { name: "REVIEWING", value: 2, color: "#6EB24D" },
    { name: "CLOSED", value: 1, color: "#CE2E2E" },
    { name: "FIXED", value: 0, color: "#7D8679" },
  ];

  const current = statuslevels.filter(({ name }) => name === status)[0];

  return (
    <div
      title={`Issue is ${status}`}
      className={`flex items-center w-min px-2 py-2 -mb-px bg-green-50 border font-medium leading-none uppercase tracking-widest text-[.7rem] rounded-md ${
        isResolved
          ? "bg-green-50 text-green-500 border-green-200"
          : "bg-red-50 text-red-500 border-red-200"
      }`}
      style={{
        color: current?.color,
        backgroundColor: `${current?.color}0A`,
        borderColor: `${current?.color}3F`,
      }}
    >
      <span
        className={`block rounded-sm w-2.5 h-2.5 tracking-wider mr-1.5`}
        style={{ backgroundColor: current?.color }}
      ></span>
      {status}
    </div>
  );
}

export default StateBadge;
