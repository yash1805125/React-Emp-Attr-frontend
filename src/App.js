import "./App.css";
import { useState } from "react";
import Login from "./components/authComponents/Login";
import Register from "./components/authComponents/Register";
import Home from "./components/classComponents/Home";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [home, setHome] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLogin = () => {
    setHome(true);
  };

  return (
    <div className="App">
      {home === true ? (
        <Home />
      ) : (
        <div>
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} valid={handleLogin} />
          ) : (
            <Register onFormSwitch={toggleForm} valid={handleLogin} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
