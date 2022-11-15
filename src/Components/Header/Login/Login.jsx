import React, { useState } from "react";
import Home from "../Home/Home";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 5) {
      setLoggedInUser(true);
    } else {
      alert("Please Enter Valid Email & Passowrd");
    }
  };

  return (
    <>
      {loggedInUser ? (
        <>
          <Home set={setLoggedInUser} />
        </>
      ) : (
        <div className="cont">
          <div className="login">
            <h2 className="sign"> Sign In</h2>

            <h6 className="user">
              New User? <a href="">Create an Account</a>
            </h6>

            <div className="form">
              <label htmlFor="email">
                <input
                  type="text"
                  id="email"
                  placeholder="Username or Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>

              <label htmlFor="passw">
                <input
                  type="text"
                  id="passw"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <div className="checkbox">
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
              </div>

              <button type="submit" className="btn" onClick={handleSubmit}>
                Sign In
              </button>

              <div className="signin">or Sign In With</div>

              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>

          <div className="image">
            <img
              src="data:image/png;base64,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"
              alt="error-loading"
              className="login-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
