import React, {useState} from 'react'


import axios from "axios";


const DashboardDoctor = () => {

  const [PatientName, setPatientName] = useState("");
  const [KinName, setKinName] = useState("");
  const [Genotype, setGenotype] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [DateBirth, setDateBirth] = useState("");
 const [PatientDetails, setPatientDetails] = useState([]);

  const Create = () => { 

    axios.post("http://localhost:2000/user/patientDetails",{PatientName,KinName,DateBirth}).then((response) => { 
      console.log(response)
    }).catch((err) => { 
      console.log(err);
    })

    console.log(PatientName,KinName,Genotype,BloodGroup,DateBirth);
  }

  const getPatientDetails = () => { 
    axios.get("http://localhost:2000/user/patientDetails").then((response) => { 
    
      setPatientDetails(response.data)
      
      console.log(response.data)
    }).catch((err) => { 
      console.log(err);
    })
  }

    // axios.get("http://localhost:2000/user/SignUpDoctors").then((response) => { 
    //     console.log(response)
    // }).catch((err) => { 
    //     console.log(err);
    //     console.log("There was an error");
    // })
  return (
    <div> 
        <section className='allWrap'> 
              <h1 className='text-center text-white'> Doctors report.</h1>

             <div className="form-group mt-3"> 
             <label htmlFor="">Name:</label>
             <input onChange={(e) => setPatientName(e.target.value)}  type="text" className="form-control ink" placeholder='Patient Name' />

             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Next of Kin:</label>
              <input onChange={(e) => setKinName(e.target.value)} type="text" className="form-control ink " placeholder='Name of Next of Kin' />
            
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Genotype:</label>
             <select onChange={(e) => setGenotype(e.target.value)}   className='form-select form-control ink ' name="" id="">  
                <option selected > Your Genotype </option>
                <option value="1">AA</option>
                <option value="2">AS</option>
                <option value="3">SS</option>
                <option value="4">TT</option>
              </select>
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Blood group:</label>
                <select onChange={(e) => setBloodGroup(e.target.value)} className='form-select form-control ink ' name="" id="">  
                    <option selected > Blood group </option>
                    <option value="1">-A</option>
                    <option value="2">B</option>
                    <option value="3">AB</option>
                    <option value="4">O</option>
                    
                  </select>
               
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Date of birth:</label>
             <input onChange={(e) => setDateBirth(e.target.value)}  type="date" className="form-control   ink" />
             
             </div>

             <button  onClick={Create} className="btnIn">Create report</button>
             <button className='btnIn mt-5' onClick={getPatientDetails}> View Patient results here  </button>

             <h3 className='text-danger'> {PatientDetails.map((eachDetails) => ( 
              <> 
                <h1> Patient Name:{eachDetails.PatientName}</h1>
                <h1> Next of Kin:{eachDetails.KinName}</h1>
                <h1> Date of Birth:{eachDetails.DateBirth}</h1>
              
              </>
             ))} </h3>

             


        </section>
       
    </div>
  )
}

export default DashboardDoctor