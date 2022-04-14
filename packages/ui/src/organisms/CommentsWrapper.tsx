import { Comment } from "shared/types";
import { ReactNode } from "react";
import useComments, { ICommentHookInput } from "ui/hooks/useComments";

interface CommentsWrapperTypes {
  children(args: { comments: Comment[]; input: ICommentHookInput }): ReactNode;
}

export function CommentsWrapper({ children }: CommentsWrapperTypes) {
  const { comments, input } = useComments();

  return <div>{children({ comments, input })}</div>;
}

export default CommentsWrapper;
