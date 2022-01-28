import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "pages/home";
import SignIn from "pages/sign-in";
import SignUp from 'pages/sign-up';
import { useContext } from 'react';
import { AuthContext } from 'providers/authProvider';

export function AppRoutes() {
  function PrivateRoute({ children }: any) {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) {
      return <Navigate to="/" />
    }

    return children
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}