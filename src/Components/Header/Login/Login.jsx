import React, { useState } from "react";
import Home from "../Home/Home";
import Auth from "./Auth";
import "./Login.css";

function Login() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <>
      {loggedInUser ? (
        <>
          <Home set={setLoggedInUser} />
        </>
      ) : (
        <Auth set={setLoggedInUser} />
      )}
    </>
  );
}

export default Login;
