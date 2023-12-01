import React from 'react'
import ProductGrid from '../../components/admin/ProductGrid'
import Navbar from '../../components/admin/Navbar'
import MainNav from '../../components/admin/MainNav'

const ViewAvailablePhones = () => {
  return (
    <>
            <div>
                    <MainNav />
                    <div className="w-full p-4 ">
                        <ProductGrid />
                    </div>
            </div>
    </>
  )
}

export default ViewAvailablePhones