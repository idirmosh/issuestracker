import Avatar from "../atoms/Avatar";
import Divider from "../atoms/Divider";
import { Fragment, useRef } from "react";
import { format } from "timeago.js";

import {
  HiOutlineCheck,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiX,
} from "react-icons/hi";
import useComment from "ui/hooks/useComment";
import CommentEdit from "./CommentEdit";
type ExtendedComment = any;

function Comment({ comment }: { comment: ExtendedComment }) {
  const commentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <div className="flex items-start w-full p-6">
        <Avatar src={comment.user.image} />
        <div className="ml-3">
          <p className="text-xs text-gray-400">
            <b className="mr-1 text-sm font-bold text-gray-600">
              {comment.user.username}
            </b>
            about {format(comment.createdAt)}
          </p>
          <p
            ref={commentRef}
            spellCheck={false}
            suppressContentEditableWarning={true}
            className="block w-full max-w-xl my-1 text-sm text-gray-500"
          >
            {comment.content}
          </p>

          <CommentEdit ref={commentRef} comment={comment} />
        </div>
      </div>
      <Divider />
    </Fragment>
  );
}

export default Comment;
