import React from 'react';
import {useFormik} from 'formik';
import * as yup from "yup";
import axios  from 'axios';

const SignThis = () => {
    const formik = useFormik({ 
        initialValues : { 
            firstName: "Temidola",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit : (values) => { 
            console.log(values);
            axios.post("http://localhost:2000/user/postIn",values).then((response) => { 
                console.log(response);

            }).catch((err) => { 
                // console.log(err);
            })
            // You can store your items in the Local Storage here!!

        },
        validationSchema : yup.object({ 
            firstName : yup.string().required("This field is required!!"),
            lastName : yup.string().required("This field is required!!"),
            email : yup.string().required("This field is required!!"),
            password : yup.string().required("This field is required!!"),
        })
    })   

    

    // console.log(formik.values);
  return (
    <div> 
        <div className="container-fluid  shadow p-3 "> 

                <form action="" onSubmit={formik.handleSubmit}> 

                <h1 className='text-center'>Sign Up Page</h1>

                <input 
                 type="text"
                 className="form-control mt-3" 
                 placeholder='First Name' 
                 name='firstName'
                 onChange={formik.handleChange}
                 value = {formik.values.firstName}
                 onBlur = {formik.handleBlur}
                />
                <div className='text-danger'> { formik.touched.firstName && formik.errors.firstName} </div>

                <input 
                type="text"
                className="form-control mt-3" 
                placeholder='Last Name' 
                name='lastName'
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}

                />
                  <div className='text-danger'> {  formik.touched.lastName &&formik.errors.lastName} </div>
                

                <input 
                type="text"  
                className="form-control mt-3" 
                placeholder='Email' 
                name='email'
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                 />
                   <div className='text-danger'> { formik.touched.email && formik.errors.email} </div>

                <input 
                type="password" 
                className="form-control mt-3" 
                placeholder='Password' 
                name='password'
                onChange={formik.handleChange}
                onBlur = {formik.handleBlur}
                />
                  <div className='text-danger'> { formik.touched.password && formik.errors.password} </div>
                <button type='submit' className="btn btn-dark mt-3">Sign This</button>

                </form>
        
        
        </div>
      
    </div>
  )
}

export default SignThis