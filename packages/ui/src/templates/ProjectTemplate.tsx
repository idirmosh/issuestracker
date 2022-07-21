import IssuesList from "ui/src/organisms/IssuesList";
import ProjectInfo from "ui/src/organisms/ProjectInfo";
import React, { Fragment, useContext } from "react";
import ToolTip from "../../components/ToolTip";
import Badge from "../../components/Badge";
import SeverityBadge from "../../components/SeverityBadge";
import {
  CalendarIcon,
  EditDotsIcon,
  LinkIcon,
  MailIcon,
  SpeakerIcon,
} from "../../icons";
import Image from "next/image";
import EmptyIssueState from "../../components/EmptyState/Issue";
import { ProjectContext } from "../../context";
import { Issue } from "shared/types";
import Link from "next/link";
import { formatDate } from "shared/libs/helpers";
import { userAgent } from "next/server";

function ProjectTemplate({}) {
  return (
    <div className="h-screen bg-gray-50">
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
        <tr className="bg-gray-50 text-sm font-bold leading-5 tracking-wider">
          <th className="sticky z-10 max-w-sm border-b border-gray-400 px-6 py-4 text-gray-900">
            Title
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Status
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Votes
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Severity
          </th>
          {/* <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Created
          </th> */}
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
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

function TableRow({ issue, projectName }: any) {
  console.log(issue);
  return (
    <tr className="hover:bg-gray-150 my-6 w-full border-b border-gray-100 hover:bg-gray-50">
      <Link href={`/${projectName}/${issue.slug}`}>
        <a>
          {/* <td className="whitespace-no-wrap max-w-sm overflow-hidden truncate px-6 py-4 font-medium leading-5">
            {issue.title}
          </td> */}

          <td className="whitespace-nowrap px-6 py-4">
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={issue.user?.image}
                  alt={issue.user?.username}
                />
              </div>
              <div className="ml-4">
                <div className="text-md font-medium text-gray-900">
                  {issue.title}
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <p className="flex  text-gray-800">
                    # Opened on {formatDate(issue.createdAt)} by{" "}
                    {issue.user?.username}
                  </p>
                </div>
              </div>
            </div>
          </td>
        </a>
      </Link>
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
      {/* <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        {formatDate(issue.createdAt)}
      </td> */}
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-around rounded-full border border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white">
          <EditDotsIcon className="h-5 w-5 fill-trueGray-500" />
        </div>
      </td>
    </tr>
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
