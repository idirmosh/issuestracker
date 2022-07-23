import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { CalendarIcon, LinkIcon, MailIcon, PlusIcon } from "../../icons";
import { ProjectContext } from "../../context";
import { formatDate } from "shared/libs/helpers";
import { Issue, Project } from "shared/types";
import { AuthContext } from "../../context/AuthContext";
import CreateIssueModal from "../../src/organisms/CreateIssueModal";

export default function ProjectPageHead() {
  const [isOpen, setIsOpen] = useState(false);

  const { contextUser: user } = useContext(AuthContext);
  const project: Project = useContext(ProjectContext);

  const contributions = project.issues.reduce(
    (prev: number, curr: Issue) => prev + curr.votes,
    0
  );
  const openIssues = project.issues.filter((issue) => issue.status === "OPEN");

  return (
    <header className="mb-8 block w-full border-b border-b-gray-400 bg-white py-6 px-3 shadow-sm xl:px-0">
      <div className="mx-auto mt-3 max-w-7xl pb-5 sm:pb-0">
        <div className="flex items-center">
          <div className="mr-6 flex items-center justify-center rounded-lg border-2 border-gray-300 p-1">
            <Image
              src={project.image}
              width={100}
              height={100}
              className="rounded-md"
              alt={project.name}
              title={project.name}
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {project.name}
            </h1>
            <p className="text-sm text-gray-800">{project.description}</p>
            <div className="items-left mt-2 flex flex-col text-gray-900 sm:flex-row sm:items-center sm:space-x-4">
              <span className="flex text-xs">
                <LinkIcon className="mr-1 h-3 w-3" />
                <p className="cursor-pointer hover:underline">{project.url}</p>
              </span>
              <span className="flex text-xs">
                <MailIcon className="mr-1 h-3 w-3" />
                <p className="cursor-pointer hover:underline">
                  {project.email}
                </p>
              </span>
            </div>
          </div>
          <div className="ml-auto">
            {user && (
              <Fragment>
                {isOpen && (
                  <CreateIssueModal
                    projectId={project.id}
                    projectSlug={project.slug}
                    handler={setIsOpen as any}
                  />
                )}
                <button
                  onClick={() => setIsOpen(true)}
                  className="-my-2.5 ml-8 flex items-center justify-center rounded-lg bg-indigo-700 py-2.5 px-4 text-sm font-semibold text-white hover:bg-indigo-600"
                >
                  <PlusIcon className="mr-1 h-4 w-4" />
                  Create issue
                </button>
              </Fragment>
            )}
          </div>
        </div>
        <div className="items-left relative mt-7 flex w-full flex-col justify-between  sm:flex-row sm:items-center">
          <div className="relative flex">
            <p className="ml-1 mr-3 text-sm font-bold">
              {project.issues.length}
              <span className="ml-1 font-normal text-gray-800">Issues</span>
            </p>
            <p className="ml-1 mr-3 text-sm font-bold">
              {openIssues.length}
              <span className="ml-1 font-normal text-gray-800">
                Open Issues
              </span>
            </p>
            <p className="ml-1 mr-3 text-sm font-bold">
              {contributions}
              <span className="ml-1 font-normal text-gray-800">
                Contributions
              </span>
            </p>
          </div>
          <div className="relative ml-1 mr-3 mt-2 flex sm:mt-0">
            <p className="leading-0 flex items-center text-xs font-medium text-gray-800">
              <CalendarIcon className="mr-1 -mt-0.5 h-4 w-4" />
              Joined {formatDate(project.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
