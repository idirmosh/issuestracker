// @ts-nocheck
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  size?: string | undefined;
  variant?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  state?: string | undefined;
  type?: string | undefined;
  wide?: boolean;
};
const style = {
  type: {
    primary: "text-white border-indigo-600 bg-indigo-600 hover:bg-indigo-700",
    secondary: "text-white border-gray-500 bg-gray-600 hover:bg-gray-700",
    success: "text-white border-green-600 bg-green-600 hover:bg-green-700",
    danger: "text-white border-red-600 bg-red-600 hover:bg-red-700",
  },
  size: {
    default: "px-4 py-2 text-sm",
    small: "px-3 py-2 text-xs",
    large: "px-4 py-3 text-base",
  },
  variant: {
    default:
      "border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm",
    outlined:
      "border-2 bg-transparent text-gray-600 hover:text-gray-700 hover:bg-transparent",
    link: "px-0 py-0 text-indigo-700 bg-transparent hover:bg-transparent hover:text-indigo-600 hover:underline",
  },
  state: {
    default: "",
    disabled:
      "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none",
  },
};

function Button({
  size,
  variant,
  href,
  state,
  type,
  children,
  onClick,
  wide,
}: Props) {
  // shared styles
  let base = "inline-flex items-center rounded-md font-medium";
  // interpolate classnames based on props

  let calculatedCSS = `
  ${base} ${style.size[size || "default"]}
  ${style.state[state || "default"]}
  ${wide ? "w-full justify-center" : ""}
  ${style.variant[variant || "default"]}
  ${style.type[type || "primary"]}`;

  return (
    <Link href={href || "#0"} passHref>
      <a onClick={onClick} className={calculatedCSS}>
        {children}
      </a>
    </Link>
  );
}

export default Button;
