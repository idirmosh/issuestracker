import React from "react";

type BarPlotProps = {
  width: number;
  variant?: string | undefined;
};

const BarPlot = ({ width = 100, variant }: BarPlotProps): JSX.Element => {
  if (width == 0) width = 1;

  const styles: string = variant
    ? `${variant === "pending" ? "fill-red-500" : "fill-green-400"}`
    : "fill-gray-200";

  return (
    <svg width={`${width - 1}%`} height="12" className={styles}>
      <rect width="100%" height="12" rx="4" />
    </svg>
  );
};

export default BarPlot;
