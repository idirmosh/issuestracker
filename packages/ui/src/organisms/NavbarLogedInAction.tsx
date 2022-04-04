import Notifications from "../molecules/Notifications";
import React from "react";
import ProfileDropDown from "./ProfileDropDown";

function NavbarLogedInAction() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Notifications />
      <ProfileDropDown />
    </div>
  );
}

export default NavbarLogedInAction;
