import React from 'react'
import ProductCard from './Card'
import axios from 'axios'

const ProductGrid = () => {

    const [products,setProducts] = React.useState(null)

    React.useEffect(() => {
        const fetchProducts = async() => {
            const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone`)
            // console.log(response.data);
            setProducts(response.data)
        }
        fetchProducts()
    },[])


    if(products){
        return (
          <div>
              <div className='flex justify-center items-center mt-[4em] p-8'>
                  <div className='grid grid-cols-4 gap-[8em] sm:flex sm:flex-col sm:gap-4'>
                      {products.map(product => (
                          <ProductCard product={product} />
                      ))}
                  </div>
              </div>
          </div>
        )
    }
}

export default ProductGrid