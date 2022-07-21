import { Project } from "shared/types";
import Link from "next/link";
import Image from "next/image";
import { FlagIcon, LightBulbIcon, SearchIcon } from "../../icons";
import { getSuccessRate } from "shared/libs/helpers";
import CircularBar from "../../components/Metrics/CircularBar/inex";

function ProjectCard({ project }: { project: Project }) {
  const issues = project.issues;

  const filterStatusByKey = (key: string) =>
    issues.filter((issue) => issue.status === key);

  const openIssues = filterStatusByKey("OPEN");
  const fixedIssues = filterStatusByKey("FIXED");
  const pendingIssues = filterStatusByKey("REVIEWING");

  const unResolved = pendingIssues.length + openIssues.length;
  const successRate = getSuccessRate(unResolved, fixedIssues.length);

  return (
    <Link href={`/${project.slug}`}>
      <a className="col-span-1 flex min-w-[370px] max-w-md flex-col rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md">
        <div className="mb-8 flex items-center px-6 pt-6">
          <Image
            className="block rounded-full"
            alt={project.name}
            title={project.name}
            src={project.image}
            width={48}
            height={48}
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <p className="cursor-pointer text-sm text-gray-800 hover:underline">
              {project.url}
            </p>
          </div>
        </div>
        <p className="mb-8 px-6 pr-11 text-sm text-gray-700">
          {project.description}
        </p>
        <div className="flex border-t border-gray-200 py-5 px-6">
          <CircularBar successRate={successRate} />
          <div className="ml-auto flex items-end space-x-8 pr-2">
            <span className="felx flex-row justify-between text-center">
              <FlagIcon className="mx-auto mb-1 h-5 w-5 fill-orange-400" />
              <p className="text-sm uppercase text-gray-700">Open</p>
              <p className="text-2xl font-bold uppercase leading-7 text-gray-900">
                {openIssues.length}
              </p>
            </span>
            <span className="felx flex-row justify-between text-center">
              <SearchIcon className="mx-auto mb-1 h-5 w-5 fill-indigo-600" />
              <p className="text-sm uppercase text-gray-700">Reviewing</p>
              <p className="text-2xl font-bold uppercase leading-7 text-gray-900">
                {pendingIssues.length}
              </p>
            </span>
            <span className="felx flex-row justify-between text-center">
              <LightBulbIcon className="mx-auto mb-1 h-5 w-5 fill-green-400" />
              <p className="text-sm uppercase text-gray-700">Fixed</p>
              <p className="text-2xl font-bold uppercase leading-7 text-gray-900">
                {fixedIssues.length}
              </p>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectCard;
