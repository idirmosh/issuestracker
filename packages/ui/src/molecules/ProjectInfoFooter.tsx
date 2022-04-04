// @ts-nocheck
import Button from "../atoms/Button";
import CreateIssueModal from "../organisms/CreateIssueModal";
import { ProjectContext } from "ui/context";
import React, { Fragment, useContext, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AuthContext, AuthContextInterface } from "ui/context/AuthContext";
import { formatDate } from "shared/libs/helpers";

function ProjectInfoFooter() {
  const [isOpen, setIsOpen] = useState(false);
  const value = useContext(ProjectContext);
  const { contextUser: user } = useContext(AuthContext) as AuthContextInterface;

  const contributions = value.issues.reduce(
    (prev, curr) => prev + curr.votes,
    0
  );
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-start">
        <div className="flex items-center">
          <span className="block mr-5 text-sm text-gray-500">
            <b className="mr-1 text-gray-700">Created</b>
            {formatDate(value.createdAt)}
          </span>
          <span className="block mr-5 text-sm text-gray-500">
            <b className="mr-1 text-gray-700">{value.issues.length}</b>Issues
          </span>
          <span className="block mr-5 text-sm text-gray-500">
            <b className="mr-1 text-gray-700">{contributions}</b>Contributers
          </span>
        </div>
      </div>
      {user && (
        <Fragment>
          {isOpen && (
            <CreateIssueModal projectId={value.id} projectSlug={value.slug} handler={setIsOpen} />
          )}
          <Button onClick={() => setIsOpen(true)}>
            <HiPlus className="mr-1" />
            Report new issue
          </Button>
        </Fragment>
      )}
    </div>
  );
}

export default ProjectInfoFooter;
