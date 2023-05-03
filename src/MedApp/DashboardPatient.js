import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const DashboardPatient = () => {
    const [allDetails, setallDetails] = useState([]);
    axios.get("http://localhost:2000/user/SignUpDoctors").then((response) => { 
        setallDetails(response.data);
    }).catch((err) => { 
        console.log(err);
    })

    const deleteItems = (id_Details) => { 
      console.log(id_Details);

      axios.post("http://localhost:2000/user/delete", {id_Details}).then((response) => { 
        console.log(response)
      }).catch((err) => { 
        console.log(err);
      })
    

    }

  return (
    <div> 
        { 
        
            <h1> {allDetails.map((eachItem,index) => ( 
              
              <div className='bg-dark tex-white text-center p-4 fs-1'> 
                 <h5 className='text-white fs-1'>Welcome to the Dashboard Doctor: {eachItem.Name} </h5>
                 <h6 className='text-white'>Use your Email: {eachItem.Email} to log out </h6>
            
    
               </div>

            ))} </h1>
        
        }

       
    </div>
  )
}

export default DashboardPatient