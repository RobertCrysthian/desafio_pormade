import { MdOutlineAdminPanelSettings, MdOutlineShoppingCart, MdOutlineWatchLater } from "react-icons/md"
import logo from "../../assets/images/Vector.png"
import { RxExit } from "react-icons/rx"
import Modal from "../Modal"
import CartItem from "../CartItem"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuLateral from "../../ComponentsAdmin/MenuLateral"

export default function LateralMenu () {
    const [openModal, setOpenModal] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='bg-black h-5/6 fixed top-0 left-0 p-3 flex flex-col justify-between border-r-2 border-r-light_green'>
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Imagem do logo" className="w-14 h-12 my-3 cursor-pointer" />
                <MdOutlineShoppingCart
                    className="w-12 h-12 text-white_pormade my-3 cursor-pointer"
                    onClick={() => setOpenModal(!openModal)}
                />
                <MdOutlineWatchLater className="w-12 h-12 text-white_pormade my-3 cursor-pointer" />
                <MdOutlineAdminPanelSettings className="w-12 h-12 text-yellow my-3 cursor-pointer" onClick={() => setOpenMenu(!openMenu)}/>
            </div>
            <RxExit className="w-12 h-12 text-white_pormade cursor-pointer" onClick={() => navigate('/login')} />
            <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <div className='flex w-10/12 mt-2 justify-end items-center'>
                        <h1 className='font-bold text-2xl'>Valor Total: R$ 302,58</h1>
                        <button className='text-white font-semibold text-xl w-44 rounded-xl h-10 bg-light_green mx-2'>Finalizar Compra</button>
                    </div>
                </Modal>
                <MenuLateral close={() => setOpenMenu(!openMenu)} show={openMenu}/>
        </div>
    )
}