import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import convertToBase64 from '../helper/convert';

const Register = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "oybek111#4@gmail.com",
      username: "oybek",
      password: "full@",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center w-full">
        <div className={`${styles.glass} p-6 w-full max-w-sm bg-white shadow-lg rounded-lg`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold mt-2">Register</h4>
            <span className="py-2 text-lg w-2/3 text-center text-gray-500">
              Happy to join you.
            </span>
          </div>

          <form className="py-4" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={file || avatar} className={`${styles.profile_img} w-20 h-20 object-cover max-w-full max-h-full rounded-full border-2 border-gray-300`} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" className="hidden" />
            </div>

            <div className="textbox flex flex-col items-center gap-4">
              <input
                {...formik.getFieldProps("email")}
                className={`${styles.textbox} w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={`${styles.textbox} w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password")}
                className={`${styles.textbox} w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="password"
                placeholder="Password"
              />
              <button className={`${styles.btn} w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600`} type="submit">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registered?{" "}
                <Link className="text-red-500 hover:underline" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
