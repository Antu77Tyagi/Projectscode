import { useState } from 'react'
import {Link } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { First } from './Components/First'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { BackgroundApp } from './Components/BackgrounApp'
function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </BrowserRouter> */}
      {/* <First demo="demo hai yeh" demo1="yeh second hai" ha={{time:1,date:23}}/> */}
      <BackgroundApp/>
    </>
  )
}

export default App
