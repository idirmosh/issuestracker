import React, { ReactNode, useState } from "react";

interface IToolTipProps {
  children: ReactNode;
  text: string;
  arrow?: string;
  rest?: any;
}

export default function ToolTip({
  children,
  text,
  arrow = "center",
  ...rest
}: IToolTipProps): JSX.Element {
  const [show, setShow] = useState(false);

  const arrowDictionary: Record<string, string> = {
    left: "left-4",
    right: "right-2",
    center: "left-[calc(50%-8px)]",
  };
  const arrowStyles = arrowDictionary[arrow];

  const toolTipBoxStyles =
    "absolute bg-gray-900 text-white text-xs py-2 px-3 rounded-lg bottom-10 bg-opacity-75 w-max border border-gray-800";

  return (
    <div className="relative cursor-help">
      <div
        className={show ? `${toolTipBoxStyles}` : `${toolTipBoxStyles} hidden`}
      >
        {text}
        <span
          className={`absolute -bottom-1 translate-y-2/4 rotate-180 border-x-8 border-t-0 border-b-8 border-solid border-x-transparent border-b-black opacity-70 ${arrowStyles}`}
        />
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
