import React, {useState} from 'react'


import axios from "axios";


const DashboardDoctor = () => {

  const [PatientName, setPatientName] = useState("");
  const [KinName, setKinName] = useState("");
  const [Genotype, setGenotype] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [DateBirth, setDateBirth] = useState("");
 const [PatientDetails, setPatientDetails] = useState([]);
 const [idVariable, setidVariable] = useState("")

  const Create = () => { 

    axios.post("http://localhost:2000/user/PatientDetails",{PatientName,KinName,Genotype,BloodGroup,DateBirth}).then((response) => { 
      console.log(response)
    }).catch((err) => { 
      console.log(err);
    })

   
  }



  const SendUpdateDetails = () => { 
    axios.post("http://localhost:2000/user/updatePatientDetails",{PatientName,KinName,Genotype,BloodGroup,DateBirth}).then((response)=> { 
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
    axios.get("http://localhost:2000/user/updatePatientDetails").then((response) => { 
    
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

      {PatientDetails.map((eachDetails,index) => { 
        return ( 
          <> 
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Update Patient Details
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-danger " id="exampleModalLongTitle">Edit Patient Details here</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      {/* Modal Body */}
                      <div class="modal-body ink">
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
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={SendUpdateDetails} type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
             

                {/* <h1> Patient Name:{eachDetails.PatientName}</h1>
                <h1> Next of Kin:{eachDetails.KinName}</h1>
                <h1> Date of Birth:{eachDetails.DateBirth}</h1> */}


                            
<table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Next of Kin</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Update Patient Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> {eachDetails.PatientName} </td>
      <td> {eachDetails.KinName} </td>
      <td>{eachDetails.DateBirth}</td>
      <td>{eachDetails._id}</td>
      <td><button className='btnIn'>Update Information</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


          </>
        )
      })}
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

             <button  onClick={Create} className="btnIn">Create report</button>
             <button className='btnIn mt-5' onClick={getPatientDetails}> View Patient results here  </button>



           

 

        </section>
       
    </div>
  )
}

export default DashboardDoctor