// @ts-nocheck
import apolloClient from "shared/apollo";
import { GET_ISSUE, GET_ISSUE_PATHS } from "shared/server/graphql/queries";
import IssueTemplate from "ui/src/templates/IssueTemplate";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { IssueContext } from "ui/context";

function IssuePage({ issue }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <IssueContext.Provider value={issue}>
      <IssueTemplate />
    </IssueContext.Provider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: GET_ISSUE_PATHS });

  let paths = [];

  data.getAllProjects.forEach((project) => {
    return project.issues.forEach((issue) => {
      paths.push({
        params: { projectSlug: project.slug, issueSlug: issue.slug },
      });

      return paths;
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_ISSUE,
    variables: {
      slug: params.issueSlug,
    },
  });

  return {
    props: { issue: data.getIssue },
    revalidate: false,
  };
};

export default IssuePage;
