import { GRAPHQL_API_URL } from "shared/constants";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
  credentials: "include",
});
const cacheOptions = {
  Commentz: {
    keyFields: ["comments"],
  },
};
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(cacheOptions as any),
});

export default apolloClient;
