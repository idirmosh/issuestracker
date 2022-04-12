import Comment from "./Comment";
export type ExtendedComment = any;
import React, { ReactElement } from "react";

function Comments({ comments }: { comments: any }): ReactElement {
  console.log("Comments Render");
  return (
    comments &&
    comments.map((comment: { id: React.Key | null | undefined }) => (
      <Comment key={comment.id} comment={comment} />
    ))
  );
}

export default Comments;
