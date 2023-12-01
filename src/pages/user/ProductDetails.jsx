import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/user/Navbar'

const ProductDetails = () => {
    const {id} = useParams()

    const [product, setProduct] = React.useState(null)

    React.useEffect(() => {
        const fetchProduct = async() => {
            const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone/${id}`)
            // console.log(response.data);
            setProduct(response.data)
        }
        fetchProduct()
    },[])

    const navigate = useNavigate()


    if(product){
        // console.log();
        return (
            <>
                <Navbar />
                <div className='underline text-2xl p-8 hover:cursor-pointer' onClick={() => navigate(-1)}>
                    Back
                </div>
                <div className='flex flex-col justify-center items-center mt-8 p-4'>
                    <h1 className='text-3xl font-bold underline'>{product.model}</h1>
                    <br />
                    {/* <div className='block object-contain'>
                        <img src={product.images[0].secure_url} alt={product.model} className='h-[50vh]' />
                    </div> */}
                    <div className="flex flex-wrap mx-2">
                        {product.images.map((image, index) => (
                        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={index}>
                        <img src={image.url} alt={`Product ${index + 1}`} className="w-full h-auto" />
                        </div>
                        ))}
                    </div>
                    <div className='text-2xl mt-10'>
                        <ul>
                        <li><span className='font-bold'>Condition</span>:{product.condition}</li>
                        <li><span className='font-bold'>Warranty</span>:{product.warranty}</li>
                        <li><span className='font-bold'>Acessories</span>:{product.accessories}</li>
                        {/* <li><span className='font-bold'>IMEI</span>:{product.imei}</li> */}
                        <li><span className='font-bold'>Details</span>:{product.details}</li>
                        {/* <li><span className='font-bold'>Store</span>:{product.store}</li> */}
                        {/* <li><span className='font-bold'>NLC</span>:{product.nlc}</li> */}
                        {/* <li><span className='font-bold'>Mode of Payment</span>:{product.modeOfPayment}</li> */}
                        {/* <li><span className='font-bold'>Date Of Sale</span>:{new Date(product.dateOfSale).toLocaleDateString()}</li> */}
                        {/* <li><span className='font-bold'>Vendor</span>:{product.vendor}</li> */}
                        </ul>
                    </div>
                </div>  
            </>
        )
    }
}

export default ProductDetails