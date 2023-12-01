import React from 'react'
import Navbar from '../../components/admin/Navbar'
import axios from 'axios';
import MainNav from '../../components/admin/MainNav';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()

   const [products,setProducts] = React.useState(null)
   const [available,setAvailable] = React.useState("")
   const [sold,setSold] = React.useState("")
   const [profit,setProfit] = React.useState("")

   React.useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/login")
    }
    const fetchData = async () =>{
        const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/dashboard`,{
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        })
        setProducts(response.data.top5)
        setAvailable(response.data.availablePhones)
        setSold(response.data.soldPhones)
        setProfit(response.data.profit)
    }
    fetchData()
   },[])

  return (
    <div className='overflow-hidden'>
        <MainNav />
        <div className='flex justify-center items-center flex-col'>
            {profit>=0 && available>=0 && sold>=0 && (
                <div className='p-8 grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:justify-center sm:items-center'>
                <div class="relative bg-gray-200 w-48 h-32 rounded-lg shadow">
                    <span class="w-full h-full flex justify-center items-center text-2xl font-black p-2">Total Available phones:{available}</span>
                </div>
                <div class="relative bg-gray-200 w-48 h-32 rounded-lg shadow">
                    <span class="w-full h-full flex justify-center items-center text-2xl font-black p-2">Total Sold Phones:{sold}</span>
                </div>
                <div class="relative bg-gray-200 w-48 h-32 rounded-lg shadow">
                    <span class="w-full h-full flex justify-center items-center text-2xl font-black">Profit:{profit}</span>
                </div>
            </div>
            )}

            {/* <div className='flex justify-center items-center w-3/4 gap-4 mt-5'>
              <button className='bg-blue-500 w-1/2 lg:w-[15%] md:w-[15%] text-center p-3 rounded-md text-white font-semibold' onClick={handleAvailable}>Download list of available phones</button>
              <button className='bg-blue-500 w-1/2 lg:w-[15%] md:w-[15%] text-center p-3 rounded-md text-white font-semibold' onClick={handleSold}>Download list of sold phones</button>
            </div> */}
            
            {products && (<div className='p-12 mt-3 ml-10 gap-4'>
              <table className='text-2xl' cellPadding={10}>
                <thead>
                  <tr className=''>
                    <th>Device</th>
                    
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product =>(
                    <tr>
                      <td className='border-4 border-black' key={product._id}>{product.model}</td>
                      <td className='border-4 border-black' key={product._id}>{product.store}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>)}
        </div>
    </div>
  )
}

export default Dashboard