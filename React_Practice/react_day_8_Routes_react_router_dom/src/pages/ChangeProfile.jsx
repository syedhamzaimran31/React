import React, { useState, useContext } from "react";
import { AppContext } from "../App";
function ChangeProfile() {
  const [newUsername, setNewUsername] = useState("");
  const { setUserName } = useContext(AppContext);
  return (
    <>
      <br />
      <input
        type="text"
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUsername);
        }}
      >
        Change Username
      </button>
    </>
  );
}

export default ChangeProfile;
