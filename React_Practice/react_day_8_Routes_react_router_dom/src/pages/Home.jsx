import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function home(props) {
  const { userName } = useContext(AppContext);
  return (
    <>
      <h1>Home Page</h1>
      <div>The user name is :{userName}</div>
    </>
  );
}

export default home;
