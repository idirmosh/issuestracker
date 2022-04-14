import React, { Fragment, ReactElement } from "react";
import Navbar from "ui/src/organisms/Navbar";

type LayoutProps = {
  children?: ReactElement;
};
export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}
