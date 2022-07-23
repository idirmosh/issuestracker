import { useContext } from "react";
import EmptyIssueState from "../../components/EmptyState/Issue";
import IssueTable from "../../components/IssueTable";
import ProjectPageHead from "../../components/ProjectPageHead";
import { ProjectContext } from "../../context";

function ProjectTemplate({}) {
  const project = useContext(ProjectContext);
  const hasIssues = Boolean(project.issues.length > 0);
  console.log({ project, hasIssues });
  return (
    <div className="h-screen bg-gray-50">
      <div className="mx-auto  px-2 pb-5 sm:pb-0 xl:px-0">
        <ProjectPageHead />
        {hasIssues ? (
          <div className="mx-auto max-w-7xl overflow-x-auto rounded-md border border-gray-400 bg-white shadow-sm md:pr-0">
            <IssueTable />
          </div>
        ) : (
          <EmptyIssueState />
        )}
      </div>
    </div>
  );
}

export default ProjectTemplate;
