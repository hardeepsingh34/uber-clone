import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { useContext } from "react";
import { Field, useFormik, Formik } from "formik";
import captainLogo from "../assets/images/captainlogo.svg";
import { CaptainDataContext  } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
  let captainSchema = object({
    fullname: object({
      firstname: string().required(),
      lastname: string().required(),
    }),
    email: string().email().required(),
    password: string().min(6).required(),
    vehicle: object({
      color: string().required(),
      plate: string().required(),
      vehicleType: string().required(),
      capacity: string().required(),
    }),
  });

  const formik = useFormik({
    initialValues: {
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
        vehicle: {
            color: "",
            plate: "",
            vehicleType: "",
            capacity: "",
        },
    },
    validationSchema: captainSchema,
    onSubmit: async (values) => {
      setCaptain(values);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/registor`,
        values
      );
      if (response.status === 200) {
        setCaptain(values);
        localStorage.setItem("CaptainToken", response.data.token);
        console.log(captain);
        // Redirect to home page after successful signup
        navigate("/captain/home");
      }else{
        alert("Captain already exists");
      }
      // Handle login logic here
    },
  });

  return (
    <div>
      <div className=" h-screen flex flex-col  justify-between p-5">
        <div>
          <div className="w-20 mb-2">
            <img src={captainLogo} alt="" />
          </div>
          <Formik>
            <form action="/captain/signup" method="post" >
              <h3 className="m-2">what's your name</h3>
              <div className="flex gap-2">
                <Field
                  required
                  type="text"
                  name="fullname.firstname"
                  value={formik.values.fullname.firstname}
                  onChange={formik.handleChange}
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="Firstname"
                />
                <Field
                  required
                  type="text"
                  name="fullname.lastname"
                  value={formik.values.fullname.lastname}
                  onChange={formik.handleChange}
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="Lastname"
                />
              </div>

              <h3 className="m-2">what's your email</h3>
              <Field
                required
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                placeholder="email@example.com"
              />

              <h3 className="m-2 mt-7">Enter Password </h3>
              <Field
                required
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                placeholder="Password"
              />
              
                <h3 className="m-2">vehicle Information</h3>
              <div className="flex gap-2">
                <Field
                  required
                  type="text"
                  name="vehicle.color"
                  value={formik.values.vehicle.color}
                  onChange={formik.handleChange}
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="Color"
                />
                 <Field
                  required
                  type="text"
                  name="vehicle.plate"
                  value={formik.values.vehicle.plate}
                  onChange={formik.handleChange}
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="Number Plate"
                />
              </div>
               <div className="flex gap-2 mt-2">
                <Field
                  required
                  type="text"
                  name="vehicle.capacity"
                  value={formik.values.vehicle.capacity}
                  onChange={formik.handleChange}
                  
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="capacity"
                />            
                <Field
                  required
                  as="select"
                  name="vehicle.vehicleType"
                  value={formik.values.vehicle.vehicleType}
                  onChange={formik.handleChange}
                  className="bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2"
                  placeholder="Lastname"
                >   <option value="" disabled>Select Vehicle Type</option>
                    <option value="car">Car</option>   
                    <option value="bike">Bike</option>
                    <option value="auto">Auto</option>
                </Field>
              </div>
              <Field
                type="submit"
                value="Create Captain Account"  
                name="signup"
                onClick={formik.handleSubmit}
                className="bg-black w-full text-white flex justify-center py-2 mt-7 rounded-sm"
              />
            </form>
          </Formik>
          <div className="flex justify-center items-center mt-4">
            <h3 className="text-sm">
              Already have a Account?{" "}
              <Link to="/captain/login" className="text-blue-500">
                Login here
              </Link>
            </h3>
          </div>
        </div>
        <h5 className="text-[10px]">
          When you use Uber, you trust us with your personal data. We’re
          committed to keeping that trust. That starts with helping you
          understand our privacy practices.
        </h5>
      </div>
    </div>
  );
};

export default CaptainSignup;
