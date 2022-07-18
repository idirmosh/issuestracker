import { GRAPHQL_API_URL } from "shared/constants";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
  credentials: "include",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  // link: uploadLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
