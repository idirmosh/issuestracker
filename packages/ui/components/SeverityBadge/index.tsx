import { ReactElement } from "react";
import { Severity } from "shared/types";
import ToolTip from "../ToolTip";

interface ISeverityBadge {
  severity: Severity | string;
}

function SeverityBadge(props: ISeverityBadge): ReactElement {
  const { severity } = props;
  const severitylevels = [
    { name: "critical", value: 4, color: "#D0353F" },
    { name: "high", value: 3, color: "#E67F01" },
    { name: "medium", value: 2, color: "#1885C3" },
    { name: "low", value: 1, color: "#7AA809" },
  ];

  const current = severitylevels.filter(({ name }) => {
    return name === severity.toString().toLowerCase();
  })[0];

  let active = Array.from(Array(current?.value).keys());

  return (
    <ToolTip text={`Severity level is ${severity.toString().toLowerCase()}`}>
      <div className="flex h-7 min-w-[149px] max-w-[150px] items-center justify-center rounded-full border border-gray-300 bg-white fill-gray-800 py-0.5 px-3 text-xs leading-5 text-gray-800">
        <span className="leading-0 -mb-0.5 font-semibold capitalize leading-5 tracking-wider">
          {severity}
        </span>
        <svg className="ml-3 h-3 w-full" viewBox="0 0 48 8">
          {Object.entries(severitylevels).map((level, index) => {
            return (
              <rect
                key={index}
                x={index * 12}
                className="z-20 h-2 w-2 fill-gray-400"
                rx="10"
              />
            );
          })}
          {active.map((item, index) => (
            <rect
              style={{ fill: current?.color }}
              key={index}
              x={index * 12}
              className="z-10 h-2 w-2"
              rx="10"
            />
          ))}
        </svg>
      </div>
    </ToolTip>
  );
}

export default SeverityBadge;
