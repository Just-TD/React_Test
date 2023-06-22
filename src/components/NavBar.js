import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import {Link} from "react-router-dom";


const NavBar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  
  return (
    <div> 
     
      <header>
              <h3>Medicy</h3>
            <nav ref={navRef}>
             
              <Link to= "/SignUp"> Home </Link>
              <Link to= "/SignIn"> About </Link>
              <Link to= "/Landing"> Find Doctors </Link>
              <Link to= "/Landing"> Contact </Link>
                  <button
                      className="nav-btn nav-close-btn"
                      onClick={showNavbar}>
                      <FaTimes />
                  </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
            <div className="side"> 
            <button className=" nav-btn1 ">Sign Up</button>
            <button className="nav-btn1 ">Log in</button>
            
            </div>
          </header>

       
    </div>
  )
}



export default NavBar