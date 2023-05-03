import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div> 
        <div className="container-fluid shadow mt-5 p-5"> 
        <h3 className='w-100 fs-3 text-center'>Welcome to the My Blog Page feel free to navigate with the Menu bar</h3>
       
        <button className="btn btn-dark btn-lg w-100 mt-3"> <Link className='text-light text-decoration-none' to= "/SignUp"> Sign Up </Link> </button>
        <button className="btn btn-warning btn-lg w-100 mt-3"> <Link className='text-dark text-decoration-none' to= "/SignIn"> Sign In </Link> </button>
        <button className="btn btn-info btn-lg w-100 mt-3"> <Link className='text-dark text-decoration-none' to = "/PostBlog"> Add a Blog </Link> </button>


        
        </div>
    </div>
  )
}

export default Landing