import { useEffect, useState } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineAdminPanelSettings, MdOutlineShoppingCart, MdOutlineWatchLater } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import CardProduct from "../../Components/CardProduct";
import Modal from "../../Components/Modal";
import api from "../../http/api";
import CartItem from "../../Components/CartItem";


const Home = () => {
    const navigate = useNavigate()
    const [productData, setProductData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const params = useParams()

    const fetchData = () => {
        api.get(`produtos/lista?pagina=${params.id - 1}&itens=6`)
            .then(response => setProductData(response.data.products))
    }

    const nextPage = () => {
        navigate(`/${parseInt(params.id) + 1}`)
        window.location.reload()


    }

    const previousPage = () => {
        if (parseInt(params.id) > 1) {
            navigate(`/${parseInt(params.id) - 1}`)
            window.location.reload()
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(productData)


    return (
        <div className="w-full h-full flex justify-end items-center py-10">

            <div className="w-11/12 h-5/6 flex items-center flex-col bg-black rounded-3xl border-2 border-light_green mr-10">
                <div className="flex w-3/6">
                    <input placeholder='Pesquisar...' className="outline-none rounded-2xl pl-3 m-12 h-10 w-full border bg-black text-white_pormade  border-light_green text-xl" />
                </div>
                <div className='flex flex-row justify-center flex-wrap w-10/12'>
                    {productData.map((item) => {
                        return (
                            <CardProduct name={item.name} description={item.description} price={item.value} key={item.id} />
                        )
                    })}
                </div>
                <footer className='flex justify-center items-center my-4'>
                    <IoIosArrowBack
                        className='w-9 h-9 text-white_pormade cursor-pointer'
                        onClick={() => previousPage()}
                    />
                    <div>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>1</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>2</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>3</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>...</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>9</Link>
                    </div>

                    <IoIosArrowForward
                        className='w-9 h-9 text-white_pormade cursor-pointer'
                        onClick={() => nextPage()}
                    />
                </footer>
            </div>
        </div>
    )
}

export default Home