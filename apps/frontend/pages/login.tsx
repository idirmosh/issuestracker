// @ts-nocheck
import LoginTemplate from "ui/src/templates/LoginTemplate";
import useUser from "ui/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Login(props) {
  useUser({ redirectTo: "/dashboard", redirectIfFound: true });

  return <LoginTemplate />;
}

export default Login;
