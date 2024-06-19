import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";
import ChangeProfile from "./ChangeProfile";

function Profile() {
  let navigate = useNavigate();
  let { userId } = useParams();
  const { userName, setUserName } = useContext(AppContext);
  return (
    <>
      <h1>Profile Page</h1>
      <div>The user name is : {userName}</div>
      <div>The user Id is {userId}</div>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <ChangeProfile />
    </>
  );
}

export default Profile;
