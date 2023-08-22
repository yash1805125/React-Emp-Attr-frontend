import { useState } from "react";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = (props) => {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };

  const handleRegister = () => {
    const API = "https://login-signup-auth.vercel.app/register";
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status >= 400) {
          alert(`Register Unsuccessful - ${result.result}`);
        } else {
          alert(`Successfully registered - ${result.result}`);
          props.valid(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-form-container">
      <h2 style={{ color: "white" }}>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          id="name"
          placeholder="full name"
        />

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
          className="l1"
          onClick={handleRegister}
          style={{ color: "brown" }}
          type="submit"
        >
          Register
        </button>
      </form>

      <button className="link" onClick={() => props.onFormSwitch("login")}>
        Already have account? LogIn here
      </button>
    </div>
  );
};

export default Register;
