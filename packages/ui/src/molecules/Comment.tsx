import Avatar from "../atoms/Avatar";
import Divider from "../atoms/Divider";

import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import Button from "../atoms/Button";
import { DELETE_COMMENT } from "shared/server/graphql/queries";
import { IssueContext } from "../../context";
import useComments from "ui/hooks/useComments";
type ExtendedComment = any;

function Comment({ comment }: { comment: ExtendedComment }) {
  const { contextUser: user } = useContext(AuthContext) as any;
  const canEdit = user?.id === comment?.user?.id;
  const [editMode, setEditMode] = useState(false);
  // const [deleteComment, { data, loading, error }] = useMutation(DELETE_COMMENT);

  const { handler } = useComments({
    query: DELETE_COMMENT,
  });

  const commentRef = useRef<HTMLParagraphElement | null>(null);

  const deleteCommentHandler = () => {
    if (canEdit) {
      handler({
        payload: { commentId: comment.id },
        action: "DELETE",
      });
    }
  };
  const editCommentHandler = (id: string) => {
    commentRef.current.contentEditable = "true";
    commentRef.current.focus();
    setEditMode(true);

    //commentRef.current.style.color = "red";
    console.dir();
  };
  const onCommentSubmit = () => {
    handler({
      payload: { commentId: comment.id, commentData: "asdasd" },
      action: "EDIT",
    });
  };
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
          <p
            ref={commentRef}
            spellCheck={false}
            suppressContentEditableWarning={true}
            className="max-w-xl text-sm text-gray-500"
          >
            {comment.content}
          </p>

          {canEdit && (
            <div className="flex mt-1">
              <p className="text-xs font-medium text-blue-600 cursor-pointer">
                {editMode ? (
                  <span onClick={() => editCommentHandler(comment.id)}>
                    Save
                  </span>
                ) : (
                  <span onClick={onCommentSubmit}>Edit</span>
                )}
              </p>
              <p
                className="ml-2 text-xs font-medium text-red-400 cursor-pointer"
                onClick={deleteCommentHandler}
              >
                Delete
              </p>
            </div>
          )}
        </div>
      </div>
      <Divider />
    </Fragment>
  );
}

export default Comment;
