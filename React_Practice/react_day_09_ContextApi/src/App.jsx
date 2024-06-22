import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Theme from "./Components/Theme";
import UserContextProvider from "./Context/UserContextProvider";
import ThemeContextProvider from "./Context/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <Login />
          <Profile />
        </UserContextProvider>
        <Theme />
      </ThemeContextProvider>
    </>
  );
}

export default App;
