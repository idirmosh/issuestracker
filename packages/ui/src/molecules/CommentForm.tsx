//@ts-nocheck
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import { AuthContext } from "../../context/AuthContext";
//import { ExtendedComment, User } from "global";
import React, { ReactElement, useContext, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { RiLoader4Line } from "react-icons/ri";


type ExtendedComment = any
function CommentForm({ comment }: { comment: ExtendedComment }): ReactElement {
  const { contextUser: user } = useContext(AuthContext);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="pl-6 text-left">
      <h5 className="mb-6 text-sm font-medium text-gray-600">
        Leave a comment
      </h5>

      <div className="flex flex-start">
        <Avatar src={user.image} />
        <div className="ml-4">
          <TextArea comment={comment} />

          <Button
            state={comment.payload.loading ? "disabled" : ""}
            onClick={comment.submit}
          >
            {comment.payload.loading && (
              <RiLoader4Line className="w-4 h-4 mr-1 fill-gray-500 animate-spin" />
            )}
            {comment.payload.loading ? "Loading..." : "Post comment"}
          </Button>
          {isError && (
            <p className="inline-flex items-center ml-4 text-xs text-red-500">
              <HiInformationCircle className="mr-1" />
              Comment Cannot be blank or less than 10 characters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
