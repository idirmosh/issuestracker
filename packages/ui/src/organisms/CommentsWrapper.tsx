// @ts-nocheck
import { useMutation } from "@apollo/client";
import { IssueContext } from "ui/context";
import { Comment, Issue } from "shared/types";
import { CREATE_COMMENT } from "shared/server/graphql/queries";
import React, {  ReactNode, useContext, useState } from "react";

export function CommentsWrapper({ children }: { children: ReactNode }) {
  const { comments: ctxComments } = useContext(IssueContext as any);
  const [comments, setComments] = useState([...ctxComments]);
  const value = useContext<Issue>(IssueContext as any);
  const [comment, setComment] = useState("");
  const [isError, setIsError] = useState(false);
  const [addComment, { data, loading }] = useMutation(CREATE_COMMENT);

  const onCommentSubmit = () => {
    if (comment.length > 10) {
      addComment({
        variables: {
          issueId: value.id,
          content: comment,
        },
        onCompleted(data) {
          setComments((prev) => [...prev, data?.createComment]);
          setComment("");
        },
      });
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  const sortedComments = comments.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  })[0];

  return (
    <div>
      {children({
        comment: {
          get: { input: comment, all: comments },
          set: { input: setComment, all: setComments },
          submit: onCommentSubmit,
          payload: {
            data,
            loading,
          },
        },
      })}
    </div>
  );
}

export default CommentsWrapper;
