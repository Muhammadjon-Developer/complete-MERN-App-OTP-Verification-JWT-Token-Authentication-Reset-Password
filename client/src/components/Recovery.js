import React from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";

const Recovery = () => {
  return (
    <div className="container flex items-center justify-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold mt-2 py-2">Recovery</h4>
            <span className="py-3 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>

          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6 w-[350px]">
              <div className="input text-center">
                <span className="py-1 text-sm text-left text-gray-500 ">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="OTP"
                />
              </div>

              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP? <button className="text-red-500">Resent</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
