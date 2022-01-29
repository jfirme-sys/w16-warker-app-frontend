import { axiosHttpClient } from "infra/http/axiosHttpClient";
import { UserCredentials } from "modules/auth/sign-in/models";
import { login } from "modules/auth/sign-in/services/signIn";
import { useState, createContext, useEffect, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface DataContext {
  setUserToken: (_: SetStateAction<string>) => void;
  handleLogin: (credentials: UserCredentials) => void;
  handleLogout: () => void;
  setLoading: (_: SetStateAction<boolean>) => void
  loading: boolean;
  userToken: string;
  authenticated: boolean;
}

const defaultValues: DataContext = {
  setUserToken: () => { },
  handleLogin: (credentials: UserCredentials) => { },
  handleLogout: () => { },
  setLoading: () => { },
  loading: true,
  userToken: "",
  authenticated: true
};

export const AuthContext = createContext(defaultValues);

const AuthProvider = (props: any) => {
  const [userToken, setUserToken] = useState<string>("")
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axiosHttpClient.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, []);

  const handleLogin = async (credentials: UserCredentials) => {
    const response = await login(credentials)
    setUserToken(response.token)

    localStorage.setItem('token', JSON.stringify(response.token))
    axiosHttpClient.defaults.headers.common['Authorization'] = `Bearer ${response.token}`
    setAuthenticated(true)
    navigate('/home')
  }

  const handleLogout = async () => {
    localStorage.removeItem('token')
    axiosHttpClient.defaults.headers.common['Authorization'] = ``
    setAuthenticated(false)
    navigate('/')
  }

  if (loading) {
    return <h1>Loading...</h1>
  }


  return (
    <AuthContext.Provider
      value={{
        setUserToken,
        handleLogin,
        handleLogout,
        setLoading,
        loading,
        userToken,
        authenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;