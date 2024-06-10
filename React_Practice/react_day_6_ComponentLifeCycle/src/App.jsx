import { useState } from "react";
import Text from "./Components/Text";
import "./App.css";
{
  /* Three stages of React Component Lifecycles are mounting,
 unmounting and updating */
}
function App() {
  const [showText, setShowText] = useState(false);
  function displayText() {
    setShowText(!showText);
  }
  return (
    <>
      <button onClick={displayText}>
        {showText ? "Hide Text" : "Show Text"}
      </button>
      {showText && <Text />}
    </>
  );
}

export default App;
