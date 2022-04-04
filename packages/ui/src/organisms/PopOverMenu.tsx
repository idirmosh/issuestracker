import { signOut } from "shared/libs/authService";
import { User } from "shared/types";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

interface PopOverMenuProps {
  state: boolean;
  user: User;
}

function PopOverMenu({ state, user }: PopOverMenuProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    const { ok } = await signOut();
    if (ok) router.reload();
  };
  return ( 
    <Fragment>
      {state && (
        <div
          className="absolute right-0 z-10 w-48 py-1 mt-2 bg-white rounded-md shadow-lg rigin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <div className="block px-4 py-2 border-b border-neutral-300">
            <p className="text-sm leading-4">{user.username}</p>
            <p className="text-xs leading-4 text-neutral-400">{user.email}</p>
          </div>
          {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            onClick={handleSignOut}
            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
            tabIndex={-1}
          >
            Sign out
          </a>
        </div>
      )}
    </Fragment>
  );
}

export default PopOverMenu;
