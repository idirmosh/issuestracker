import apolloClient from "shared/apollo";
import IssueCardDisplay from "ui/components/Card";
import SortIssues from "ui/components/SortIssues";
import { ChevronDownIcon, SortIcon } from "ui/icons";
import { useState } from "react";
import { GET_LASTEST_ISSUES } from "shared/server/graphql/queries";

function Home({ latestIssues }) {
  // console.log(latestIssues);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-7xl flex-grow  py-7 lg:flex xl:px-8">
      <div className="rounded-lg border-l border-r bg-white lg:min-w-0 lg:flex-1">
        <div className="h-full">
          <div className="flex h-14 w-full items-center justify-between border-b border-t pl-7 pr-5">
            <div className="flex  items-end justify-start text-sm">
              <h1 className=" text-sm font-semibold leading-none text-gray-900">
                Issues
              </h1>
              <span className="theme-text-muted mx-1 leading-none">-</span>
              <p className="max-w-2xl text-xs leading-none text-gray-700">
                Popular issues
              </p>
            </div>
            <div
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="relative flex cursor-pointer items-center justify-between py-4 text-xs font-medium leading-6 text-gray-900 hover:text-gray-800"
            >
              <div className="flex items-center">
                <SortIcon className="mr-1 h-4 w-4" />
                <span>Sort Issues By Default</span>
              </div>
              <ChevronDownIcon className="ml-1 h-4 w-4" />
              {isSortOpen && <SortIssues />}
            </div>
          </div>
          <div>
            {latestIssues &&
              latestIssues.map((issue) => (
                <IssueCardDisplay key={issue.id} issue={issue} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: GET_LASTEST_ISSUES,
  });

  return {
    props: { latestIssues: data?.getLatestIssues },
    revalidate: false,
  };
}

export default Home;
