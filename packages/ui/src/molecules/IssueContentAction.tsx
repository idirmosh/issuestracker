//@ts-nocheck
import Badge from "../atoms/Badge";
import { IssueContext } from "ui/context";
import React, { ReactElement, useContext } from "react";
import ExpandAction from "./ExpandAction";
interface IssueActionState {
  isOpen: boolean;
  setIsOpen: () => void;
}
function IssueContentAction({
  state,
}: {
  state: IssueActionState;
}): ReactElement {
  const { comments } = useContext(IssueContext);

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <h5 className="text-base font-medium text-gray-600 mr-2 -mb-0.5 leading-0">
          Comments
        </h5>
        <Badge value={comments.length} />
      </div>
      <ExpandAction on={state.isOpen} expand={state.setIsOpen} />
    </div>
  );
}

export default IssueContentAction;
