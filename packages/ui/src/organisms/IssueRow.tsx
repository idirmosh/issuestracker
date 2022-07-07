import SeverityBar from "../atoms/SeverityBar";
import StateBadge from "../atoms/StateBadge";
import IssueRowCommentsDisplay from "../molecules/IssueRowCommentsDisplay";
import IssueRowInEdit from "../molecules/IssueRowInEdit";
import IssueRowInfoDisplay from "../molecules/IssueRowInfoDisplay";
import IssueRowVotessDisplay from "../molecules/IssueRowVotessDisplay";
import { Issue } from "shared/types";
import Link from "next/link";
import React, { ReactElement } from "react";

type IssueRowProps = {
  issue: Issue;
  projectName: string;
};

function IssueRow({ issue, projectName }: IssueRowProps): ReactElement {
  return (
    <Link href={`/${projectName}/${issue.slug}`}>
      <a>
        <div className="flex flex-col items-start px-6 py-4 mb-2 bg-white border border-gray-200 rounded-md shadow-sm cursor-pointer lg:items-center lg:flex-row hover:shadow-md hover:border-gray-100">
          <div className="flex items-center">
            <div className="w-28">
              <StateBadge status={issue.status} />
            </div>

            <IssueRowInfoDisplay
              title={issue.title}
              createdAt={issue.createdAt}
            />
          </div>

          <div className="flex items-center mt-5 ml-auto lg:mt-0">
            <SeverityBar severity={issue.severity} />

            <IssueRowVotessDisplay votes={issue.votes} />
            <IssueRowCommentsDisplay comments={issue.comments} />
            <IssueRowInEdit />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default IssueRow;
