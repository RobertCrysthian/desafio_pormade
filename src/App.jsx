import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {

  return (
    <>
    <Outlet/>  
    </>
  )
}

export default App
