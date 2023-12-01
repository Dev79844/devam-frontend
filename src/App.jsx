import React from "react"
import {Routes, Route} from 'react-router-dom'
import Sidebar from "./components/admin/Sidebar"
import Dashboard from "./pages/admin/Dashboard"
import AddDevice from "./pages/admin/AddDevice"
import ViewAvailablePhones from "./pages/admin/ViewAvailablePhones"
import ViewProduct from "./pages/admin/ViewProduct"
import Login from "./pages/admin/Login"
import EditProduct from "./pages/admin/EditProduct"
import ViewSoldPhones from "./pages/admin/ViewSoldProducts"
import ViewSoldProduct from "./pages/admin/ViewSoldProduct"
import HomePage from "./pages/user/Homepage"
import ProductDetails from "./pages/user/ProductDetails"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/user/product/:id' element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddDevice />} />
        <Route path="/admin/viewproducts" element={<ViewAvailablePhones />} />
        <Route path="/admin/viewproducts/sold" element={<ViewSoldPhones />} />
        <Route path="/admin/product/:id" element={<ViewProduct />} />
        <Route path="/admin/sold/product/:id" element={<ViewSoldProduct />} />
        <Route path="/admin/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App
