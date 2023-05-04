import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";



const SignInPatient = () => {
    let navigate = useNavigate();
  const [display, setdisplay] = useState("");

    const [EmailIn, setEmailIn] = useState("");
    const [PasswordIn, setPasswordIn] = useState("");

    const [allItems, setallItems] = useState([]);
   

    const validateButton = () => { 
        axios.post("http://localhost:2000/user/signIn", {EmailIn,PasswordIn}).then((response) => { 
            console.log(response.data);
            if(response.data.status){ 
                navigate("/DashboardDoctor");
            }else{ 
                setdisplay(response.data.message)
            }
        }).catch((err) => { 
            console.log(err);
        })



        // axios.get("http://localhost:2000/user/SignUpDoctors").then((response) => { 
        //     console.log(response.data)
        //     setallItems(response.data)
        // })
      
        // allItems.map((eachItem) => { 
        //     console.log(eachItem.Email,eachItem.Password);

        //     if(NameIn == eachItem.Name  && EmailIn == eachItem.Email && PasswordIn == eachItem.Password  ){ 
        //         // navigate("/DashboardPatient");
               
               
        //     }else{ 
        //        alert("Wrong details inputed!!");
        //     }
            
        // })
    }



  

  return (
    <div> 
        <div className="containerAll "> 
    
            <h3 className='text-white text-center'> Sign In as a Patient</h3>

           <div className="text-danger text-center">{display}</div>
            
            <input onChange={(e) => setEmailIn(e.target.value)} type="text" className="form-control mt-3   ink" placeholder='Email' /> 
            
            <input onChange={(e) => setPasswordIn(e.target.value)} type="password" className="form-control mt-3 ink " placeholder='Password' />
            <button onClick={validateButton} className="btnIn">Sign In</button>
            <ul> 
                <li className='text-danger'>Don't have an account</li>
                <li className='text-danger'>Sign up</li>
            </ul>
             
        </div>
        

    </div>
  )
}

export default SignInPatient