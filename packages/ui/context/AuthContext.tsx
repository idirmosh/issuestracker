import useUser from "../hooks/useUser";
import { createContext, ReactElement, useEffect, useState } from "react";

type PropsType = {
  children?: ReactElement;
};

export interface IUser {
  id: string;
  username: string;
  email: string;
  image: string;
}

type StateProps = {
  contextUser: IUser;
  setContextUser: (user: IUser) => void;
};

export const AuthContext = createContext<StateProps | null>(null);

export const AuthProvider = (props: PropsType): ReactElement => {
  const [contextUser, setContextUser] = useState<IUser>({} as IUser);
  
  const { user: userData } = useUser({
    redirectTo: undefined,
    redirectIfFound: undefined
  });

  useEffect(() => {
    setContextUser(userData);
  }, [userData]);

  return (
    <AuthContext.Provider value={{ contextUser, setContextUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
