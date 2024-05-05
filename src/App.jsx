import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

function App() {
 const router= createBrowserRouter([
{path:"/",
element:<><NavBar/><Home/></> },
{
  path:"/login",
  element: <><NavBar/><Login/></>
},
{
  path:"/about",
  element:<><NavBar/><About/></>
},
{
  path:"/user/username",
  element:<><NavBar/><About/></>
},
 ])

  return (
    <>
    <div>understanding react router  </div>
    
    <RouterProvider router={router}/> 
    
    </>
  )
}

export default App
