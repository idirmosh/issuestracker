//@ts-nocheck
// ! TODO revisit to and types and fix ts loader
import { LOGIN, LOG_OUT, SIGN_UP } from "shared/server/graphql/queries";
import apolloClient from "shared/apollo";

export async function signIn(options) {
  const { username, password, redirectUrl } = options;
  const canRedirect = Boolean(redirectUrl);
  let error, status, ok;

  try {
    const config = {
      mutation: LOGIN,
      variables: { username, password },
    };
    const { data } = await apolloClient.mutate(config);

    if (canRedirect) {
      window.location.href = redirectUrl;
    }
    (error = undefined), (status = 200), (ok = true);
  } catch (e) {
    (error = e.message), (status = 401), (ok = false);
  }
  return { error, status, ok };
}

export async function signUp(options) {
  const { username, email, password, redirectUrl } = options;
  const canRedirect = Boolean(redirectUrl);
  let error, status, ok;
  try {
    const config = {
      mutation: SIGN_UP,
      variables: { username, email, password },
    };
    const { data } = await apolloClient.mutate(config);

    if (canRedirect) {
      window.location.href = redirectUrl;
    }
    (error = undefined), (status = 200), (ok = true);
  } catch (e) {
    (error = e.message), (status = 409), (ok = false);
  }

  return { error, status, ok };
}

export async function signOut() {
  let error, status, ok;
  try {
    const { data } = await apolloClient.mutate({ mutation: LOG_OUT });
    (error = undefined), (status = 200), (ok = true);
  } catch (e) {
    (error = e.message), (status = 409), (ok = false);
  }
  return { error, status, ok };
}
