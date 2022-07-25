//import IssueContent from "ui/src/organisms/IssueContent";
import IssueSideBar from "ui/src/organisms/IssueSideBar";
import React, { ReactElement } from "react";
import StateBadge from "../atoms/StateBadge";
import Badge from "../../components/Badge";
import SeverityBadge from "../../components/SeverityBadge";
import { ChatIcon, HandIcon } from "../../icons";

function IssueTemplate(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <IssueContent />
          <IssueSideBar />
        </div>
      </main>
    </div>
  );
}

function IssueContent() {
  return (
    <section className="space-y-6 lg:col-span-2 lg:col-start-1">
      <div className="border border-gray-300 bg-white shadow-sm sm:rounded-lg">
        {/* Meta info */}
        <div className="flex flex-col p-6">
          <a className="cursor-pointer text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 hover:underline">
            Microsft
          </a>
          <h2 className="mt-1 text-xl font-bold leading-5 text-gray-900">
            I cant seem to open this page it sucks
          </h2>
        </div>
        {/* issue info */}
        <div className="flex items-center overflow-y-hidden overflow-x-scroll border-t border-b border-gray-400">
          <div className="flex items-center border-r border-gray-300 p-6">
            <h6 className="mr-4 text-sm text-gray-800">Status</h6>
            <Badge status="OPEN" />
          </div>
          <div className="ml-0 flex items-center border-r border-gray-300 p-6">
            <h6 className="mr-4 text-sm text-gray-800">Severity</h6>
            <SeverityBadge severity="High" />
          </div>
          <div className="ml-0 flex items-center border-r border-gray-300 p-6">
            <h6 className="mr-4 text-sm text-gray-800">Opened by</h6>
            <img
              className="h-10 w-10 rounded-full"
              src="https://s.gravatar.com/avatar/b6be3354701b4473ce49a46e4cbd9a04?s=100"
            />
          </div>
        </div>
        {/* issue Description */}
        <div className="p-6">
          <h6 className="mb-4 text-gray-600">Description</h6>
          <p className="pr-0 leading-7 text-gray-900 sm:pr-10">
            Description is the pattern of narrative development that aims to
            make vivid a place, object, character, or group. Description is one
            of four rhetorical modes, along with exposition, argumentation, and
            narration. In practice it would be difficult to write literature
            that drew on just one of the four basic modes.
          </p>
        </div>
        {/* issue attachments */}
        <div className="p-6">
          <h6 className="mb-4 text-gray-600">Attachments</h6>
        </div>
        {/* activity */}
        <div className="border-t border-gray-200 p-6">
          <h6 className="mb-10 text-lg text-gray-900">Acitivity</h6>
          <ActivityFeed />
        </div>
      </div>
    </section>
  );
}

function ActivityFeed() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        <SingleComment />
        <SingleCommentVote />
        <SingleComment />
        <SingleCommentVote />
      </ul>
    </div>
  );
}
function SingleCommentVote() {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                {/* <!-- Heroicon name: solid/user-circle --> */}
                <HandIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 py-1.5">
            <div className="space-x-1 text-sm text-gray-600">
              <a href="#" className="mr-1 font-medium text-gray-900">
                flexbudget
              </a>
              Voted on this
              <a href="#" className="font-medium text-gray-900">
                Issue
              </a>
              <span className="whitespace-nowrap">2d ago</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function SingleComment() {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <img
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
              src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />

            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-around rounded-full bg-indigo-600 px-0.5 py-px">
              <ChatIcon className="h-4 w-4 fill-white" />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-900">
                  idirmosh
                </a>
              </div>
              <p className="mt-0.5 text-xs text-gray-500">Commented 6d ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum
                nec varius. Et diam cursus quis sed purus nam.
              </p>
            </div>
          </div>
          <div>Edit</div>
        </div>
      </div>
    </li>
  );
}

// OLD TEMPLATE
// function IssueTemplate(): ReactElement {
//   return (
//     <div classNameName="min-h-screen">
//       <main classNameName="py-10">
//         <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
//           <IssueContent />
//           <IssueSideBar />
//         </div>
//       </main>
//     </div>
//   );
// }

export default IssueTemplate;
