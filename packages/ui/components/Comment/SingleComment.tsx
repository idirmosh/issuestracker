import Image from "next/image";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { formatDate } from "shared/libs/helpers";
import { Comment } from "shared/types";
import { AuthContext } from "../../context/AuthContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {
  ChatIcon,
  CheckIcon,
  CheckNoCircleIcon,
  EditDotsIcon,
  PencelIcon,
} from "../../icons";

interface ISCProps {
  comment: Comment;
  contextUserId: string;
}

export default function SingleComment({ comment, contextUserId }: ISCProps) {
  const singleCommentRef = useRef<HTMLInputElement>(null);
  const canEdit: boolean = contextUserId === comment?.user?.id;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>(comment?.content);

  const onEdit = () => {
    setEditMode(true);
    setIsOpen(false);
    singleCommentRef.current.childNodes[1].childNodes[0].autofocus = true;
    // console.dir(singleCommentRef.current.childNodes[1].childNodes[0].autofocus);
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
                autoFocus={editMode}
                value={commentText}
                onChange={(e: any) => setCommentText(e.target.value)}
                className="border-px ml-1 block w-full resize-none rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          )}
          <div className="relative">
            <div
              onClick={() => setIsOpen(true)}
              className="flex h-7 w-7 cursor-pointer items-center justify-around rounded-full border border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
            >
              <EditDotsIcon className="h-4 w-4 fill-gray-700" />
            </div>
            {isOpen && (
              <SingleCommentAction
                commentId={comment.id}
                setEditMode={setEditMode}
                setIsOpen={setIsOpen}
              />
            )}

            {editMode && (
              <div className="mt-2 flex h-7 w-7 cursor-pointer items-center justify-around rounded-full border border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100">
                <CheckNoCircleIcon className="h-4 w-4 fill-blue-500" />
              </div>
            )}
          </div>

          {/* {canEdit && (
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
          )} */}
        </div>
      </div>
    </li>
  );
}

function SingleCommentAction({ commentId, setEditMode, setIsOpen }: any) {
  const onEdit = () => {
    setEditMode(true);
    setIsOpen(false);
  };

  const onDelete = () => {};
  return (
    <ul className="absolute right-3 z-10 w-28 cursor-pointer rounded-md border border-gray-200 bg-white text-sm font-medium shadow-lg">
      <li
        onClick={onEdit}
        className="border-b border-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-50"
      >
        Edit
      </li>
      <li
        onClick={onDelete}
        className="px-3 py-2 text-red-500 hover:bg-gray-50"
      >
        Delete
      </li>
    </ul>
  );
}
