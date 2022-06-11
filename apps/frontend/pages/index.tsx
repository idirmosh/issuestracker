import apolloClient from "shared/apollo";
import { gql } from "@apollo/client";

const GET_LASTEST_ISSUES = gql`
  query GetLatestIssues {
    getLatestIssues {
      id
      createdAt
      updatedAt
      userId
      project {
        id
      }
      projectName
      title
      slug
      description
      state
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
    <div className="max-w-6 flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
      {latestIssues &&
        latestIssues.map((issue) => (
          <div
            className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 xl:my-2 xl:px-2"
            key={issue.id}
          >
            {issue.title}
          </div>
        ))}
    </div>
  );
}
export async function getStaticProps({ params }) {
  // const { data } = await apolloClient.query({
  //   query: GET_LASTEST_ISSUES,
  // });
  return {
    props: { latestIssues: [] },
    revalidate: false,
  };
}

export default Home;
