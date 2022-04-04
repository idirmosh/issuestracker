import React from "react";

interface ModalNoteProps {
  props: {
    title: string;
    description: string;
  };
}
function ModalNote({ props }: ModalNoteProps) {
  return (
    <div className="bg-gray-100 mx-6 mb-6 mt-2 border-l-4 border-indigo-500 rounded-lg p-4">
      <h5 className="text-sm text-gray-700"> {props.title}</h5>
      <p className="text-sm text-gray-500">{props.description}</p>
    </div>
  );
}

export default ModalNote;
