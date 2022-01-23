import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/Home";
import Login from "pages/Login";
import 'style/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
