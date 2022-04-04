import React, { ReactElement } from "react";

interface ProjectCardFooterProps {
  totalResolved: number;
  totalPending: number;
}

function ProjectCardFooter({
  totalResolved,
  totalPending,
}: ProjectCardFooterProps): ReactElement {
  return (
    <div className="mt-4 flex items-start">
      <div>
        <p className="text-sm text-gray-500">Resolved</p>
        <div className="flex items-center">
          <div className="block w-2 h-2 bg-green-400 rounded-sm mr-2"></div>
          <p className="font-medium text-base text-gray-800">{totalResolved}</p>
        </div>
      </div>
      <div className="ml-6">
        <p className="text-sm text-gray-500">Pending</p>
        <div className="flex items-center">
          <div className="block w-2 h-2 bg-red-500 rounded-sm mr-2"></div>
          <p className="font-medium text-base text-gray-800">{totalPending}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardFooter;
