import React from "react";
import { Link } from "react-router-dom";
import trafficLight from "../assets/images/trafficLight.jpg";

const Start = () => {
  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-start ">
      <div
        style={{ backgroundImage: `url(${trafficLight})` }}
        className="bg-cover  h-[80%] w-full flex p-4 "
      >
        <div className="w-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
        </div>
      </div>
      <div className="h-34 bg-white w-screen p-4 ">
        <h1 className="m-3 text-2xl ">Get Started With Uber</h1>
        <Link to="/login" className="bg-black text-white p-3 px-32 m-3 my-6">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
