import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import ModalDelete from './ComponentsAdmin/ModalDelete/indes'
import ModalEditUSer from './ComponentsAdmin/ModalUserEdit'
import MenuLateral from './ComponentsAdmin/MenuLateral'
import LateralMenu from './Components/MenuLateral'
import api from './http/api'


function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    api.get('/produtos/lista')
    .then(response => setProductData(response))
  },[])

  console.log(productData)

  return (
    <>
      <ModalDelete />
      <ModalEditUSer />
      <MenuLateral />
      <LateralMenu/>
      <Outlet/>  
      </>
  )
}

export default App
