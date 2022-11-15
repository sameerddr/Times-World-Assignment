import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Header/Home/Home";
import Login from "./Components/Header/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} end />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
