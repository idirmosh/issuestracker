// @ts-nocheck
import CreateProjectCard from "ui/src/molecules/CreateProjectCard";
import CreateProjectModal from "ui/src/organisms/CreateProjectModal";
import ProjectCard from "ui/src/organisms/ProjectCard";
import { DashboardContext } from "ui/context";
import React, { useContext, useState } from "react";

function DashboardTemplate() {
  const value = useContext(DashboardContext);
  const projects = value;
  const [modal, setModal] = useState(false);
  return (
    <div className="relative pb-5 mx-auto mt-12 border-b border-gray-200 max-w-7xl sm:pb-0">
      {modal && <CreateProjectModal projectId="null" handler={setModal} />}

      <ul className="grid grid-cols-1 gap-6 px-4 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
        <CreateProjectCard setModal={setModal} />

        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </ul>
    </div>
  );
}
export default DashboardTemplate;
