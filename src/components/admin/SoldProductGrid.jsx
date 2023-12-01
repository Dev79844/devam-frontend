import React from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import SoldProductCard from './SoldProductCard'

const SoldProductGrid = () => {

    const [products,setProducts] = React.useState(null)

    React.useEffect(() => {
        const fetchProducts = async() => {
            const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone/sold`,
            {
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log(response.data);
            setProducts(response.data)
        }
        fetchProducts()
    },[])

    if(products){
        return (
          <div className='grid grid-cols-3 gap-[10em] sm:flex sm:flex-col sm:gap-4'>
              {products.map(product => (
                <SoldProductCard product={product} key={product._id} />
              ))}
          </div>
        )
    }
}

export default SoldProductGrid