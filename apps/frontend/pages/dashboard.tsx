import { useQuery } from "@apollo/client";
import { DashboardContext } from "ui/context";
import DashboardTemplate from "ui/src/templates/DashboardTemplate";
import useUser from "ui/hooks/useUser";
import { GET_DASHBOARD } from "shared/server/graphql/queries";

function DashboardPage(props: any) {
  const { loading, error, data } = useQuery(GET_DASHBOARD);
  console.log({ loading, error, data });
  useUser({
    redirectTo: "/login",
    redirectIfFound: undefined,
  });

  const projects = data?.getDashboard;
  return (
    <DashboardContext.Provider value={projects}>
      <DashboardTemplate />
    </DashboardContext.Provider>
  );
}

export default DashboardPage;
