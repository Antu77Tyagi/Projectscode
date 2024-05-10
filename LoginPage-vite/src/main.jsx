import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Components/SignUp.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<SignUp />
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <RouterProvider router={router}/> */}
  <App />
  </React.StrictMode>,
)
