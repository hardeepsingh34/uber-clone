import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
const CaptainProtectedWrapper = ({children}) => {
    const [captain, setCaptain] = useState(CaptainDataContext);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("CaptainToken")) {
            // If no token, redirect to captain login page
            navigate("/captain/login");
        }
    });
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("CaptainToken")}`,
        },      
    })
    .then((response) => {
        if (response.status === 200) {
            // If the response is not OK, redirect to captain login page
            setCaptain(response.data.captain);
            setLoading(false);
            console.log(captain);
        }   
    })
    .catch((error)=>{
            console.log(error);
            localStorage.removeItem("CaptainToken");
            navigate('/captain/login');
        })
       if(loading){
        return(
            <div>loading...</div>
        )
       }

  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrapper