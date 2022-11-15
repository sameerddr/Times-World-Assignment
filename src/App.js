import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Header/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} end />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
