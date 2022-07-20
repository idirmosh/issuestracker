// @ts-nocheck

import CreateProjectModal from "ui/src/organisms/CreateProjectModal";
import ProjectCard from "ui/src/organisms/ProjectCard";
import { DashboardContext } from "ui/context";
import React, { useContext, useState } from "react";
import EmptyProjectState from "../../components/EmptyState/Project";

function DashboardTemplate() {
  const value = useContext(DashboardContext);

  const projects = value;
  const [modal, setModal] = useState(false);
  return (
    <div className=" h-screen bg-gray-50 pt-24">
      <div className="mx-auto  max-w-7xl ">
        {modal && <CreateProjectModal projectId="null" handler={setModal} />}

        <ul className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:px-0">
          <EmptyProjectState setModal={setModal} />

          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardTemplate;
