import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setDataUser } = useContext(UserContext);
  const handleSubmit = () => {
    setDataUser({ email, password });
  };
  return (
    <>
      <div>
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
