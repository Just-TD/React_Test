import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const SignUpPatient = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let navigate = useNavigate()
 
  const Click = () => { 
    axios.post("http://localhost:2000/user/SignUpDoctors",{Name,Email,Password}).then((response) => { 
      console.log(response)
    }).catch((err) => { 
      console.log(err);
      console.log("An error occured!!!");
    })
    
    if(Name && Email && Password){ 
       navigate("/SignInPatient");
      console.log(Name,Email,Password);

    }else{ 
      alert("This field is required!!!");
    }
   
  }
  return (
    <div> 

        <div className="container-fluid text-center  allWrap"> 
                <h1 className='text-white'>Sign Up as a Patient</h1>
                <input onChange={(e) => setName(e.target.value) }  type="text" className="form-control mt-3 border-danger ink" placeholder=' Name' />
                <input onChange={(e) => setEmail(e.target.value) } type="text" className="form-control mt-3 border-danger ink " placeholder=' Email' />
                <input onChange={(e) => setPassword(e.target.value) } type="password" className="form-control mt-3 border-danger ink " placeholder=' Password' />
                <button onClick={Click} className="btnIn w-100  mt-3">Sign Up here</button>

                <div className="SignUpChance"> <span className='text-danger'>Don't have an account?</span> <span className='text-danger Lt3 '>Sign Up</span> </div>

        </div>

    </div>
  )
}

export default SignUpPatient