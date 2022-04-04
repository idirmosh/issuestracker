import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_ME } from "shared/server/graphql/queries";

export default function useUser(options: { redirectTo: any; redirectIfFound: any; }) {
  const router = useRouter();
  const { redirectTo, redirectIfFound } = options;
  const { loading, error, data } = useQuery(GET_ME);

  const user = data?.getMe;

  useEffect(() => {
    if (
      (redirectTo && !redirectIfFound && !user) ||
      (redirectIfFound && user)
    ) {
      router.push(redirectTo);
    }
    if (!redirectTo || !user) return;
  }, [data, redirectIfFound, redirectTo, loading]);

  return { user, loading, error };
}
