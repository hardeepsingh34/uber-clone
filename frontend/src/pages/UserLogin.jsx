import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { Field, useFormik, Formik } from "formik";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  let userSchema = object({
    email: string().email().required(),
    password: string().min(6).required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      setUser(values);
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/user/login`, values)
        .then((response) => {
          if (response.status === 200) {
            setUser(user);
            localStorage.setItem("token", response.data.token);
            console.log(values);
            console.log(response.data);
            // Redirect to home page after successful login
            navigate("/home");
          }
        });
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
            <form action="/login" method="post">
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
                value="Login"
                name="login"
                onClick={formik.handleSubmit}
                className="bg-black w-full text-white flex justify-center py-2 mt-7 rounded-sm"
              />
            </form>
          </Formik>
          <div className="flex justify-center items-center mt-4">
            <h3 className="text-sm">
              New here?{" "}
              <Link to="/signup" className="text-blue-500">
                Create New Account
              </Link>
            </h3>
          </div>
        </div>
        <Link
          to="/captain/login"
          className="bg-emerald-400 py-2 flex justify-center rounded-sm mb-7 text-white"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
