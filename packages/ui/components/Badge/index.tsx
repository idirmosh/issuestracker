import { formatDate } from "shared/libs/helpers";
import SeverityBar from "../../src/atoms/SeverityBar";

interface IBadge {
  children?: any;
  kind?: "icon" | "dot";
  status: string;
}

export default function Badge(props: IBadge) {
  console.log(props);
  const { children, kind, status } = props;
  // default, withIcon, dot

  const badgeText = (status || "Badge label").toLowerCase();

  const isDefault = Boolean(kind);
  const hasIcon = Boolean(kind === "icon");
  const isDot = Boolean(kind === "dot");

  const semanticStyles = {
    default:
      "border border-gray-200 bg-transparent text-gray-900 fill-gray-800",
    muted: "bg-gray-200 text-gray-800 fill-gray-800",
    info: "bg-blue-200 text-blue-800 fill-blue-800",
    success: "bg-green-200 text-green-800 fill-green-800",
    warning: "bg-orange-200 text-orange-800 fill-orange-800",
    error: "bg-red-200 text-red-800 fill-red-800",
  };

  const statusValuesDictionary: any = {
    OPEN: semanticStyles.info,
    DUBLICATE: semanticStyles.warning,
    FIXED: semanticStyles.success,
    CLOSED: semanticStyles.error,
  };

  const currentStyle =
    statusValuesDictionary[status] || semanticStyles["default"];

  if (isDot) {
    return (
      <span className="inline-flex h-7 items-center">
        <span
          className={`mr-1.5 inline-flex h-3 w-3 rounded-full ${currentStyle}`}
        ></span>
        <span className="-mb-1 overflow-hidden whitespace-nowrap text-xs font-medium capitalize leading-none tracking-normal text-gray-800">
          {badgeText}
        </span>
      </span>
    );
  } else {
    return (
      <span
        className={`inline-flex h-7 items-center rounded-full py-0.5 px-2 text-xs leading-5 ${currentStyle}`}
      >
        {hasIcon && children}
        <span className="leading-0 -mb-0.5 overflow-hidden whitespace-nowrap font-semibold capitalize leading-5 tracking-wider">
          {badgeText}
        </span>
      </span>
    );
  }
}

export function NewCard({ issue }) {
  console.log(issue);
  const severitylevels = [
    { name: "critical", value: 4, color: "#CE2E2E" },
    { name: "high", value: 3, color: "#EFA044" },
    { name: "medium", value: 2, color: "#4F46E5" },
    { name: "low", value: 1, color: "#6EB24D" },
  ];

  const current = severitylevels.filter(({ name }) => {
    return name === issue.severity.toLowerCase();
  })[0];

  let active = Array.from(Array(current?.value).keys());
  const issueUrl = `/${issue.project.name}/${issue.slug}`;
  return (
    <div className="theme-bg theme-shadow theme-border ease flex flex-col justify-between overflow-hidden rounded-none transition-shadow duration-500 hover:shadow-xl sm:border">
      <div className="relative rounded-none p-0">
        <div className="cursor-pointer">
          <div className="w-full px-4 py-4 sm:px-6 sm:pt-5">
            {/* <div className="relative mb-4 rounded-none p-0 sm:rounded-t-xl">
              <div className="flex items-center">
                <div className="flex w-12 items-start space-x-3">
                  <a
                    href={issue.project.name}
                    className="click-attached flex-shrink-0"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={issue.user.image}
                      alt={issue.project.name}
                    />
                  </a>
                </div>

                <div className="flex w-full flex-col justify-between">
                  <div className="relative px-4 sm:px-0">
                    <p className="theme-text-solid text-sm font-medium leading-none">
                      <a
                        href={issue.project.name}
                        className="ignore-dynamic-click click-attached uppercase hover:underline"
                      >
                        {issue.project.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <a
              href={issue.project.slug}
              className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              {issue.project.name}
            </a>
            <h2 className="theme-text text-lg font-medium">
              <a href={issueUrl}>{issue.title}</a>
            </h2>
          </div>
        </div>

        <div className="flex justify-between border-gray-800 px-4 pb-4 sm:px-6 sm:pb-4 sm:pt-0">
          {/* <div className="flex items-center space-x-3">
            <a href="tnylea" className="click-attached flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn.devdojo.com/users/April2021/tnylea.jpg"
                alt=""
              />
            </a>
            <p className="text-sm font-medium text-gray-900">
              <a
                href="tnylea"
                className="ignore-dynamic-click click-attached hover:underline"
              >
                Tony Lea
              </a>
            </p>
            <p className="text-sm text-gray-500">3 days ago</p>
          </div> */}
          <div className="flex items-center">
            <Badge status={issue.status} />
            <span className="mx-2"></span>
            <SeverityBar severity={issue.severity} />

            {/* <SeverityBar severity={issue.severity} /> */}
          </div>

          <div className="flex">
            <Badge kind="icon" status={String(issue.comments.length)}>
              <svg
                className="mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
              </svg>
            </Badge>
            <span className="mx-2"></span>
            <Badge kind="icon" status={String(issue.votes)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
