//@ts-nocheck
import BarPlot from "../atoms/BarPlot";
import React, { Fragment } from "react";

const getPercent = (value: number, max: number): number =>
  Number(((value / max) * 100).toFixed(0));

function ProjectCardBarChart({ totalResolved, totalPending, totalIssues }) {
  const hasIssues = totalIssues !== 0;
  return (
    <Fragment>
      {hasIssues ? (
        <div className="flex items-center mt-4">
          <span className="text-3xl font-bold text-gray-800">
            {totalIssues}
          </span>
          <p className="ml-2 text-base text-gray-500">Issues</p>
        </div>
      ) : (
        <div className="mt-4 text-xl font-bold text-gray-700">N/A</div>
      )}
      {hasIssues ? (
        <div className="flex items-center justify-between w-full mt-4">
          <BarPlot
            width={getPercent(totalPending, totalIssues)}
            variant="pending"
          />
          <BarPlot
            width={getPercent(totalResolved, totalIssues)}
            variant="resolved"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between w-full mt-4">
          <BarPlot width={100} />
        </div>
      )}
    </Fragment>
  );
}

export default ProjectCardBarChart;
