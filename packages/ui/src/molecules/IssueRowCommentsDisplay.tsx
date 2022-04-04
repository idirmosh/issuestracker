//import { ExtendedComment } from "global";
import React, { ReactElement } from "react";
import { HiAnnotation } from "react-icons/hi";
import { ExtendedComment } from "./Comments";

function IssueRowCommentsDisplay({
  comments,
}: {
  comments: ExtendedComment[];
}): ReactElement {
  return (
    <div className="flex items-center ml-5">
      <HiAnnotation className="w-5 h-5 fill-gray-400" />
      <p className="text-sm ml-1 text-gray-500 leading-0 -mb-0.5">
        <b className="font-medium">{comments.length}</b> Comments
      </p>
    </div>
  );
}

export default IssueRowCommentsDisplay;
