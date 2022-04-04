import Button from "../atoms/Button";
import React, { ReactElement } from "react";

function NotLogedInToComment(): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <Button href="/signup" variant="link">
        Sign up for free
      </Button>
      <p className="mx-1">or</p>
      <Button href="/login" variant="link">
        Sign in
      </Button>
      <p className="mx-1">to comment.</p>
    </div>
  );
}
export default NotLogedInToComment;
