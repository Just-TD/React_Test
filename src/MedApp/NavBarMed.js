import React, { useState } from 'react';
import 'animate.css';


import "./NavBarMed.css";



const NavBarMed = () => {
    const [clicked, setclicked] = useState(true);
    const handleClick = () => { 
        setclicked(!clicked);

    }
   
  return (
    <div> 
        <header> 
            {/* <nav> 
                <a className='brand_Logo' href="">
                
                    <img src="ONELITE_logo.png" alt="Image" /> 
             
                
                </a>

                <div className='moveClass'> 
                    <ul id='navbar' className= {clicked ? '#navbar active' : "#navbar"}>  
                        <li><a href="index.html"> Home </a></li>
                        <li><a href="index.html"> About </a></li>
                        <li><a href="index.html"> Contact us </a></li>
                        <li><a href="index.html"> Profile </a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}> 
                <i id='bar' className= {clicked ? 'fa fa-times' : 'fa fa-bars'}>  </i>
                    
                
                </div>
            </nav> */}

        </header>


      

        <nav className="navbar navbar-dark  fixed-top topNav">

      

  <div className="container-fluid">

  <a className='brand_Logo' href="">   <img src="ONELITE_logo.png" alt="Image" /> </a>

  <div className='moveClass'> 
                    <ul id='navbar' >  
                        <li><a href="index.html"> Home </a></li>
                        <li><a href="index.html"> About </a></li>
                        <li><a href="index.html"> Contact us </a></li>
                        <li><a href="index.html"> Profile </a></li>
                    </ul>
                </div>
                
    <button className="navbar-toggler menubar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>


  

    <div className="offcanvas offcanvas-end  overlay_Menu" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Explore our options</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About Longrich</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Sign Up Newsletter</a>
          </li>


        </ul>
       
      </div>
    </div>
  </div>

  
</nav>



    </div>
  )
}

export default NavBarMed