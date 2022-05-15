import { forwardRef, Fragment } from "react";
import {
  HiOutlineCheck,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiX,
} from "react-icons/hi";
import useComment, { IUseCommentPropTypes } from "ui/hooks/useComment";

const CommentEdit = forwardRef((props: any, ref: any) => {
  const { editMode, canEdit, onSubmit, onEdit, onDelete, onCancel } =
    useComment({ ref, comment: props.comment });
  return (
    <Fragment>
      {canEdit && (
        <div className="flex mt-4">
          <div className="text-sm font-medium text-blue-600 cursor-pointer">
            {editMode ? (
              <div className="flex items-center mr-3">
                <span
                  className="flex items-center mr-3 leading-none"
                  onClick={onSubmit}
                >
                  <HiOutlineCheck className="w-4 h-4 mr-1" />
                  Save
                </span>
                <span
                  className="flex items-center leading-none text-gray-400"
                  onClick={onCancel}
                >
                  <HiX className="w-4 h-4 mr-1" />
                  Cancel
                </span>
              </div>
            ) : (
              <span
                className="flex items-center mr-2 leading-none"
                onClick={onEdit}
              >
                <HiOutlinePencilAlt className="w-4 h-4 mr-1" />
                Edit
              </span>
            )}
          </div>
          <p
            className="flex items-center ml-3 mr-2 text-sm font-medium leading-none text-red-400 cursor-pointer"
            onClick={onDelete}
          >
            <HiOutlineTrash className="w-4 h-4 mr-1" />
            Delete
          </p>
        </div>
      )}
    </Fragment>
  );
});

export default CommentEdit;
