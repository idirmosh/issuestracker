// @ts-nocheck
import { Fragment, useContext, useState } from "react";
import CommentsMessage from "../atoms/CommentsMessage";
import Divider from "../atoms/Divider";
import CommentForm from "../molecules/CommentForm";
import IssueContentAction from "../molecules/IssueContentAction";
import IssueContentHeader from "../molecules/IssueContentHeader";
import IssueContentBody from "../molecules/IssueContentBody";
import { IssueContext } from "ui/context";
import { AuthContext } from "ui/context/AuthContext";
import Comments from "../molecules/Comments";
import NotLogedInToComment from "../molecules/NotLogedInToComment";
import CommentsWrapper from "./CommentsWrapper";

function IssueContent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { contextUser: user } = useContext(AuthContext);

  const value = useContext(IssueContext);
  let hasComment = value?.comments.length > 0;

  return (
    <section className="space-y-6 lg:col-start-1 lg:col-span-2">
      <div className="bg-white shadow sm:rounded-lg">
        <IssueContentHeader />
        <Divider />
        <IssueContentBody />
        <Divider />
        <IssueContentAction state={{ isOpen, setIsOpen }} />
        <Divider />
        <CommentsWrapper>
          {({ comments, input }) => (
            <Fragment>
              {isOpen && (
                <CommentsMessage>
                  {user ? (
                    <CommentForm input={input} />
                  ) : (
                    <NotLogedInToComment />
                  )}
                </CommentsMessage>
              )}
              {hasComment ? (
                <Comments comments={comments} />
              ) : (
                <CommentsMessage>
                  There are currently no comments for this issue. Be the first
                  to comment.
                </CommentsMessage>
              )}
            </Fragment>
          )}
        </CommentsWrapper>
      </div>
    </section>
  );
}

export default IssueContent;
