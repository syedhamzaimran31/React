import React, { useState } from "react";
import UserContext from "./UserContext";
function UserContextProvider({ children }) {
  const [dataUser, setDataUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ dataUser, setDataUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
