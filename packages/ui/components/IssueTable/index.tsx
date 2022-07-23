import { useContext } from "react";
import { Issue, Project } from "shared/types";
import { ProjectContext } from "../../context";
import TableRow from "./TableRow";

export default function IssueTable() {
  const project: Project = useContext(ProjectContext);
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="bg-gray-50 text-sm font-bold leading-5 tracking-wider">
          <th className="sticky z-10 max-w-sm border-b border-gray-400 px-6 py-4 text-gray-900">
            Title
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Status
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Votes
          </th>
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            Severity
          </th>
          {/* <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
              Created
            </th> */}
          <th className="sticky z-10 border-b border-gray-400 px-6 py-4 text-gray-900">
            {/* Actions */}
          </th>
        </tr>
      </thead>
      <tbody>
        {project.issues &&
          project.issues.map((issue: Issue) => (
            <TableRow key={issue.id} issue={issue} projectName={project.slug} />
          ))}
      </tbody>
    </table>
  );
}
