import IssuesList from "ui/src/organisms/IssuesList";
import ProjectInfo from "ui/src/organisms/ProjectInfo";
import React, { useContext } from "react";
import ToolTip from "../../components/ToolTip";
import Badge from "../../components/Badge";
import SeverityBadge from "../../components/SeverityBadge";
import { CalendarIcon, LinkIcon, MailIcon, SpeakerIcon } from "../../icons";
import Image from "next/image";

function ProjectTemplate({}) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-2 pb-5 sm:pb-0 xl:px-0">
        <ProjectInfo />
        {/* <IssuesList /> */}
        <ProjectContainer />
      </div>
    </div>
  );
}

function Table() {
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
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

function TableRow() {
  return (
    <tr className="hover:bg-gray-150 hover:bg-gray-50">
      <td className="whitespace-no-wrap max-w-sm overflow-hidden truncate px-6 py-4 text-sm font-medium leading-5">
        this is a test post
        <span className="block truncate text-xs text-gray-500">
          https://devdojo.com/idirmosh/this-is-a-test-post
        </span>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <ToolTip text="Blabla">
          <Badge status="OPEN" />
        </ToolTip>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <ToolTip arrow="left" text={`11 people voted.`}>
          <Badge kind="icon" status="12">
            <SpeakerIcon className="mr-1 h-5 w-5" />
          </Badge>
        </ToolTip>
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <SeverityBadge severity="CRITICAL" />
      </td>
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        July 16, 2022 02:19 PM
      </td>
      <td className="whitespace-no-wrap flex space-x-2 px-6 py-4 text-sm leading-5 text-gray-500">
        {/* <a
          href="https://devdojo.com/idirmosh/this-is-a-test-post"
          className=" font-medium text-blue-400 hover:underline focus:outline-none"
        >
          View
        </a>
        <a
          href="https://devdojo.com/post/edit/9362"
          className="new-request font-medium text-blue-400 hover:underline focus:outline-none"
        >
          Edit
        </a>
        <div>
          <span className="cursor-pointer font-medium text-blue-400 hover:underline focus:outline-none">
            Delete
          </span>
          <span className="hidden"></span>
          <template>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Are you sure?
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      Are you sure you want to remove this post?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="focus:shadow-outline-red inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm transition duration-150 ease-in-out hover:bg-red-500 focus:border-red-700 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Delete Post
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </template>
        </div> */}
      </td>
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
                  {/* <div>
                    <div className=" p-6 pr-5">
                      <div className="theme-border-b relative flex justify-between p-3 pb-2">
                        <div className="flex items-end items-center">
                          <div className="relative h-20 w-20 lg:h-24 lg:w-24">
                            <img
                              className="theme-border-light-thick h-20 w-20 rounded-full lg:h-24 lg:w-24"
                              src="https://cdn.devdojo.com/users/July2022/idirmosh.jpg"
                            />
                            <svg
                              className="absolute bottom-0 right-0 mb-1 mr-1 h-6 w-6 fill-current text-blue-400"
                              viewBox="0 0 91 91"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill-rule="nonzero" fill="none">
                                <path
                                  d="M89.425 50.131a9.112 9.112 0 010-9.594c2.765-4.467 1.191-10.34-3.437-12.826a9.116 9.116 0 01-4.797-8.309c.161-5.251-4.138-9.551-9.389-9.389a9.116 9.116 0 01-8.309-4.797C61.007.588 55.134-.986 50.667 1.779a9.112 9.112 0 01-9.594 0C36.606-.986 30.732.588 28.247 5.216a9.116 9.116 0 01-8.309 4.797c-5.251-.161-9.551 4.138-9.389 9.389a9.116 9.116 0 01-4.797 8.309C1.124 30.197-.45 36.07 2.315 40.537a9.112 9.112 0 010 9.594c-2.765 4.467-1.191 10.34 3.437 12.826a9.116 9.116 0 014.797 8.309c-.161 5.251 4.138 9.551 9.389 9.39a9.116 9.116 0 018.309 4.797c2.486 4.628 8.359 6.202 12.826 3.437a9.112 9.112 0 019.594 0c4.467 2.765 10.341 1.191 12.826-3.437a9.116 9.116 0 018.309-4.797c5.251.161 9.551-4.138 9.389-9.39a9.116 9.116 0 014.797-8.309c4.629-2.486 6.203-8.36 3.437-12.826z"
                                  fill="#026aff"
                                ></path>
                                <path
                                  d="M71.464 37.012L41.383 67.093l-.178.178a2.598 2.598 0 01-3.673 0L22.564 52.304a2.599 2.599 0 010-3.674l4.4-4.4a2.599 2.599 0 013.674 0l8.73 8.73L63.39 28.938a2.599 2.599 0 013.674 0l4.4 4.4a2.597 2.597 0 010 3.674z"
                                  fill="#FFF"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col pb-2 pl-2">
                            <h1 className="text-lg font-bold leading-none text-gray-900 lg:text-3xl">
                              Vercel
                            </h1>
                            <p className="-mt-1 flex items-center text-xs font-bold leading-none text-gray-700 lg:text-sm">
                              www.vercel.com
                            </p>
                            <p className="-mt-1 flex items-center text-xs font-bold leading-none text-gray-700 lg:text-sm">
                              vercel@vercel,com
                            </p>
                          </div>
                        </div>
                        <div className="btns flex items-center">
                          <div className="w-full">
                            <span className="inline-flex w-full rounded-md shadow-sm">
                              <a
                                href="https://devdojo.com/messages?sendto=idirmosh"
                                className="theme-bg theme-text-solid theme-border border-light focus:shadow-outline-blue  flex w-full items-center justify-center rounded-md px-3 py-1 font-medium leading-6 text-gray-700 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none"
                              >
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  className="my-1 h-4 w-4 lg:mr-1"
                                >
                                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                </svg>
                                <span className="hidden lg:inline">
                                  Message
                                </span>
                              </a>
                            </span>
                          </div>{" "}
                          <div className="ml-2">
                            <div className="w-full">
                              <div
                                className="focus:shadow-outline-blue follow-button flex cursor-pointer items-center justify-center rounded-md bg-red-500 px-3 py-1 font-medium leading-6 text-white shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none"
                                data-id="101217"
                              >
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  className="my-1 h-4 w-4 sm:mr-1"
                                >
                                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                                <span className="hidden text-sm sm:inline">
                                  Follow{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-6 pr-5">
                      <div className="relative flex w-full flex-col justify-start">
                        <div className="theme-text relative mb-5 flex w-full items-center justify-between">
                          <div className="relative flex">
                            <p className="ml-1 mr-3 text-sm font-bold">
                              10
                              <span className="ml-1 font-normal text-gray-800">
                                Issues
                              </span>
                            </p>
                            <p className="ml-1 mr-3 text-sm font-bold">
                              0
                              <span className="ml-1 font-normal text-gray-800">
                                Followers
                              </span>
                            </p>
                            <p className="mr-3 text-sm font-bold">
                              2
                              <span className="ml-1 font-normal text-gray-800">
                                Posts
                              </span>
                            </p>
                            <p className="mr-3 text-sm  font-bold">
                              0
                              <span className="ml-1 font-normal text-gray-800">
                                Answers
                              </span>
                            </p>
                          </div>
                          <div className="relative flex">
                            <p className="flex text-xs font-medium text-gray-800">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                className="mr-1 h-4 w-4"
                              >
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>{" "}
                              Joined July 15th, 2022
                            </p>
                          </div>
                        </div>
                        <p className="theme-text-muted mt-1 mb-3 text-sm leading-5">
                          User has not added any information in their about
                          section.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <Table />
                  {/* Table */}
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
