import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";



const SignInPatient = () => {
    let navigate = useNavigate();

    const [EmailIn, setEmailIn] = useState("");
    const [PasswordIn, setPasswordIn] = useState("");
    const [allItems, setallItems] = useState([]);

    const getPost = () => { 
        axios.post("http://localhost:2000/user/signIn", {EmailIn,PasswordIn}).then((response) => { 
            console.log(response);
        }).catch((err) => { 
            console.log(err);
        })
        
    }




    const validateButton = () => { 

        axios.get("http://localhost:2000/user/SignUpDoctors").then((response) => { 
            console.log(response.data)
            setallItems(response.data)
        })
      
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
    
        <button  className="btn btn-info">Click to get Sign up deatails</button>
        <button onClick={getPost} className="btn btn-danger">Click to post Sign In details</button>
            <h3 className='text-white text-center'> Sign In as a Patient</h3>
            
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