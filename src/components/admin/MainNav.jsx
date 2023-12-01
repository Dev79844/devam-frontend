import React from 'react'
import {FiMenu} from 'react-icons/fi'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const MainNav = () => {

    const [open,setOpen] = React.useState(false)

    const navigate = useNavigate()

    const handleLogout = async() => {
        const response = await axios.post(`${import.meta.env.VITE_APP_URI}/logout`)
        if(response.status == 200){
          localStorage.removeItem("token")
          localStorage.removeItem("role")
          navigate("/login")
        }
    }

  return (
    <header className='border-b border-gray-300 py-2 overflow-hidden bg-[#29335c]'>
        <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
            <p className='text-white'>Devam Enterprise</p>

            <FiMenu className='lg:hidden h-6 w-6 cursor-pointer text-white' onClick={() => setOpen(!open)} />

            <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                <ul className='text-base text-white lg:flex lg:justify-between'>
                    <Link to="/admin"><li className='lg:px-5 py-2 block'>Home</li></Link>
                    <Link to="/admin/add"><li className='lg:px-5 py-2 block'>Add Device</li></Link>
                    <Link to="/admin/viewproducts"><li className='lg:px-5 py-2 block'>Available Devices</li></Link>
                    <Link to="/admin/viewproducts/sold"><li className='lg:px-5 py-2 block'>Sold Phones</li></Link>
                    <Link to="#" onClick={handleLogout}><li className='lg:px-5 py-2 block'>Logout</li></Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default MainNav