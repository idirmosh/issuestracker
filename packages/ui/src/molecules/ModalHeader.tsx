import React, { ReactSVGElement } from "react";

//TODO: icon type
interface ModalHeaderProps {
  title: string;
}

function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="flex items-center">
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
