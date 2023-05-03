import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UseState } from 'react';

const SignUpDoctor = () => {
    let navigate = useNavigate();
    
    const formik = useFormik({ 
        initialValues : { 
            Name : "",
            Email : "",
            Password : "",
        },
        onSubmit : (values) => { 
            console.log(values);
            axios.post("http://localhost:2000/user/SignUpDoctors",values).then((response) => { 
                console.log(response);
            }).catch((err) => { 
                console.log(err);
            });
            navigate("/SignInDoctor");
            
        },
            
        validationSchema : yup.object({ 
            Name : yup.string().required("This field is required!!!"),
            Email : yup.string().required("This field is required!!!").email("Please enter a Valid email Adress"),
            Password : yup.string().required("This field is required!!!").min(3,"Password must be greater than 3 Characters"),
        })
        
        
    })
   
    
   
  return (
    <div> 
        <form onSubmit={formik.handleSubmit} action="">  
            <div className="container-fluid text-center  shadow  allWrap "> 
                    <h1 className='text-white'>Sign up as a Doctor</h1>
                    
                    <input value={formik.values.Name} onBlur={formik.handleBlur} onChange={formik.handleChange}   type="text" className= {formik.touched.Name && formik.errors.Name ? "form-control my-2 is-invalid" : "form-control my-2 mt-4 "} placeholder=' Name' name='Name' />

                    <div className="text-danger float-left mt-3"> {formik.touched.Name && formik.errors.Name} </div>
                   
                    <input value={formik.values.Email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className= {formik.touched.Email && formik.errors.Email ? "form-control my-2 is-invalid" : "form-control my-2 mt-2"} placeholder=' Email' name='Email' />
                    <div className="text-danger float-left mt-3"> {formik.touched.Email && formik.errors.Email} </div>

                    <input value={formik.values.Password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className= {formik.touched.Password && formik.errors.Password ? "form-control my-2 is-invalid" : "form-control my-2"} placeholder=' Password' name='Password' />
                    <div className="text-danger float-left mt-3"> {formik.touched.Password && formik.errors.Password} </div>

                    <button   type='submit' className="btnIn  w-100  mt-3">Sign Up here</button>

                    <div className="SignUpChance"> <span className='text-danger'>Don't have an account?</span> <span className='text-danger Lt3 '>Sign Up</span> </div>
                
            </div>
        
        </form>
          
    </div>
  )
}

export default SignUpDoctor