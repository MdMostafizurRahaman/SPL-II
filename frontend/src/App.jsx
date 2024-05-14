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
import Stu_dashboard from './Stu_dashboard'
import RegistrationTypeSelection from './RegistrationTypeSelection'
import UploadProfilePicture from './UploadProfilePicture'

function App() {
 

  return (
   
    <BrowserRouter>
      <Routes>
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/signup/:type" element={<Signup />} />
                <Route path="/registration-type" element={<RegistrationTypeSelection />} />
        
                <Route path="/upload" element={<Upload />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/studentdashboard" element={<StudentDashboard />} />
                <Route path="/ipocdashboard" element={<IpocDashboard />} />
                <Route path="/companydashboard" element={<CompanyDashboard />} />
                <Route path="/stu_dashboard" element={<Stu_dashboard />} />
          
                <Route path="/upload-profile-picture" element={<UploadProfilePicture />} />
            </Routes>
    </BrowserRouter>
     
  )
}

export default App
