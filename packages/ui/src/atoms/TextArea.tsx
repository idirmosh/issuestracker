//import { ExtendedComment } from "../../../shared/types";
import React, { ReactElement } from "react";
type ExtendedComment = any
function TextArea({ comment }: { comment: ExtendedComment }): ReactElement {
  return (
    <textarea
      value={comment.get.input}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
        comment.set.input(e.target.value)
      }
      className="w-11/12 p-2 mb-2 border border-gray-300 rounded-md resize-y focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      cols={100}
      rows={3}
    />
  );
}

export default TextArea;
