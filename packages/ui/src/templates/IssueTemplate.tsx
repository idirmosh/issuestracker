//import IssueContent from "ui/src/organisms/IssueContent";
import IssueSideBar from "ui/src/organisms/IssueSideBar";
import React, { ReactElement } from "react";
import StateBadge from "../atoms/StateBadge";
import Badge from "../../components/Badge";
import SeverityBadge from "../../components/SeverityBadge";
import { ChatIcon, HandIcon } from "../../icons";
import CommentList from "../../components/Comment/CommentList";

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
          <CommentList />
        </div>
      </div>
    </section>
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
