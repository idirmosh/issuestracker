import React, { ReactElement } from "react";

function SeverityBar({ severity }: { severity: string }): ReactElement {
  const levels = [
    { name: "critical", value: 4, color: "#ef4444" },
    { name: "major", value: 3, color: "#fb923c" },
    { name: "minor", value: 2, color: "#0ea5e9" },
    { name: "low", value: 1, color: "#10b981" },
  ];
  const current = levels.filter(
    ({ name }) => name === severity.toLowerCase()
  )[0];

  let active = Array.from(Array(current.value).keys());

  return (
    <div className="flex items-center">
      <span
        className="text-xs uppercase font-medium mr-2 tracking-wide leading-0 -mb-0.5"
        style={{ color: current.color }}
      >
        {severity}
      </span>
      <svg width="30" height="14" viewBox="0 0 30 14">
        {Object.entries(levels).map((level, index) => {
          return (
            <rect
              key={index}
              x={index * 8}
              width="6"
              height="14"
              rx="2"
              fill="#e2e3e7"
            />
          );
        })}
        {active.map((item, index) => (
          <rect
            style={{ fill: current.color }}
            key={index}
            x={index * 8}
            width="6"
            height="14"
            rx="2"
          />
        ))}
      </svg>
    </div>
  );
}

export default SeverityBar;
