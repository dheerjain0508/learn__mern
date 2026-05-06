import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login';

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*"  element={<h1>not found</h1>}/>
    </Routes>
  )
}

export default Allroutes;
