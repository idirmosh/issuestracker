import { formatDate } from "shared/libs/helpers";
import React, { ReactElement } from "react";

interface IssueInfoRowProps {
  title: string;
  createdAt: string;
}
function IssueRowInfoDisplay({
  title,
  createdAt,
}: IssueInfoRowProps): ReactElement {
  return (
    <div className="ml-4">
      <h1 className="text-base font-medium text-gray-600">{title}</h1>
      <p className="text-xs text-gray-500">
        Reported {formatDate(createdAt)} by idirmosh
      </p>
    </div>
  );
}

export default IssueRowInfoDisplay;
