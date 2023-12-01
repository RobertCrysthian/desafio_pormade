import { useState } from "react"
import "../../index.css"
import image from "../../assets/images/seta.png"
import { useNavigate } from "react-router-dom"

const MenuLateral = ({show, close}) => {
    const navigate = useNavigate()

    return (
        <aside className={`h-5/6 bg-black fixed top-0 left-20 overflow-hidden border-r-4 border-solid border-light_green duration-200 block ${show ? 'w-1/5' : "w-0 border-none"}`}>
            <div className="w-full h-1/6  ">
                <img src={image }className="w-14 ml-24 hover:cursor-pointer hover:w-16" onClick={close}/>
            </div>
        <button className="w-3/5 h-16 bg-light_green ml-28 rounded-lg font-bold text-2xl text-white mb-5" onClick={() => navigate('/editarUsuarios')}>Usuários</button>
        <button className="w-3/5 h-16 bg-light_green ml-28 rounded-lg font-bold text-2xl text-white" onClick={() => navigate('/editarProdutos')}>Produtos</button>

        </aside>
    )
}

export default MenuLateral