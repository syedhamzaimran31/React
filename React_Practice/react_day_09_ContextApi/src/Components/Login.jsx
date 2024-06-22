import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import ThemeContext from "../Context/ThemeContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setDataUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  console.log("Login Theme Context: ", theme);
  const handleSubmit = () => {
    setDataUser({ email, password });
  };
  return (
    <>
      <div
        style={{
          backgroundColor: theme ? "white" : "black",
          width: "100vw",
          height: "30vh",
        }}
      >
        <h1>Login</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
}

export default Login;
