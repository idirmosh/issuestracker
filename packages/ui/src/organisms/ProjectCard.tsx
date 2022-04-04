import { Project } from "shared/types";
import Link from "next/link";
import ProjectCardBarChart from "../molecules/ProjectCardBarChart";
import ProjectCardFooter from "../molecules/ProjectCardFooter";
import ProjectCardHeader from "../molecules/ProjectCardHeader";

function ProjectCard({ project }: { project: Project }) {
  const issues = project.issues;
  const resolvedIssues = issues.filter((issue) => issue.state === "resolved");
  const pendingIssues = issues.filter((issue) => issue.state === "pending");
  return (
    <Link href={`/${project.slug}`}>
      <a>
        <li className="col-span-1 bg-white border border-gray-200 rounded-md cursor-pointer min-h-min hover:shadow-md">
          <div className="flex flex-col items-start w-full p-6">
            <ProjectCardHeader
              name={project.name}
              url={project.url}
              description={project.description}
            />
            <ProjectCardBarChart
              totalResolved={resolvedIssues.length}
              totalPending={pendingIssues.length}
              totalIssues={issues.length}
            />
            <ProjectCardFooter
              totalResolved={resolvedIssues.length}
              totalPending={pendingIssues.length}
            />
          </div>
        </li>
      </a>
    </Link>
  );
}

export default ProjectCard;
