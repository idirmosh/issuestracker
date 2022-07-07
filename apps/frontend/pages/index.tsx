import apolloClient from "shared/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";

const GET_LASTEST_ISSUES = gql`
  query GetLatestIssues {
    getLatestIssues {
      id
      createdAt
      updatedAt
      userId
      project {
        id
        name
        image
      }
      projectName
      title
      slug
      votes
      severity
      comments {
        id
      }
      user {
        image
        username
        id
      }
    }
  }
`;
function Home({ latestIssues }) {
  console.log(latestIssues);
  return (
    <div className="relative pb-5 mx-auto mt-12 max-w-7xl sm:pb-0 px-4">
      {latestIssues &&
        latestIssues.map((issue) => (
          <div
            className="w-full border-b border-gray-100 pb-4 mb-8"
            key={issue.id}
          >
            <div className="flex items-center">
              <h1 className="uppercase text-base font-medium text-gray-700 mr-1">
                {issue.project.name}
              </h1>
              <Link href={issue.project.name.toLowerCase() + "/" + issue.slug}>
                <a className="text-blue-600 text-lg">{issue.title}</a>
              </Link>
            </div>
          </div>
        ))}
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
