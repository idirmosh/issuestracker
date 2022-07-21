import IssueContent from "ui/src/organisms/IssueContent";
import IssueSideBar from "ui/src/organisms/IssueSideBar";
import React, { ReactElement } from "react";

function IssueTemplate(): ReactElement {
  return (
    <div className="min-h-screen">
      <main className="py-10">
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <IssueContent />
          <IssueSideBar />
        </div>
      </main>
    </div>
  );
}

export default IssueTemplate;
