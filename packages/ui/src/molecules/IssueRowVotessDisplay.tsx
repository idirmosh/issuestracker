//@ts-nocheck

import React from "react";
import { HiHand } from "react-icons/hi";

function IssueRowVotessDisplay({ votes }) {
  return (
    <div className="flex items-center ml-6">
      <HiHand className="fill-gray-400 w-5 h-5" />
      <p className="text-sm ml-1 text-gray-500 leading-0 -mb-0.5">
        <b className="font-medium">{votes}</b> Votes to fix it!
      </p>
    </div>
  );
}

export default IssueRowVotessDisplay;
