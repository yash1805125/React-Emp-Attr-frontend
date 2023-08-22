import React, { useState } from "react";
// import Home from "../classComponents/Home";

const Login = (props) => {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, pass);
  };

  const handlelogin = () => {
    const API = "https://login-signup-auth.vercel.app/login";
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status >= 400) {
          alert(`Login Unsuccessful - ${result.result}`);
        } else {
          alert("Successfully logged in");
          props.valid(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "white" }}>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="someone@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>

        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
          placeholder="*****"
          id="password"
          name="password"
        />

        <button
          style={{ color: "brown" }}
          className="l1"
          type="submit"
          onClick={handlelogin}
        >
          Log In
        </button>
      </form>

      <button className="link" onClick={() => props.onFormSwitch("register")}>
        Don't Have an account? Register here
      </button>
    </div>
  );
};

export default Login;
