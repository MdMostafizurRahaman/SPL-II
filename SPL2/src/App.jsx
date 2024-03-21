import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login'
import Home from './Home'


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
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
