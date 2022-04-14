import React, { ChangeEvent, ReactElement } from "react";
//import { InputHookTypes } from "../../hooks/useComments";
type ExtendedComment = any;

function TextArea({ input }: { input: ExtendedComment }): ReactElement {
  return (
    <textarea
      value={input.value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        input.setValue(e.target.value)
      }
      className="w-11/12 p-2 mb-2 border border-gray-300 rounded-md resize-y focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      cols={100}
      rows={3}
    />
  );
}

export default TextArea;
