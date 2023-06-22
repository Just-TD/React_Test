import axios from "axios";

import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import  {Routes,Route, Navigate, Form } from 'react-router-dom';
import SignThis from "./components/SignThis";
import PostBlog from "./components/PostBlog";
import DisplayBlog from "./components/DisplayBlog";
import Home from "./components/Home";
import Landing from "./MedApp/Landing";
import SignUpDoctor from "./MedApp/SignUpDoctor";
import SignUpPatient from "./MedApp/SignUpPatient";
import DashboardDoctor from "./MedApp/DashboardDoctor";
import DashboardPatient from "./MedApp/DashboardPatient";

import {motion} from "framer-motion";
import SignInPatient from "./MedApp/SignInPatient";

import SignInDoctor from "./MedApp/SignInDoctor";
import NavBarMed from "./MedApp/NavBarMed";




function App() {
  const getDetails = () => { 
    axios.get("http://localhost:2000/user/signup").then((response) => { 
      console.log(response)
    }).catch((err) => { 
       console.log(err);
    });
  }
  return (
    <>
    <NavBarMed/>
    <Landing/>
    
     
      

{/*     
    <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.button animate = {{ y:100}}> Click to Animate </motion.button>
      <motion.div animate = {{y:100}} transition = {{duration: 1}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium velit ab nesciunt est voluptates. Ratione iusto recusandae voluptatum tenetur aspernatur distinctio nesciunt, molestiae explicabo magni dolorum hic dolor nihil officiis inventore alias optio at excepturi doloremque ex vero? </motion.div>
      <motion.div animate = {{y:100}} transition = {{duration: 1}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium velit ab nesciunt est voluptates. Ratione iusto recusandae voluptatum tenetur aspernatur distinctio nesciunt, molestiae explicabo magni dolorum hic dolor nihil officiis inventore alias optio at excepturi doloremque ex vero? </motion.div>  */}

      
    
     

      <Routes> 
       <Route path="/SignUp" element = {<SignUp/>}/>
       
       <Route path="/home" element = {<Home/>}/>

       <Route path="/SignUpDoc" element = {<SignUpDoctor/>}/>

       <Route path="/landing" element = {<Landing/>}/>

       <Route path="/SignUpPatient" element = {<SignUpPatient/>}/>

       <Route path="/DashboardDoctor" element = {<DashboardDoctor/>}/>

       <Route path="/DashboardPatient" element = {<DashboardPatient/>}/>

       <Route path="/SignInPatient" element = {<SignInPatient/>}/>

       <Route path="/SignInDoctor" element = {<SignInDoctor/>}/>

     
       
    
       
      </Routes>
      
      

    </>
  );
}

export default App;
