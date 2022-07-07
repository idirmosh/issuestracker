import React, { ReactElement } from "react";

function SeverityBar({ severity }: { severity: string }): ReactElement {
  const severitylevels = [
    { name: "critical", value: 4, color: "#CE2E2E" },
    { name: "high", value: 3, color: "#EFA044" },
    { name: "medium", value: 2, color: "#4F46E5" },
    { name: "low", value: 1, color: "#6EB24D" },
  ];

  const current = severitylevels.filter(({ name }) => {
    console.log({ name, severity });
    return name === severity.toLowerCase();
  })[0];

  let active = Array.from(Array(current?.value).keys());

  return (
    <div className="flex items-center">
      <span
        className="text-xs uppercase font-bold mr-2 tracking-wide leading-0 -mb-0.5"
        style={{ color: current?.color }}
      >
        {severity}
      </span>
      <svg width="30" height="14" viewBox="0 0 30 14">
        {Object.entries(severitylevels).map((level, index) => {
          return (
            <rect
              key={index}
              x={index * 8}
              width="6"
              height="12"
              rx="2"
              fill="#e2e3e7"
            />
          );
        })}
        {active.map((item, index) => (
          <rect
            style={{ fill: current?.color }}
            key={index}
            x={index * 8}
            width="6"
            height="12"
            rx="2"
          />
        ))}
      </svg>
    </div>
  );
}

export default SeverityBar;
