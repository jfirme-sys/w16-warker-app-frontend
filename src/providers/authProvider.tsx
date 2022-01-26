import { UserCredentials, UserLoginResponse } from "modules/auth/sign-in/models";
import { login } from "modules/auth/sign-in/services/signIn";
import { useState, createContext, useEffect, SetStateAction } from "react";

interface DataContext {
  setCredentials: (_: SetStateAction<UserCredentials>) => void;
  credentials: UserCredentials;
  userData: UserLoginResponse;
}

const defaultCredentialsValues = {
  email: "",
  password: ""
};

const defaultResponseValues = {
  user: "",
  token: "",
  status: 0
};

const defaultValues: DataContext = {
  setCredentials: () => { },
  credentials: defaultCredentialsValues,
  userData: defaultResponseValues
};

export const AuthContext = createContext(defaultValues);

const AuthProvider = (props: any) => {
  const [credentials, setCredentials] = useState<UserCredentials>(defaultCredentialsValues)
  const [userData, setUserData] = useState<UserLoginResponse>(defaultResponseValues)

  useEffect(() => {
    (async () => {
      try {
        const userData = await login(credentials)
        setUserData(userData)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [credentials]);

  return (
    <AuthContext.Provider
      value={{
        setCredentials,
        credentials,
        userData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;