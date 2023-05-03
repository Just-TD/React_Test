import React, { useState } from 'react'
import axios, { all } from 'axios'

const DisplayBlog = () => {
  const [allArray, setallArray] = useState([]);
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");

    axios.get("http://localhost:2000/user/signup").then((response) => { 
      setallArray(response.data);
    }).catch((err) => { 
      console.log(err);
    })

    const justTry = () => { 
      console.log(allArray);
    }

    // const deleteBtn = (userIndex) => { 
    //   let newallArray = [...allArray]
    //   newallArray.splice(userIndex,1);
    //   setallArray(newallArray);
    // }

    // const editBtn = (userIndex) => { 
    //   let newallThings = [...allArray];
    //   newallThings.splice(userIndex,2,editTitle,editContent);
    //   setallArray(newallThings);
    // }

   const deleteBtn = () => { 

    allArray.map((eachItem) => { 
      axios.post("http://localhost:2000/user/delete",eachItem._id).then((response) => { 
        console.log(response)
      }).catch((err) => { 
        console.log(err);
      })

    
    })


   
   }

   

  
  return (
    <div> 
      <button onClick={justTry} className="btn btn-dark">Quick try</button>
        <h1>Welcome to the Blog page!!!</h1>
        {allArray.map((eachArray,index) => ( 
          <h2 className='shadow bg-dark text-white p-3  text-center'> 
           Title: {eachArray.blogtitle} <br />
           Content: {eachArray.blogcontent} 
             
          

            <button onClick={deleteBtn}  className="btn btn-danger ms-4">Delete</button>

            

            

          
          

           {/* <!-- Button trigger modal --> */}
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Edit
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Input your edited article here!!!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <input onChange={(e) => seteditTitle(e.target.value)} type="text" className="form-control mt-3" placeholder='Blog Title' />
                    <textarea onChange={(e) => seteditContent(e.target.value)} className='form-control mt-3' placeholder='Blog Content' name=""  cols="30" rows="10"></textarea>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>





          
           
          
          </h2>
        ))}

      



      


        
      
      
    </div>
  )
}

export default DisplayBlog