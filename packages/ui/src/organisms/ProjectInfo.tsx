import Divider from "..//atoms/Divider";
import ProjectInfoFooter from "..//molecules/ProjectInfoFooter";
import ProjectInfoHeader from "..//molecules/ProjectInfoHeader";
import React from "react";

function ProjectInfo() {
  return (
    <div className="p-6 mb-2 bg-white border border-gray-200 rounded-md shadow-sm">
      <ProjectInfoHeader />
      <Divider />
      <ProjectInfoFooter />
    </div>
  );
}

export default ProjectInfo;
