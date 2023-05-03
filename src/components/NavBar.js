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
              <h3>LOGO</h3>
            <nav ref={navRef}>
              {/* <a href="/SignUp"> Sign Up </a>
              <a href="/SignIn"> Sign In </a>
              <a href="/Landing"> Landing </a> */}

              <Link to= "/SignUp"> Sign Up </Link>
              <Link to= "/SignIn"> Sign In </Link>
              <Link to= "/Landing"> Landing Page </Link>
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
          </header>

       
    </div>
  )
}



export default NavBar