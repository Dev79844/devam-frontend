import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductEditForm = ({product}) => {
    // console.log(product);
    const navigate = useNavigate()

    const [condition, setCondition] = React.useState(product.condition)
    const [model, setModel] = React.useState(product.model)
    const [warranty, setWarranty] = React.useState(product.warranty)
    const [accessories, setAccessories] = React.useState(product.accessories)
    const [details, setDetails] = React.useState(product.details)
    const [imei, setImei] = React.useState(product.imei)
    const [store,setStore] = React.useState(product.store)
    const [nlc,setNlc] = React.useState(product.nlc)
    const [customerName,setCustomerName] = React.useState(product.customerName)
    const [customerPhone,setCustomerPhone] = React.useState(product.customerPhone)
    const [serialNo,setSerialNo] = React.useState(product.serialNo)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSubmit = async() => {
        setIsLoading(true)
        const formData = new FormData()
        formData.append("model", model)
        formData.append("warranty", warranty)
        formData.append("condition", condition)
        formData.append("details", details),
        formData.append("accessories", accessories)
        formData.append("imei", imei)
        formData.append("store", store)
        formData.append("nlc",nlc)
        formData.append("customerName",customerName)
        formData.append("customerPhone",customerPhone)
        formData.append("serialNo",serialNo)

        const response = await axios.put(`${import.meta.env.VITE_APP_URI}/admin/phone/${product._id}`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            }
        )
        if(response.status == 200){
            alert("Details Updated")
            navigate(`/admin/viewproducts`)
        }
    }
  return (
    <>
            <div className='underline text-xl' onClick={() => navigate(-1)}>Back</div>
            <div className="relative flex flex-col justify-center  overflow-hidden bg-white">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-4xl font-semibold text-center text-black uppercase">
                    Update Device
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="name"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Model
                        </label>
                        <input
                            type="text"
                            value={model}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="imei"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            IMEI
                        </label>
                        <input
                            type="text"
                            value={imei}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setImei(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="serialNo"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Serial No
                        </label>
                        <input
                            type="text"
                            value={serialNo}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setSerialNo(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl ">
                        <label
                            htmlFor="store"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Store
                        </label>
                        <input
                            type="text"
                            value={store}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setStore(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="warranty"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Warranty
                        </label>
                        <input
                            type="text"
                            value={warranty}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e)=>setWarranty(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="condition"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Condition
                        </label>
                        <input
                            type="text"
                            value={condition}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e)=>setCondition(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="details"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Details
                        </label>
                        <input
                            type="text"
                            value={details}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e)=>setDetails(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="accessories"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Accessories
                        </label>
                        <input
                            type="text"
                            value={accessories}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setAccessories(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="nlc"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            NLC
                        </label>
                        <input
                            type="number"
                            value={nlc}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setNlc(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="customerName"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Customer Name
                        </label>
                        <input
                            type="text"
                            value={customerName}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="customerPhone"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Customer Phone
                        </label>
                        <input
                            type="text"
                            value={customerPhone}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500" type='submit' disabled={isLoading}>
                            {isLoading ? "Loading..." : "Update"}
                        </button>
                    </div>
                </form>
                <div className="flex mt-4 gap-x-2">
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductEditForm