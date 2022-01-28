import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "pages/home";
import SignIn from "pages/sign-in";
import 'style/styles.css'
import SignUp from 'pages/sign-up';
import AuthProvider, { AuthContext } from 'providers/authProvider';

function PrivateRoute({ children }: any) {
  const { authenticated } = useContext(AuthContext)

  if (!authenticated) {
    return <Navigate to="/" />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
