// @ts-nocheck
import PopOverDetails from "./PopOverDetails";
import PopOverMenu from "./PopOverMenu";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext, useState } from "react";

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { contextUser: user } = useContext(AuthContext);

  return (
    <div className="relative ml-3 ">
      <PopOverDetails state={isOpen} handler={setIsOpen} user={user} />
      <PopOverMenu state={isOpen} user={user} />
    </div>
  );
}

export default ProfileDropDown;
