import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Theme Context: ", theme, setTheme);
  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <button onClick={changeTheme}>
        Change to {theme ? "Dark" : "Light"}
      </button>
    </>
  );
}

export default Theme;
