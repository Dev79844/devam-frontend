import React from "react"
import {Link} from 'react-router-dom'

export default function Navbar() {

  return (
    <>
     <nav className="flex items-center justify-between flex-wrap bg-[#29335c] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/"><span className="font-semibold text-3xl tracking-tight">DEVAM</span></Link>
        </div>
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div>
      </div>
    </div>
</nav>
    </>
  )
}
