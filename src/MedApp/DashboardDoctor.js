import React from 'react'

import axios from "axios";


const DashboardDoctor = () => {
    axios.get("http://localhost:2000/user/SignUpDoctors").then((response) => { 
        console.log(response)
    }).catch((err) => { 
        console.log(err);
        console.log("There was an error");
    })
  return (
    <div> 
        <section className='allWrap'> 
              <h1 className='text-center text-white'> Doctors report.</h1>

             <div className="form-group mt-3"> 
             <label htmlFor="">Name:</label>
             <input type="text" className="form-control ink" placeholder='Name' />

             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Next of Kin:</label>
              <input type="text" className="form-control ink " placeholder='Next of Kin' />
            
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Genotype:</label>
             <select  className='form-select form-control ink ' name="" id="">  
                <option selected > Your Genotype </option>
                <option value="1">AA</option>
                <option value="2">AS</option>
                <option value="3">SS</option>
                <option value="4">TT</option>
              </select>
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Blood group:</label>
                <select className='form-select form-control ink ' name="" id="">  
                    <option selected > Blood group </option>
                    <option value="1">-A</option>
                    <option value="2">B</option>
                    <option value="3">AB</option>
                    <option value="4">O</option>
                    
                  </select>
               
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Date of birth:</label>
             <input type="date" className="form-control   ink" />
             
             </div>

             <button className="btnIn">Create report</button>

             


        </section>
       
    </div>
  )
}

export default DashboardDoctor