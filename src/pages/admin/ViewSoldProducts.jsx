import React from 'react'
import Navbar from '../../components/admin/Navbar'
import SoldProductGrid from '../../components/admin/SoldProductGrid'
import MainNav from '../../components/admin/MainNav'

const ViewSoldPhones = () => {
  return (
    <>
            <div>
                    <MainNav />
                    <div className="w-full p-4 ">
                        <SoldProductGrid />
                    </div>
            </div>
    </>
  )
}

export default ViewSoldPhones