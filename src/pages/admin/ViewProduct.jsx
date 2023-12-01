import React, { useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/admin/Navbar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MainNav from '../../components/admin/MainNav'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ViewProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = React.useState(null)
    const [open, setOpen] = React.useState(false);
    const [vendor,setVendor] = useState("")
    const [sale,setSale] = useState(0)
    const [dateOfSale,setDateOfSale] = useState("")
    const [remarks,setRemarks] = React.useState("N/A")
    const [isLoading,setIsLoading] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            navigate("/admin/viewproducts")
        }
    }

    const handleSold = async() => {
      if(!dateOfSale || !vendor || !sale){
        alert("Please enter all details")
        return
      }
      setIsLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_APP_URI}/admin/phone/${id}`,{
        vendor,
        dateOfSale,
        sale
      },{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.status == 200){
        alert("Device sold!")
        setIsLoading(false)
        navigate("/admin/viewproducts")
      }
    }

    if(product){
        return (
            <div>
            <MainNav />
            <div className="w-full p-4">
              <button onClick={() => navigate(-1)} className='text-2xl underline'>Back</button>
              <div className="container mx-auto px-4 py-8 items-center">
              <h1 className="text-3xl font-semibold mb-4">{product.model}</h1>
              <div className='grid grid-cols-2 gap-8 sm:grid sm:grid-cols-1'>
                <div className="flex flex-wrap mx-2">
                  {product.images.map((image, index) => (
                    <div className="w-full md:w-1/3 lg:w-3/4 xl:w-1/5 p-2" key={index}>
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
                    <img src={image.url} alt={`Product ${index + 1}`} className="w-full h-auto" />
                  </div>
                  ))}
                  <div className="flex justify-between items-center">
                    <div className='flex gap-4'>
                      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={() => navigate(`/admin/product/edit/${product._id}`)}>
                          Edit Details
                      </button>
                      {localStorage.getItem('role') === 'admin' ? (<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={() => handleDelete()}>
                          Delete Device
                      </button>):(<></>)}
                      <Button onClick={handleOpen} className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>Sell Device</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sell Device
                          </Typography>
                          <div className="mb-2 text-2xl">
                            <label
                                htmlFor="customerPhone"
                                className="block text-2xl font-semibold text-gray-800"
                            >
                                Date of Sale:
                            </label>
                            <input
                                type="date"
                                value={dateOfSale}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setDateOfSale(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 text-2xl">
                            <label
                                htmlFor="vendor"
                                className="block text-2xl font-semibold text-gray-800"
                            >
                                Vendor
                            </label>
                            <input
                                type="text"
                                value={vendor}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setVendor(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 text-2xl">
                            <label
                                htmlFor="sale"
                                className="block text-2xl font-semibold text-gray-800"
                            >
                                Sale amount:
                            </label>
                            <input
                                type="number"
                                value={sale}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setSale(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 text-2xl">
                            <label
                                htmlFor="remarks"
                                className="block text-2xl font-semibold text-gray-800"
                            >
                                Remarks:
                            </label>
                            <textarea
                                value={remarks}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) => setRemarks(e.target.value)}
                            />
                          </div>
                          <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded' onClick={handleSold} disabled={isLoading}>{isLoading ? "Loading..." : "Confirm"}</button>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
    }
  
}

export default ViewProduct