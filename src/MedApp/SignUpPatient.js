import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";


const SignUpPatient = () => {
  const formik = useFormik({ 
    initialValues : { Name : "", Email : "", Password : "" },
    onSubmit : (values) => { 
      console.log(values);
      
      axios.post("http://localhost:2000/user/signUpPatient",values).then((response) => { 
        console.log(response)
      }).catch((err) => { 
        console.log(err);
      });

      navigate("/SignInPatient");

    },
    validationSchema : yup.object({ 
      Name : yup.string().required("This field is required!!!"),
      Email : yup.string().required("This field is required!!!").email("Please enter a valid email"),
      Password : yup.string().required("This field is required!!!").min(3,"Password should be a minimum of 3 characters!!")
    })
  })
  
  let navigate = useNavigate()
 
 
  return (
    <div> 

        <div className="container-fluid text-center  allWrap"> 
                <h1 className='text-white'>Sign Up as a Patient</h1>
                <form onSubmit={formik.handleSubmit} action=""> 

                    <input value={formik.values.Name} onChange = {formik.handleChange} onBlur = {formik.handleBlur}   type="text" className={formik.touched.Name && formik.errors.Name ? "form-control my-2 is-invalid ink ": "form-control my-2 "} placeholder=' Name' name='Name' />
                    <div className="text-danger float-left mt-3"> {formik.touched.Name && formik.errors.Name} </div>

                    <input value={formik.values.Email}  onChange = {formik.handleChange} onBlur = {formik.handleBlur}  type="text" className= {formik.touched.Email && formik.errors.Email ? "form-control my-2 is-invalid ink":"form-control my-2 "} placeholder=' Email' name='Email' />
                    <div className="text-danger float-left mt-3"> {formik.touched.Email && formik.errors.Email} </div>

                    <input value={formik.values.Password} onChange = {formik.handleChange} onBlur = {formik.handleBlur} type="password" className= {formik.touched.Password && formik.errors.Password ? "form-control my-2 is-invalid ink": "form-control my-2 "} placeholder=' Password' name='Password' />
                    <div className="text-danger float-left mt-3"> {formik.touched.Password && formik.errors.Password} </div>
                    <button type='submit'  onChange  className="btnIn w-100  mt-3">Sign Up here</button>
                
                </form>
              

               

        </div>

    </div>
  )
}

export default SignUpPatient