import Divider from "../atoms/Divider";
import React, { Fragment, ReactElement, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function IssueDetailCol({ title, children }: Props): ReactElement {
  return (
    <Fragment>
      <div className="flex items-center justify-between py-4">
        <span className="text-sm font-normal text-gray-500">{title}</span>
        {children}
      </div>
      <Divider />
    </Fragment>
  );
}

export default IssueDetailCol;
