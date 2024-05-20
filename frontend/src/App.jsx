import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student_Signup from './Student_Signup'
import Ipoc_Signup from './Ipoc_Signup'
//import Company_Signup from './Company_Signup'
import Company_Signup from './Company_Signup'
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
import UploadCGPAAndSkillset from './Upload_CGPA_&_Skills'
import CompanyList from './CompanyList'
import CompanyDetail from './CompanyDetails'

function App() {
 

  return (
   
    <BrowserRouter>
      <Routes>
                <Route path="/student_register" element={<Student_Signup />} />
                <Route path="/ipoc_register" element={<Ipoc_Signup />} />
                <Route path="/company_register" element={<Company_Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/signup" element={<RegistrationTypeSelection />} /> */}
                <Route path="/registration-type" element={<RegistrationTypeSelection />} />
        
                <Route path="/upload" element={<Upload />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/studentdashboard" element={<StudentDashboard />} />
                <Route path="/ipocdashboard" element={<IpocDashboard />} />
                <Route path="/companydashboard" element={<CompanyDashboard />} />
                <Route path="/stu_dashboard" element={<Stu_dashboard />} />
                <Route path="/uploadCgpaAndSkills" element={<UploadCGPAAndSkillset />} />
                <Route path="/companyList" element={<CompanyList />} />
                <Route path="/company/:companyId" element={<CompanyDetail />} />
          
                <Route path="/upload-profile-picture" element={<UploadProfilePicture />} />
            </Routes>
    </BrowserRouter>
     
  )
}

export default App
