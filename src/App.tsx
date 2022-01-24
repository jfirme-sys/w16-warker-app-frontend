import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/Home";
import SignIn from "pages/sign-in";
import 'style/styles.css'
import SignUp from 'pages/sign-up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
