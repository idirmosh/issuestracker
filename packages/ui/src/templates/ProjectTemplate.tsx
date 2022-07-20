import IssuesList from "ui/src/organisms/IssuesList";
import ProjectInfo from "ui/src/organisms/ProjectInfo";
import React, { useContext } from "react";
import ToolTip from "../../components/ToolTip";
import Badge from "../../components/Badge";
import SeverityBadge from "../../components/SeverityBadge";
import { CalendarIcon, LinkIcon, MailIcon, SpeakerIcon } from "../../icons";
import Image from "next/image";
import EmptyIssueState from "../../components/EmptyState/Issue";
import { ProjectContext } from "../../context";
import { Issue } from "shared/types";

function ProjectTemplate({}) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-2 pb-5 sm:pb-0 xl:px-0">
        <ProjectInfo />

        <ProjectContainer />
      </div>
    </div>
  );
}

function Table() {
  const project = useContext(ProjectContext);

  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr>
          <th className="sticky z-10 max-w-sm border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            Title
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            Status
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            Votes
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            Severity
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            Created
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-3 text-xs font-medium uppercase leading-5 tracking-wider text-gray-900">
            {/* Actions */}
          </th>
        </tr>
      </thead>
      <tbody>
        {project.issues &&
          project.issues.map((issue: Issue) => (
            <TableRow key={issue.id} issue={issue} projectName={project.slug} />
          ))}
      </tbody>
    </table>
  );
}

function TableRow({ issue }) {
  return (
    <tr className="hover:bg-gray-150 hover:bg-gray-50">
      <td className="whitespace-no-wrap  max-w-sm overflow-hidden truncate px-6 py-4 font-medium leading-5">
        {issue.title}
        <span className="block truncate text-xs text-gray-500">
          https://devdojo.com/idirmosh/this-is-a-test-post
        </span>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <ToolTip text="Blabla">
          <Badge status={issue.status} />
        </ToolTip>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <ToolTip arrow="left" text={`${issue.votes} people voted.`}>
          <Badge kind="icon" status={issue.votes}>
            <SpeakerIcon className="mr-1 h-5 w-5" />
          </Badge>
        </ToolTip>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <SeverityBadge severity={issue.severity} />
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        July 16, 2022 02:19 PM
      </td>
      <td className="whitespace-no-wrap flex space-x-2 px-6 py-4 text-sm leading-5 text-gray-500"></td>
    </tr>
  );
}

function ProjectHeaderIssueStats() {
  return (
    <div className="items-left relative mt-7 flex w-full flex-col justify-between  sm:flex-row sm:items-center">
      <div className="relative flex">
        <p className="ml-1 mr-3 text-sm font-bold">
          10
          <span className="ml-1 font-normal text-gray-800">Issues</span>
        </p>
        <p className="ml-1 mr-3 text-sm font-bold">
          0<span className="ml-1 font-normal text-gray-800">Followers</span>
        </p>
        <p className="mr-3 text-sm font-bold">
          2<span className="ml-1 font-normal text-gray-800">Posts</span>
        </p>
        <p className="mr-3 text-sm  font-bold">
          0<span className="ml-1 font-normal text-gray-800">Answers</span>
        </p>
      </div>
      <div className="relative ml-1 mr-3 mt-2 flex sm:mt-0">
        <p className="leading-0 flex items-center text-xs font-medium text-gray-800">
          <CalendarIcon className="mr-1 -mt-0.5 h-4 w-4" />
          Joined July 15th, 2022
        </p>
      </div>
    </div>
  );
}
function ProjectContainer() {
  return (
    <div className="relative h-full w-full transform  transition-all duration-150 ease-out">
      <div className="mx-auto flex max-w-7xl flex-col flex-col-reverse md:flex-row">
        <div className="mx-auto mt-72 w-full rounded-md border border-gray-300 bg-white shadow-md sm:mt-60 md:pr-0">
          <div>
            <div className="theme-bg flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden align-middle">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
