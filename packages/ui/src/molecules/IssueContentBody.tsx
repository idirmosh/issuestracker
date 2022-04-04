//@ts-nocheck
import { IssueContext } from "ui/context";
import React, { useContext } from "react";
import DOMPurify from "isomorphic-dompurify";

function IssueContentBody() {
  const value = useContext(IssueContext);

  const cleanHTML = DOMPurify.sanitize(value.description);
  return (
    <div className="px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <div
            className="mt-1 text-sm text-gray-900 main-content"
            dangerouslySetInnerHTML={{
              __html: cleanHTML,
            }}
          />
        </div>
      </dl>
    </div>
  );
}

export default IssueContentBody;
