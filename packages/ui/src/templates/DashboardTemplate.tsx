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
    <div className="relative mx-auto mt-12 max-w-7xl border-b border-gray-200 pb-5 sm:pb-0">
      {modal && <CreateProjectModal projectId="null" handler={setModal} />}

      <ul className="mt-12 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
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
