import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { dataUser } = useContext(UserContext);
  if (!dataUser) {
    return <h1>Not Logged In</h1>;
  }
  return (
    <>
      <h1>Profile Credentials:</h1>
      <h1>{dataUser.email}, {dataUser.password}</h1>
    </>
  );
}

export default Profile;
