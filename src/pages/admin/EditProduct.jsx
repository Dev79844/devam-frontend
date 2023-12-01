import React from 'react'
import Navbar from '../../components/admin/Navbar'
import ProductEditForm from '../../components/admin/ProductEditForm'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MainNav from '../../components/admin/MainNav'

const EditProduct = () => {
    const {id} = useParams()
    const [product,setProduct] = React.useState(null)

    

    React.useEffect(() => {
        const fetchProduct = async() => {
            const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone/${id}`,{
              headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
              }
            })
            // console.log(response);
            setProduct(response.data)
        }
        fetchProduct()
    },[])
    if(product){
      return (
        <div>
            <MainNav />
            <ProductEditForm product = {product} />
        </div>
      )
    }
}

export default EditProduct