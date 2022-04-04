import Button from "../atoms/Button";
import React, { Fragment } from "react";

function NavbarNotLogedIn() {
  return (
    <Fragment>
      <Button type="secondary" href="/login">
        Login
      </Button>
      <span className="mx-1"></span>
      <Button type="primary" href="/signup">
        Sign Up
      </Button>
    </Fragment>
  );
}

export default NavbarNotLogedIn;
