import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/home";
import SignIn from "pages/sign-in";
import 'style/styles.css'
import SignUp from 'pages/sign-up';
import AuthProvider from 'providers/authProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
