//@ts-nocheck
import { IssueContext } from "ui/context";
import Link from "next/link";
import React, { useContext } from "react";

function IssueContentHeader() {
  const value = useContext(IssueContext);

  return (
    <div className="pt-5 pb-4">
      <Link href={`/${value.project.slug}`}>
        <a className="pl-6 text-sm font-medium text-indigo-600 transition-all hover:underline">
          Vercel
        </a>
      </Link>
      <h2 className="pl-6 text-base font-medium leading-6 text-gray-900">
        {value.title}
      </h2>
    </div>
  );
}

export default IssueContentHeader;
