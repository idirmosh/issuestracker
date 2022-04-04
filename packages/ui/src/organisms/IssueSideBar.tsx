// @ts-nocheck
import { useMutation } from "@apollo/client";
import Button from "../atoms/Button";
import Divider from "../atoms/Divider";
import SeverityBar from "../atoms/SeverityBar";
import StateBadge from "../atoms/StateBadge";
import IssueDetailCol from "../molecules/IssueDetailCol";
import { formatDate } from "shared/libs/helpers";
import { AuthContext, AuthContextInterface } from "ui/context/AuthContext";
import { IssueContext } from "ui/context";
import { UPDATE_VOTE } from "shared/server/graphql/queries";
import { useRouter } from "next/router";

import React, { useContext, useState } from "react";
import { HiHand } from "react-icons/hi";

function IssueSideBar() {
  const { contextUser: user } = useContext(AuthContext) as AuthContextInterface;
  const value = useContext(IssueContext);
  const [votes, setVotes] = useState(value.votes);
  const router = useRouter();

  const [contribute, { data }] = useMutation(UPDATE_VOTE);

  const handleContributionSubmit = () => {
    if (!user) {
      router.push("/login");
    } else {
      contribute({
        variables: {
          issueId: value.id,
        },
        onCompleted(data) {
          const updatedVotes = data.updateVote.votes;
          setVotes(updatedVotes);
        },
      });
    }
  };

  return (
    <section className="lg:col-start-3 lg:col-span-1">
      <div className="py-6 bg-white shadow sm:rounded-lg">
        <h4 className="pb-4 pl-4 text-lg font-normal text-gray-500">Details</h4>
        <Divider />
        <div className="px-6 mt-8">
          <IssueDetailCol title="Reported By">
            <span className="text-sm font-medium text-gray-600">
              {value.user.username}
            </span>
          </IssueDetailCol>
          <IssueDetailCol title="Created">
            <span className="text-sm font-medium text-gray-600">
              {formatDate(value.createdAt)}
            </span>
          </IssueDetailCol>
          <IssueDetailCol title="Updated">
            <span className="text-sm font-medium text-gray-600">
              {formatDate(value.updatedAt, "before")} ago
            </span>
          </IssueDetailCol>
          <IssueDetailCol title="State">
            <StateBadge state={value.state} />
          </IssueDetailCol>
          <IssueDetailCol title="Severity">
            <SeverityBar severity={value.severity} />
          </IssueDetailCol>
          <div className="mt-7">
            <h5 className="mb-4 text-sm font-normal text-gray-900">
              Contributions
            </h5>
            <div className="p-4 border border-gray-200 rounded-md">
              <data className="text-4xl font-medium text-indigo-700">
                {votes}
              </data>
              <p className="text-sm text-gray-500">
                People experienced this issue
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 mt-10 mb-4">
          <Button size="large" onClick={handleContributionSubmit} wide={true}>
            Contribute
            <HiHand className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default IssueSideBar;
