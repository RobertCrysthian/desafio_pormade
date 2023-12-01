import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import LateralMenu from './Components/MenuLateral'
import api from './http/api'
import { MenuContextProvider } from './Contexts/MenuContext'
import { AdminContextProvider } from './Contexts/AdminContext'
import ModalNewProduct from './ComponentsAdmin/ModalNewProduct'
import ModalNewUser from './ComponentsAdmin/ModalNewUser'


function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    api.get('/produtos/lista')
      .then(response => setProductData(response))
  }, [])

  console.log(productData)

  return (
    <>
      <MenuContextProvider>
        <AdminContextProvider>

          <LateralMenu />
          <Outlet />
          <ModalNewUser />
          <ModalNewProduct/>
        </AdminContextProvider>
      </MenuContextProvider>
    </>
  )
}

export default App
