import Link from "next/link";
import { formatDate } from "shared/libs/helpers";
import { Issue } from "shared/types";
import { PencelIcon, SpeakerIcon } from "../../icons";
import Badge from "../Badge";
import SeverityBadge from "../SeverityBadge";
import ToolTip from "../ToolTip";

interface IRowProps {
  issue: Issue;
  projectName: string;
}

function TableRow({ issue, projectName }: IRowProps) {
  return (
    <tr className="hover:bg-gray-150 my-6 w-full border-b border-gray-300 hover:bg-gray-50">
      {/* <td className="whitespace-no-wrap max-w-sm overflow-hidden truncate px-6 py-4 font-medium leading-5">
              {issue.title}
            </td> */}

      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex items-center">
          <Link href={`/${projectName}/${issue.slug}`}>
            <a className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={issue.user?.image}
                  alt={issue.user?.username}
                />
              </div>
              <div className="ml-4 hover:underline">
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
            </a>
          </Link>
        </div>
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
      {/* <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
          {formatDate(issue.createdAt)}
        </td> */}
      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
        <div
          title="Edit Issue"
          className="flex w-fit cursor-pointer items-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-semibold text-gray-800 hover:shadow-sm"
        >
          <PencelIcon className="mr-1 h-4 w-4 fill-gray-800" />
          Edit
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
