import Comment from "../molecules/Comment";
// import { ExtendedComment } from "global";
export type ExtendedComment = any
import React, { ReactElement } from "react";

function Comments({ comment }: { comment: ExtendedComment }): ReactElement {
  return comment.get.all.map((comment: ExtendedComment) => (
    <Comment key={comment.id} comment={comment} />
  ));
}

export default Comments;
