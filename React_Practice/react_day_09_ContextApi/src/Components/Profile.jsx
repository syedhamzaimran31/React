import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import ThemeContext from "../Context/ThemeContext";

function Profile() {
  const { dataUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  console.log("Login Theme Context: ", theme);

  if (!dataUser) {
    return (
      <div style={{ backgroundColor: theme ? "white" : "black" }}>
        <h1>Not Logged In</h1>
      </div>
    );
  }
  return (
    <>
      <div style={{ backgroundColor: theme ? "white" : "black" }}>
        <h1>Profile Credentials:</h1>
        <h1>
          {dataUser.email}, {dataUser.password}
        </h1>
      </div>
    </>
  );
}

export default Profile;
