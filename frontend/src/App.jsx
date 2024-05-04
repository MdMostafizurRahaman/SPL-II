import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Upload from './Upload' 
import ForgotPassword from './ForgotPassword'
import StudentDashboard from './StudentDashboard'
import IpocDashboard from './IpocDashboard'
import CompanyDashboard from './CompanyDashboard'


function App() {
 

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
         <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* add a default route for the root url */}
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path="/home" element= {<Home />}></Route>
       {/* // <Route path="/" element={<Home />} /> */}
        <Route path='/upload' element = {<Upload />}></Route>

        <Route path='forgot-password' element = {<ForgotPassword />}></Route>
        <Route path='studentdashboard' element = {<StudentDashboard />}></Route>
        <Route path='ipocdashboard' element = {<IpocDashboard />}></Route>
        <Route path='companydashboard' element = {<CompanyDashboard />}></Route>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
