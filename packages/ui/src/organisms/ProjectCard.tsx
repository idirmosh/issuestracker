import { Project } from "shared/types";
import Link from "next/link";
import ProjectCardBarChart from "../molecules/ProjectCardBarChart";
import ProjectCardFooter from "../molecules/ProjectCardFooter";
import ProjectCardHeader from "../molecules/ProjectCardHeader";

function ProjectCard({ project }: { project: Project }) {
  const issues = project.issues;
  const resolvedIssues = issues.filter((issue) => issue.status === "resolved");
  const pendingIssues = issues.filter((issue) => issue.status === "pending");
  return (
    <Link href={`/${project.slug}`}>
      <a>
        <li className="col-span-1 min-h-min cursor-pointer rounded-md border border-gray-200 bg-white hover:shadow-md">
          <div className="flex w-full flex-col items-start p-6">
            <ProjectCardHeader
              name={project.name}
              url={project.url}
              image={project.image}
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
