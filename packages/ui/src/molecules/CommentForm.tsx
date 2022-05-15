import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import { AuthContext } from "../../context/AuthContext";
import { ReactElement, useContext } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { RiLoader4Line } from "react-icons/ri";
import { ICommentHookInput } from "../../hooks/useComments";
import useComment from "../../hooks/useComment";

function CommentForm({ input }: { input: ICommentHookInput }): ReactElement {
  const { contextUser: user } = useContext(AuthContext) as any;

  const { error, loading, submit } = input;

  return (
    <div className="pl-6 text-left">
      <h5 className="mb-6 text-sm font-medium text-gray-600">
        Leave a comment
      </h5>

      <div className="flex flex-start">
        <Avatar src={user.image} />
        <div className="ml-4">
          <TextArea input={input} />

          <Button state={loading ? "disabled" : ""} onClick={submit}>
            {loading && (
              <RiLoader4Line className="w-4 h-4 mr-1 fill-gray-500 animate-spin" />
            )}
            {loading ? "Loading..." : "Post comment"}
          </Button>
          {error !== "" && (
            <p className="inline-flex items-center ml-4 text-xs text-red-500">
              <HiInformationCircle className="mr-1" />
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
