import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

const Register = () => {
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
      console.log(values);
    },
  });

  return (
    <div className="container flex items-center justify-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width:"45%"}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold mt-2">Register</h4>
            <span className="py-3 text-xl w-2/3 text-center text-gray-500">
              Happy to join you.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-7">
              <label htmlFor="profile">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
              </label>

              <input type="file" id="profile" name="profile"/>
            </div>

            <div className="textbox flex flex-col items-center gap-6 w-[350px]">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Alredy Registered ?{" "}
                <Link className="text-red-500" to="/">
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
