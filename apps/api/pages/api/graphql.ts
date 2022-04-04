import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
import { schema } from "shared/server/graphql/schema";
import { graphQlContext } from "shared/server/graphql/context";
import { FRONTEND_URL } from "shared/constants";

const cors = Cors({
  origin: "*",
  allowCredentials: true,
});

const apolloServer = new ApolloServer({
  schema,
  // resolvers,
  context: graphQlContext,
});

const startServer = apolloServer.start();

const handler = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
export default cors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
