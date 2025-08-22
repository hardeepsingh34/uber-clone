import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Field, useFormik, Formik } from "formik";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";

const UserSignup = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  let userSchema = object({
    fullname: object({
      firstname: string().required(),
      lastname: string().required(),
    }),
    email: string().email().required(),
    password: string().min(6).required(),
  });

  const formik = useFormik({
    initialValues: {
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      setUser(values);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/registor`,
        values
      );
      if (response.status === 200) {
        setUser(user);
        localStorage.setItem("token", response.data.token);
        console.log(values);
        alert("User created successfully");
        // Redirect to home page after successful signup
        navigate("/home");
      }
      // Handle login logic here
    },
  });

  return (
    <div>
      <div className=" h-screen flex flex-col  justify-between p-5">
        <div>
          <div className="w-16 mb-7">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
              alt=""
            />
          </div>
          <Formik>
            <form action="/signup" method="post">
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

              <Field
                type="submit"
                value="Create User Account"
                name="signup"
                onClick={formik.handleSubmit}
                className="bg-black w-full text-white flex justify-center py-2 mt-7 rounded-sm"
              />
            </form>
          </Formik>
          <div className="flex justify-center items-center mt-4">
            <h3 className="text-sm">
              Already have a Account?{" "}
              <Link to="/login" className="text-blue-500">
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

export default UserSignup;
