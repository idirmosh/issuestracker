import Image from "next/image";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { formatDate } from "shared/libs/helpers";
import { Comment } from "shared/types";
import { AuthContext } from "../../context/AuthContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ChatIcon, CheckIcon, PencelIcon } from "../../icons";

interface ISCProps {
  comment: Comment;
  contextUserId: string;
}

export default function SingleComment({ comment, contextUserId }: ISCProps) {
  const singleCommentRef = useRef<HTMLInputElement>(null);
  const canEdit: boolean = contextUserId === comment?.user?.id;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>(comment?.content);

  const onEdit = () => {
    setEditMode(true);
  };

  useOnClickOutside(singleCommentRef, () => setEditMode(false));

  const test = comment?.content;

  return (
    <li>
      <div className="relative mb-9">
        <span
          className="absolute top-12 left-5 -ml-px h-full w-0.5 bg-gray-200 pb-4"
          aria-hidden="true"
        ></span>
        <div
          ref={singleCommentRef}
          className="relative flex  items-start space-x-3"
        >
          <div className="relative">
            <Image
              width={40}
              height={40}
              className="block items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
              src={comment?.user?.image}
              alt={comment?.user?.username}
            />

            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-around rounded-full bg-indigo-600 px-0.5 py-px">
              <ChatIcon className="h-4 w-4 fill-white" />
            </span>
          </div>
          {!editMode ? (
            <div className="min-w-0 flex-1">
              <div>
                <div className="flex items-center text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    {comment?.user?.username}
                  </a>
                  <p className="mt-0.5 ml-1 text-xs text-gray-500">
                    Commented {formatDate(comment?.createdAt, "before")}
                  </p>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <p>{commentText}</p>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <textarea
                autoFocus={true}
                value={commentText}
                onChange={(e: any) => setCommentText(e.target.value)}
                className="border-px ml-1 block w-full resize-none rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          )}

          {canEdit && (
            <div
              onClick={onEdit}
              className="flex cursor-pointer items-center rounded-md border border-gray-200 py-1 px-2 text-xs text-gray-900 hover:border-gray-400 hover:shadow"
            >
              {editMode ? (
                <Fragment>
                  <CheckIcon className="mr-1 h-3 w-3 fill-gray-600" />
                  Save
                </Fragment>
              ) : (
                <Fragment>
                  <PencelIcon className="mr-1 h-3 w-3 fill-gray-600" />
                  Edit
                </Fragment>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
