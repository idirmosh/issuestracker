import ToolTip from "../../ToolTip";

export default function CircularBar({ successRate }: { successRate: number }) {
  const circumference = 9 * 2 * Math.PI;
  const offset = circumference - (successRate / 100) * circumference;

  return (
    <div className="relative flex flex-col justify-around">
      <div className="flex items-center justify-around">
        <div className="max-w-[50px] -rotate-90">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 20 20">
            <circle
              cx="50%"
              cy="50%"
              r="9"
              className="fill-transparent stroke-gray-200 stroke-2"
            ></circle>
            <circle
              cx="50%"
              cy="50%"
              r="9"
              className="fill-transparent stroke-green-400 stroke-2 transition ease-in-out"
              strokeLinecap="round"
              style={{
                strokeDashoffset: offset,
                strokeDasharray: circumference,
              }}
            ></circle>
          </svg>
        </div>

        <p className="absolute font-mono text-[12px] font-bold leading-none text-gray-800">
          {successRate.toFixed(0)}%
        </p>
      </div>

      <ToolTip text="Issue Resolution Rate" arrow="left">
        <p className="mt-2 text-center text-xs font-medium text-gray-800">
          Success Rate
        </p>
      </ToolTip>
    </div>
  );
}
