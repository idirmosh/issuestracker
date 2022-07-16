import { Issue } from "shared/types";
import { ChatIcon, SpeakerIcon } from "../../icons";
import Badge from "../Badge";
import SeverityBadge from "../SeverityBadge";
import ToolTip from "../ToolTip";

interface IIssueCardProps {
  issue: Issue;
}

export default function IssueCardDisplay(props: IIssueCardProps) {
  const { issue } = props;
  const issueUrl = `/${issue.project.name}/${issue.slug}`;
  return (
    <div className="ease flex flex-col justify-between rounded-none border transition-shadow duration-500 hover:shadow-lg">
      <div className="relative rounded-none p-0">
        <div className="cursor-pointer">
          <div className="w-full px-4 py-4 sm:px-6 sm:pt-5">
            <a
              href={issue.project.slug}
              className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              {issue.project.name}
            </a>
            <h2 className="theme-text text-lg font-medium">
              <a href={issueUrl}>{issue.title}</a>
            </h2>
          </div>
        </div>

        <div className="flex justify-between border-gray-800 px-4 pb-4 sm:px-6 sm:pb-4 sm:pt-0">
          <div className="flex items-center">
            <ToolTip arrow="left" text={`Status is ${issue.status}`}>
              <Badge status={issue.status} />
            </ToolTip>

            <span className="mx-2"></span>
            <SeverityBadge severity={issue.severity} />
          </div>

          <div className="flex">
            <ToolTip
              arrow="left"
              text={`${issue.comments.length} people commented.`}
            >
              <Badge kind="icon" status={String(issue.comments.length)}>
                <ChatIcon className="mr-1 h-5 w-5" />
              </Badge>
            </ToolTip>
            <span className="mx-2"></span>
            <ToolTip arrow="left" text={`${issue.votes} people voted.`}>
              <Badge kind="icon" status={String(issue.votes)}>
                <SpeakerIcon className="mr-1 h-5 w-5" />
              </Badge>
            </ToolTip>
          </div>
        </div>
      </div>
    </div>
  );
}
