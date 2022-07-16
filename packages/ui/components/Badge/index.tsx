import { Status } from "shared/types";

interface IBadge {
  children?: any;
  kind?: "icon" | "dot";
  status: Status | string;
}

export default function Badge(props: IBadge) {
  const { children, kind, status } = props;
  const badgeText = (status || "Badge label").toString().toLowerCase();
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
