import { FaSearch, FaPlus } from "react-icons/fa";


export default function EditUser({ secondCol, thirdCol }) {
    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <div className='flex w-full h-14 justify-between mt-6'>
                <button 
                    className='text-white_pormade bg-light_green rounded-lg w-1/6 h-9 text-2xl flex justify-center ml-36'
                    >
                        <div className='flex justify-center w-full items-center'>
                            <FaPlus className='text-white mr-4'/>
                            <p>Cadastrar</p>
                        </div>
                    </button>
                <div className='w-2/6 h-2/3 flex justify-evenly items-center bg-black_modal border-2 border-light_green rounded-md'>
                    <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg'/>
                    <FaSearch className='w-6 h-6 text-light_green'/>
                </div>
            </div>
            <div className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl'>
                <table className='w-full text-center'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>{secondCol}</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>{thirdCol}</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-r border-t border-b border-light_green text-2xl'>Iaasdasd</td>
                            <td className='border border-light_green text-2xl'>adsdsa</td>
                            <td className='border border-light_green text-2xl'>adsdasd</td>
                            <td className='border border-light_green text-2xl'>adssdasd</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}