import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/admin/Navbar'
import MainNav from '../../components/admin/MainNav'

const ViewSoldProduct = () => {
    const navigate = useNavigate()
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
    
    const handleDelete = async() => {
        const response = await axios.delete(`${import.meta.env.VITE_APP_URI}/admin/phone/${id}`,{
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.status == 200){
            navigate("/admin/viewproducts/sold")
        }
    }

    if(product){
        return (
            <div>
            <MainNav />
            <div className="w-full p-4 ">
              <button onClick={() => navigate(-1)} className='text-2xl underline'>Back</button>
              <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-semibold mb-4">{product.model}</h1>
              <div className="flex flex-wrap -mx-2">
                {product.images.map((image, index) => (
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={index}>
                  <img src={image.url} alt={`Product ${index + 1}`} className="w-full h-auto" />
                </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-gray-700 mb-4 text-2xl">Accessories: {product.accessories}</p>
                <p className="text-gray-700 mb-4 text-2xl">Warranty: {product.warranty}</p>
                <p className="text-gray-700 mb-4 text-2xl">Condition: {product.condition}</p>
                <p className="text-gray-700 mb-4 text-2xl">IMEI: {product.imei}</p>
                <p className="text-gray-700 mb-4 text-2xl">Serial number: {product.serialNo}</p>
                <p className="text-gray-700 mb-4 text-2xl">Details: {product.details}</p>
                <p className="text-gray-700 mb-4 text-2xl">Store: {product.store}</p>
                <p className="text-gray-700 mb-4 text-2xl">NLC: Rs.{product.nlc}</p>
                <p className="text-gray-700 mb-4 text-2xl">Customer Name: {product.customerName}</p>
                <p className="text-gray-700 mb-4 text-2xl">Customer Phone: {product.customerPhone}</p>
                {product.customerDocument.map((image, index) => (
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={index}>
                  <img src={image.url} alt={`Customer Doc ${index + 1}`} className="w-full h-auto" />
                </div>
                ))}
                <p className="text-gray-700 mb-4 text-2xl">Vendor: {product.vendor}</p>
                <p className="text-gray-700 mb-4 text-2xl">Date of Sale: {new Date(product.dateOfSale).toDateString()}</p>
                <p className="text-gray-700 mb-4 text-2xl">Sale amount: {product.sale}</p>
                <p className="text-gray-700 mb-4 text-2xl">Profit: {product.diff}</p>
                <div className="flex justify-between items-center">
                  <div className='flex gap-4'>
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={() => handleDelete()}>
                        Delete Device
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
    }
  
}

export default ViewSoldProduct