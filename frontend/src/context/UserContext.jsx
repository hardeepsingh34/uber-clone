import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserDataContext = createContext(null);


const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });
  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
