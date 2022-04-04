import React from "react";
import { MdOutlineAdd } from "react-icons/md";

function CreateProjectCard({
  setModal,
}: {
  setModal: (arg0: boolean) => boolean;
}) {
  return (
    <li
      onClick={() => setModal(true)}
      className="col-span-1 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:bg-neutral-50"
    >
      <MdOutlineAdd className="w-16 h-16 fill-neutral-300" />
      <div className="text-neutral-400 items-start">Create a project</div>
    </li>
  );
}

export default CreateProjectCard;
