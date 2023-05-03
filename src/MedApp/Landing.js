import React from 'react'
import { Link } from "react-router-dom";

const Landing = () => {
  


  return (
    <div> 
            <div className="container-fluid text-center"> 
                <h1 className='text-center fs-1 mt-4'> Welcome to The Landing page for the MED App</h1>

               

                <Link to= "/SignUpDoc"> <button className="btn btn-info btn-lg mt-4 w-100">   Sign Up as  Doctor</button> </Link>

               
                <Link to= "/SignUpPatient">  <button className="btn btn-dark btn-lg mt-4 w-100">Sign Up as  Patient</button> </Link>
            </div>
       
    </div>
  )
}

export default Landing