import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [customerName, setcustomerName] = useState("");
  const [customerPassword, setcustomerPassword] = useState("");
  return (
    <>
      <div className="App">
        <div className="App_form">
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setcustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Password"
            value={customerPassword}
            onChange={(e) => setcustomerPassword(e.target.value)}
          />
          <button>Submit Button</button>
        </div>
      </div>
    </>
  );
}

export default App;
