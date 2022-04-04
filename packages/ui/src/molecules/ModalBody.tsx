import React, { ReactElement, ReactNode } from "react";

function ModalBody({ children }: { children: ReactNode }): ReactElement {
  return <div className="px-4 pb-4 sm:p-6 sm:pb-4">{children}</div>;
}

export default ModalBody;
