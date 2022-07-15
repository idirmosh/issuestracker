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
    <ToolTip text="Simple tooltip">
      <div className="flex h-7 items-center justify-center rounded-full border border-gray-300 bg-white fill-gray-800 py-0.5 px-3 text-xs leading-5 text-gray-800">
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

function ToolTip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);
  // background: #5a5a5a;
  // border: none;
  // height: 12px;
  // width: 12px;
  // top: -7px;
  // transform: rotate(45deg);

  const toolTipBoxStyles =
    "absolute bg-gray-900 text-white py-1 px-2 rounded-lg bottom-8 bg-opacity-75";
  return (
    <div className="relative">
      <div
        className={show ? `${toolTipBoxStyles}` : `${toolTipBoxStyles} hidden`}
      >
        {text}
        <span className="absolute -top-1 border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-black" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}

export default SeverityBar;
