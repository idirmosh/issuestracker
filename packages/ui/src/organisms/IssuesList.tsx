// @ts-nocheck
import { ProjectContext } from "ui/context";
import React, { useContext } from "react";
import IssueRow from "./IssueRow";

function IssuesList() {
  const value = useContext(ProjectContext);

  return (
    <div className="mt-6">
      {value.issues &&
        value.issues.map((issue) => (
          <IssueRow key={issue.id} issue={issue} projectName={value.slug} />
        ))}
    </div>
  );
}

export default IssuesList;
