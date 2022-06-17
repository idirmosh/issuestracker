import ModalOverlay from "../atoms/ModalOverlay";
import React, { ReactElement, ReactNode } from "react";

function ModalWrapper({ children }: { children: ReactNode }): ReactElement {
  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <ModalOverlay />
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-gray-50 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
