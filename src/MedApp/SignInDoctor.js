import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignInDoctor = () => {
  let navigate = useNavigate();

    const [EmailIn, setEmailIn] = useState("");
    const [PasswordIn, setPasswordIn] = useState("");
    const [allItems, setallItems] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");

    const confirmButton = () => {
     
        axios.post("http://localhost:2000/user/signInDoctor",{EmailIn,PasswordIn}).then((response) => { 
            console.log(response.data)
            if(response.data.status) { 
              navigate("/DashboardDoctor") 
            
            }else{ 
              seterrorMessage(response.data.message);
            }
            
        })
      
    }

  return (
    <div> 
          <div className="containerAll "> 
    
        <h3 className='text-white'> Sign In as a Doctor</h3>
        <div className='text-danger text-center '> { errorMessage } </div>
        <input onChange={(e) => setEmailIn(e.target.value)} type="text" className="form-control mt-3" placeholder='Email' /> 
        <input onChange={(e) => setPasswordIn(e.target.value)} type="text" className="form-control mt-3" placeholder='Password' />
        <button onClick={confirmButton} className="btnIn">Sign In</button>
        <div className="SignUpChance"> <span className='text-danger'>Don't have an account?</span> <span className='text-danger Lt3 '>Sign Up</span> </div>

    </div>
    </div>
  )
}

export default SignInDoctor