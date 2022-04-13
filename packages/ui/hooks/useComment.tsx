import { RefObject, useContext, useState } from "react";
import { AuthContext } from "ui/context/AuthContext";
import useComments from "ui/hooks/useComments";
import { Comment } from "shared/types";

export interface IUseCommentPropTypes {
  ref: RefObject<HTMLInputElement>;
  comment: Comment;
}

function useComment({ ref, comment }: IUseCommentPropTypes) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { contextUser: user } = useContext(AuthContext) as any;

  const { handler } = useComments();

  const canEdit: boolean = user?.id === comment?.user?.id;
  const commentId: string = comment.id;
  const editableElmRef = ref.current;
  const parentElmRef = editableElmRef?.parentNode?.parentNode as HTMLElement;
  const onEditClassNames = ["bg-gray-100", "text-gray-300"] as any;

  const onSubmit = () => {
    const payload = { commentId, commentData: editableElmRef.textContent };
    handler({ payload, action: "EDIT" });
    parentElmRef.classList.remove(onEditClassNames);
    setEditMode(false);
  };

  const onEdit = () => {
    setEditMode(true);
    editableElmRef.contentEditable = "true";
    editableElmRef.focus();
    editableElmRef.style.outline = "none";
    parentElmRef.classList.add(onEditClassNames);
  };

  const onDelete = () => {
    if (canEdit) handler({ payload: { commentId }, action: "DELETE" });
    parentElmRef.style.transition = ".6s opacity ease-in";
    parentElmRef.style.opacity = "0";
  };

  const onCancel = () => setEditMode(false);

  return { editMode, canEdit, onSubmit, onEdit, onDelete, onCancel };
}

export default useComment;
