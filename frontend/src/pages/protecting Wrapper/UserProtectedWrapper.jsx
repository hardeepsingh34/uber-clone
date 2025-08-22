import axios from "axios";
import React from "react";
import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext";


const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // If no token, redirect to login page
      navigate("/login");
    }
  });
  axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((response) => {
    if (response.status === 200) {
      // If the response is not OK, redirect to login page
      setUser(response.data.user)
      setLoading(false);
      console.log(user);
    }
  })
  .catch((error) => {
    // Handle error, e.g., token expired or invalid
    console.error("Error fetching user profile:", error);
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }
  );
  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching user data
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
