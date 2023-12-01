import "../../index.css"
import imagem from "../../imagens/imagem.png"
import { useContext, useState } from 'react'
import { RiAlertLine } from "react-icons/ri";
import { MenuContext } from "../../Contexts/MenuContext";



const ModalDelete = ({word}) => {

    const {deletar, setDeletar} = useContext(MenuContext)

    const close = () => {
        setDeletar(false)
    }


    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-black transition-all ease-in-out duration-500 justify-center items-center overflow-y-auto ${deletar ? 'flex' : "hidden"}`}>
            <div className=" w-3/6 h-1/3 rounded-xl border-2 border-solid border-green_pormade bg-black_modal py-10 px-4">
                <div className='w-full h-1/3 items-center flex justify-center text-white'>
                    <RiAlertLine className='w-28 h-28 text-red_pormade'/>
                </div>
                <div className='w-full h-1/3 items-center flex justify-center text-white text-center text-2xl font-bold '>
                Tem certeza que deseja deletar este {word}?
                </div>
                <div className='w-full h-1/3 itens-center flex justify-around text-white text-center text-2xl font-bold '>
                    <button 
                        className='flex w-72 bg-red_pormade h-5/6 rounded-xl text-center justify-center items-center mx-3'
                        onClick={() => setDeletar(!deletar)}
                    >Cancelar</button>
                    <button className='flex w-72 bg-light_green h-5/6 rounded-xl text-center justify-center items-center mx-3 hover'> Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete