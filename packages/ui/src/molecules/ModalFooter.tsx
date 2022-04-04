import Button from "../atoms/Button";
import React, { ReactElement } from "react";
import { HiPlus, HiX } from "react-icons/hi";

interface ModalFooterProps {
  actionName: string;
  actionClose: (arg0: boolean) => boolean;
  handler?: () => void;
}

function ModalFooter({
  actionName,
  actionClose,
  handler,
}: ModalFooterProps): ReactElement {
  return (
    <div className="px-4 py-5 bg-gray-200 sm:px-6 sm:flex sm:flex-row-reverse">
      <Button onClick={handler}>
        <HiPlus className="mr-1" />
        {actionName}
      </Button>
      <span className="mx-2"></span>
      <Button
        variant="outlined"
        type="secondary"
        onClick={() => actionClose(false)}
      >
        <HiX className="mr-1" />
        Cancel
      </Button>
    </div>
  );
}

export default ModalFooter;
