import { useState, createContext, useEffect, SetStateAction } from "react";

interface DataContext {
  setUserToken: (_: SetStateAction<string>) => void;
  setLoading: (_: SetStateAction<boolean>) => void
  loading: boolean;
  userToken: string;
}

const defaultValues: DataContext = {
  setUserToken: () => { },
  setLoading: () => { },
  loading: true,
  userToken: "",
};

export const AuthContext = createContext(defaultValues);

const AuthProvider = (props: any) => {
  const [userToken, setUserToken] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)


  return (
    <AuthContext.Provider
      value={{
        setUserToken,
        setLoading,
        loading,
        userToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;