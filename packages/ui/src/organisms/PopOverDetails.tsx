// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { User } from "shared/types";
import React from "react";

interface PopOverDetailsProps {
  state: boolean;
  handler: (state: boolean) => void;
  user: User;
}

function PopOverDetails({ state, handler, user }: PopOverDetailsProps) {
  return (
    <div>
      <button
        onClick={() => handler(!state)}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={user?.image } alt="avatar" />
      </button>
    </div>
  );
}

export default PopOverDetails;
