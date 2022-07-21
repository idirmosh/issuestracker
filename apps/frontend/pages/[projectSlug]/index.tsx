// @ts-nocheck
import { InferGetStaticPropsType } from "next";
import apolloClient from "shared/apollo";
import { GET_PROJECT, GET_PROJECT_PATHS } from "shared/server/graphql/queries";
import { ProjectContext } from "ui/context";
import ProjectTemplate from "ui/src/templates/ProjectTemplate";
import { Project } from "shared/types";

function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ProjectContext.Provider value={project}>
      <ProjectTemplate />
    </ProjectContext.Provider>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({ query: GET_PROJECT_PATHS });

  return {
    paths: data.getAllProjects.map((project: Project) => ({
      params: { projectSlug: project.slug },
    })),

    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: GET_PROJECT,
    variables: { slug: params.projectSlug },
  });
  console.log(data.getProject);
  return {
    props: { project: data.getProject },
    revalidate: false,
  };
}

export default ProjectPage;
