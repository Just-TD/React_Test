import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PostBlog = () => {
  const [blogcontent, setblogContent] = useState("");
  const [blogtitle, setblogTitle] = useState("");

  let navigate = useNavigate();

  const postBlog = () => { 
    let blogitems = {blogtitle,blogcontent}
    console.log(blogitems);

    axios.post("http://localhost:2000/user/signup",blogitems).then((response) => { 
      console.log(response)
    }).catch((err) => { 
      console.log(err);
    })

    navigate("/DisplayBlog");

  }
  return (
    <div> 

        <div className="container-fluid text-center"> 
        <h3>Welcome to the Blog Page!!</h3>
        <input onChange={(e) => setblogTitle(e.target.value)}  type="text" className="form-control mt-3" placeholder='Blog Title' />
      
        <textarea onChange={(e) => setblogContent(e.target.value)} type = "text" placeholder='Publish your blog here' className='form-control mt-3'  cols="30" rows="10"> </textarea>
       
        <button type='submit' onClick={postBlog} className="btn btn-warning w-100 mt-3"> Post Blog</button>
      
        </div>
      
    </div>
  )
}

export default PostBlog