import { useContext, useEffect, useState } from "react";
import { IssueContext } from "../context";
import { useQuery } from "@apollo/client";
import { Comment } from "shared/types";

import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS,
} from "shared/server/graphql/queries";
import apolloClient from "shared/apollo";
interface ICommentHook {
  query: any;
}

export interface ICommentHookInput {
  value?: string;
  setValue: (val: string) => void;
  submit?: () => void;
  error?: string;
  setError?: (msg: string) => void;
  loading?: boolean;
}
export interface ICommentHookHandler {
  payload: any;
  action?: string;
}

async function MutationHandler({ action, payload }) {
  const MUTATION_DICTIONARY: any = {
    CREATE: CREATE_COMMENT,
    EDIT: EDIT_COMMENT,
    DELETE: DELETE_COMMENT,
  };
  const { data } = await apolloClient.mutate({
    mutation: MUTATION_DICTIONARY[action],
    variables: payload,
  });

  return { data };
}

function sortArrByDate(arr: Array<any>) {
  return [...arr].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}
export default function useComments() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const issueRef = useContext(IssueContext) as any;

  const [comments, setComments] = useState([]) as any;

  const issueId = issueRef.id;
  const { data, refetch } = useQuery(GET_COMMENTS, {
    variables: { issueId },
    onCompleted(data) {
      const fetchedComments = sortArrByDate(data?.getComments);
      setComments(fetchedComments);
    },
  });

  useEffect(() => {
    refetch();
  }, [comments]);

  const handler = async ({ payload, action }: ICommentHookHandler) => {
    const { data } = await MutationHandler({ payload, action });
    const returnedComment: Comment = data?.createComment;

    switch (action) {
      case "CREATE":
        setLoading(true);
        setComments((prev: Comment[]) => [...prev, returnedComment]);
        setComment("");
        setLoading(false);
        break;
      case "DELETE":
        const filtered: Comment = comments.filter(
          (comment: { id: string }) => comment.id !== payload.commentId
        );
        setComments((prev: any) =>
          prev.filter(
            (comment: { id: string }) => comment.id !== payload.commentId
          )
        );
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (comment.length > 10) {
      handler({
        payload: { issueId: issueRef.id, content: comment },
        action: "CREATE",
      });
    } else {
      setError("The comment is too short");
    }
  };

  const input: ICommentHookInput = {
    value: comment,
    setValue: setComment,
    submit: onSubmit,
    error,
    setError(msg: string) {
      setError(msg);
      setTimeout(() => setError(""), 3000);
    },
    loading,
  };

  return {
    handler,
    input,
    comments,
  };
}
