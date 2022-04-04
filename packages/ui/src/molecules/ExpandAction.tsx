import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type Props = {
  on: boolean;
  expand: (on: boolean) => boolean;
};

function ExpandAction({ on, expand }: Props) {
  let active = "bg-gray-50";
  let svg = "h-6 w-6 fill-gray-500";

  return (
    <div
      className={`flex items-center justify-around rounded-full w-7 h-7 cursor-pointer hover:bg-gray-50 transition-colors ease-linear ${
        on && active
      }`}
      onClick={() => expand(!on)}
    >
      {on ? <HiChevronUp className={svg} /> : <HiChevronDown className={svg} />}
    </div>
  );
}
export default ExpandAction;
