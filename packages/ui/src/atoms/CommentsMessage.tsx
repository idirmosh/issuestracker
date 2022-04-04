import React, { ReactElement, ReactNode } from "react";

function CommentsMessage({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="bg-gray-200">
      <div className="text-center py-4 text-sm text-gray-500">{children}</div>
    </div>
  );
}

export default CommentsMessage;
