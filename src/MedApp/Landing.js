import React from 'react'
import { Link } from "react-router-dom";
import 'animate.css';
const Landing = () => {
  


  return (
        <> 
          <article className='landingDetails '> 
            <div className="landingImg "><img className='Landing_Image' src="landing_img.png" alt="Image" /></div>

            <div className="landing_tagline  ">Step into your Elite Mode and uncover a World of possibilities.</div>

            <div className="extradetailsLanding text-white mt-3">Build a beautiful, modern Website  with flexible Bootstrap  components  built from scratch</div>

            <button className="btn btn-primary mt-3">View All pages</button> <button className="btn btn-outline-primary mt-4">Documentations</button>
            
           
















 <p>FAQ</p>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How do I join
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Is there an entry fee?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>










           

          </article>

        
<div>  
  <div class="row d-flex justify-content-center mt-3  bg-light text-dark border-round ">
    <div class="col-8   temi_touch shadow p-4"> 
  
     <div className="temi2"> <img className='TemiImg' src="Temi_1.jpeg" alt="Image" /> </div> 
     <div className="temi3">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
     
    </div>
  
    <div class="col-8   temi_touch shadow p-4 mt-4"> 
   
     <div className="temi2"> <img className='TemiImg' src="Temi_1.jpeg" alt="Image" /> </div> 
     <div className="temi3">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
     
    </div>
  
    <div class="col-8   temi_touch shadow p-4 mt-4"> 
    
     <div className="temi2"> <img className='TemiImg' src="Temi_1.jpeg" alt="Image" /> </div> 
     <div className="temi3">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
     
    </div>
  
    <div class="col-8   temi_touch shadow p-4 mt-4"> 
   
     <div className="temi2"> <img className='TemiImg' src="Temi_1.jpeg" alt="Image" /> </div> 
     <div className="temi3">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
     
    </div>
  






  
  </div>
  <div class="row d-flex justify-content-center mt-3 bg-light text-dark border-round">
    <div class="col-9     shadow p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nulla voluptas velit veritatis dolore itaque.</div>
   
  </div>
  <div class="row d-flex justify-content-center mt-3 bg-light text-dark border-round">
    <div class="col-9   shadow p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nulla voluptas velit veritatis dolore itaque.</div>
   
  </div>
  <div class="row d-flex justify-content-center mt-3 bg-light text-dark border-round">
    <div class="col-9   shadow p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nulla voluptas velit veritatis dolore itaque.</div>
   
  </div>


</div>



          {/* <h4 className="animate__animated animate__fadeInLeft">Hello world</h4> */}
                
          
        </>
  )
}

export default Landing