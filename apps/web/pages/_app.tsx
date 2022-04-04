import { AuthProvider } from "ui/context/AuthContext";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "shared/apollo";
import Layout from "../components/templates/Layout";
import { AppProps } from "next/app";
import "../styles/globals.css";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
}
