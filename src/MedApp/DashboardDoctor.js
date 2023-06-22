import React, {useState} from 'react'


import axios from "axios";


const DashboardDoctor = () => {

  const [PatientName, setPatientName] = useState("");
  const [KinName, setKinName] = useState("");
  const [Genotype, setGenotype] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [DateBirth, setDateBirth] = useState("");

  const [newPatientName, setnewPatientName] = useState("");
  const [newKinName, setnewKinName] = useState("");
  const [newGenotype, setnewGenotype] = useState("");
  const [newBloodGroup, setnewBloodGroup] = useState("");
  const [newDateBirth, setnewDateBirth] = useState("");


 const [PatientDetails, setPatientDetails] = useState([]);
 const [idVariable, setidVariable] = useState("")

  const Create = () => { 

    axios.post("http://localhost:2000/user/PatientDetails",{PatientName,KinName,Genotype,BloodGroup,DateBirth}).then((response) => { 
      console.log(response)
    }).catch((err) => { 
      console.log(err);
    })

   
  }



  const SendUpdateDetails = (id) => { 
    axios.put("http://localhost:2000/user/updatePatientDetails",{newPatientName,newKinName,newGenotype,newBloodGroup,newDateBirth,id}).then((response)=> { 
      console.log(response)
    }).catch((err) => {
      console.log(err);
    })

   
    PatientDetails.map((eachItem) => { 
      axios.post("http://localhost:2000/user/updatePatientDetails",eachItem._id).then((response) => { 
        console.log(response)
      }).catch((err) => { 
        console.log(err);
      })
    })

  }

  

  const getPatientDetails = () => { 
    axios.get("http://localhost:2000/user/getPatientDetails").then((response) => { 
    
      setPatientDetails(response.data)
      
      console.log(response.data)
    }).catch((err) => { 
      console.log(err);
    })
  }

  const deleteDetails = (id) => { 
    
    console.log(id);
    axios.delete(`http://localhost:2000/user/deletePatientDetails/${id}`).then((response) => { 
      console.log(response)
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
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
                <option value="TT">TT</option>
              </select>
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Blood group:</label>
                <select onChange={(e) => setBloodGroup(e.target.value)} className='form-select form-control ink ' name="" id="">  
                    <option selected > Blood group </option>
                    <option value="-A">-A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                    
                  </select>
               
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Date of birth:</label>
             <input onChange={(e) => setDateBirth(e.target.value)}  type="date" className="form-control   ink" />
             
             </div>

             {PatientDetails.map((eachItem,index) => ( 
              <h2 className='text-white'> 
                  {index + 1}.PatientName: {eachItem.PatientName}, <br />
                  KinName:{eachItem.KinName}, <br />
                  Genotype:{eachItem.Genotype}, <br />
                  BloodGroup:{eachItem.BloodGroup}, <br />
                  {eachItem._id}
                  
                  <button onClick={() => deleteDetails(eachItem._id)} className="btn btn-danger">Delete</button>
    
              
            








































































         {/* Button trigger modal  */}

         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Edit details here
</button>

{/* <!-- Modal --> */}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body bg-dark">
      <div className="form-group mt-3"> 
             <label htmlFor="">Name:</label>
             <input onChange={(e) => setnewPatientName(e.target.value)}  type="text" className="form-control " placeholder='Patient Name' />

             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Next of Kin:</label>
              <input onChange={(e) => setnewKinName(e.target.value)} type="text" className="form-control  " placeholder='Name of Next of Kin' />
            
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Genotype:</label>
             <select onChange={(e) => setnewGenotype(e.target.value)}   className='form-select form-control  ' name="" id="">  
                <option selected > Your Genotype </option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
                <option value="TT">TT</option>
              </select>
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Blood group:</label>
                <select onChange={(e) => setnewBloodGroup(e.target.value)} className='form-select form-control  ' name="" id="">  
                    <option selected > Blood group </option>
                    <option value="-A">-A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                    
                  </select>
               
             
             </div>

             <div className="form-group mt-3"> 
             <label htmlFor="">Date of birth:</label>
             <input onChange={(e) => setnewDateBirth(e.target.value)}  type="date" className="form-control   " />
             
             </div>
        
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={() => SendUpdateDetails(eachItem._id)} type="button" class="btn btn-primary">Edit those details</button>
      </div>
    </div>
  </div>
</div>



















             
              </h2>
             ))}

<button  onClick={Create} className="btnIn">Create report</button>
             <button className='btnIn mt-5' onClick={getPatientDetails}> View Patient results here  </button>

             




           

 













































    
















        </section>
       
    </div>
  )
}

export default DashboardDoctor