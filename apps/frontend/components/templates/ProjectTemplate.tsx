import IssuesList from "ui/src/organisms/IssuesList";
import ProjectInfo from "ui/src/organisms/ProjectInfo";
import React, { useContext } from "react";

function ProjectTemplate({}) {
  return (
    <div className="pb-5 mx-auto mt-12 max-w-7xl sm:pb-0">
      <ProjectInfo />
      <IssuesList />
    </div>
  );
}

export default ProjectTemplate;
