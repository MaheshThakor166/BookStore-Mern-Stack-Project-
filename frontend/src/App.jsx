import { useState } from 'react'
import Home from './Home/Home'
import Course from './Course/Courses'
import {Route,Routes} from "react-router-dom";
import Signup from './Components/Signup';
import ContactUs from './ContactUs/Contacts'
function App() {
 

  return (
     <>
        <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={<Course />}
            />
         <Route
            path="/signup"
            element={<Signup />}
            />
         
        
        <Route
            path="/contactus"
            element={<ContactUs />}
            />
          
        </Routes>
       
      </div>
     </>
  )
}

export default App
