import { useContext, useEffect } from "react";
import { Comment } from "shared/types";
import { IssueContext } from "../../context";
import { AuthContext } from "../../context/AuthContext";
import {
  CommentsContext,
  CommentsContextProvider,
} from "../../context/CommentsContext";
import SingleComment from "./SingleComment";
import VoteComment from "./VoteComment";

export default function CommentList() {
  const { contextUser: user } = useContext(AuthContext);
  const { comments, _ } = useContext(CommentsContext);

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {comments &&
          comments.map((comment: Comment) => (
            <SingleComment
              key={comment?.id}
              comment={comment}
              contextUserId={user?.id}
            />
          ))}
      </ul>
    </div>
  );
}
