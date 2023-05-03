import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allDetails, setallDetails] = useState([]);

   

    const postreq = () => { 

        let userDetails = { 
            firstname,lastname,email,password
        }

        axios.post("http://localhost:2000/user/postIn",userDetails).then((response) => { 
            console.log(response)
        }).catch((err) => { 
            console.log(err);
        })

        
        console.log(firstname,lastname,email,password);
    }

    const deleteSignUp = () => { 
        axios.get("http://localhost:2000/user/postIn").then((response)=> { 
            setallDetails(response.data)
            console.log(response.data);
        }).catch((err) => { 
            console.log(err);
        })

        allDetails.map((eachDetails) => ( 
            axios.post("http://localhost:2000/user/postIn",eachDetails._id).then((response) => { 
                console.log(response);
            }).catch((err) => { 
                console.log(err);
            })

        ))
       
    }

    // const cancelSignUp = () => { 
    //     axios.post("http://localhost:2000/user/postIn",userDetails).then((response) => { 
    //         console.log(response)
    //     }).catch((err) => { 
    //         console.log(err);
    //     })
        
    // }
  return (
    <> 
       

        <div className="container-fluid"> 
            <input onChange={(e) => setfirstname(e.target.value)}  placeholder='Input firstname here' type="text" className="form-control mt-3 w-50" />
            <input onChange={(e) => setlastname(e.target.value)} placeholder='Input lastname here' type="text" className="form-control mt-3 w-50" />
            <input onChange={(e) => setemail(e.target.value)} placeholder='Input email here' type="email" className="form-control mt-3 w-50" />
            <input onChange={(e) => setpassword(e.target.value)} placeholder='Input password here' type="password" className="form-control mt-3 w-50" />
            <button onClick={postreq}  type='submit' className="btn btn-info mt-4">Submit</button>
            <button onClick={ deleteSignUp} className="btn btn-secondary btn-lg">Delete Sign Up details here</button>
        
        </div>
        
       
       
        
    </>
  )
}

export default SignUp