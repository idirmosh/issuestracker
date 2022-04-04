import Avatar from "../atoms/Avatar";
import Divider from "../atoms/Divider";
//import { ExtendedComment } from "global";
import React, { Fragment } from "react";
import { format } from "timeago.js";
type ExtendedComment = any
function Comment({ comment }: { comment: ExtendedComment }) {
  return (
    <Fragment>
      <div className="flex items-start my-5">
        <Avatar src={comment.user.image} />
        <div className="ml-3">
          <p className="text-xs text-gray-400">
            <b className="mr-1 text-sm font-bold text-gray-600">
              {comment.user.username}
            </b>
            about {format(comment.createdAt)}
          </p>
          <p className="max-w-xl text-sm text-gray-500">{comment.content}</p>
        </div>
      </div>
      <Divider />
    </Fragment>
  );
}

export default Comment;
