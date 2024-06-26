import React from "react";
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {resetPasswordValidation} from '../helper/validate'



const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: "full@",
      confirm_pwd: "full@"
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  }) 

  return (
    <div className="container flex items-center justify-center mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass}>

        <div className="title flex flex-col items-center">
          <h4 className='text-4xl font-bold mt-2'>Reset</h4>
          <span className='py-3 text-xl w-2/3 text-center text-gray-500'>
            Enter new password.
          </span>
        </div>

        <form className='py-20' onSubmit={formik.handleSubmit}>

            <div className="textbox flex flex-col items-center gap-6 w-[350px]">
                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
                <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="text" placeholder='Repeat Password' />
                <button className={styles.btn} type='submit'>Reset</button>
            </div>

        </form>

      </div>
    </div>
  </div>
  );
};

export default Reset;
