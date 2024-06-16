import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Profile() {
  let navigate = useNavigate();
  let { userId } = useParams();

  return (
    <>
      <div>The user Id is {userId}</div>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </>
  );
}

export default Profile;
