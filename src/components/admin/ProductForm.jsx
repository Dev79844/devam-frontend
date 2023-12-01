import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PhoneForm = () => {

    const navigate = useNavigate()

    const [condition, setCondition] = React.useState("")
    const [model, setModel] = React.useState("")
    const [warranty, setWarranty] = React.useState("")
    const [accessories, setAccessories] = React.useState("")
    const [details, setDetails] = React.useState("N/A")
    const [images,setImage] = React.useState("")
    const [imei, setImei] = React.useState("N/A")
    const [store,setStore] = React.useState("")
    const [nlc,setNlc] = React.useState(0)
    const [customerName,setCustomerName] = React.useState("")
    const [customerPhone,setCustomerPhone] = React.useState("")
    const [customerDocument,setCustomerDocument] = React.useState("")
    const [serialNo,setSerialNo] = React.useState("N/A")
    const [isLoading, setIsLoading] = React.useState(false)

    const branches = ['Devam Maninagar', 'iTronics Maninagar', 'Techno Maninagar', 'iTronics Vijay Char Rasta', 'iPearl Naroda', 'iPearl Bodakdev', 'iTronics Bopal','Techno Ashram Road', 'Techo Prahladnagar','iPearl Nikol', 'iPearl Ghatlodia']

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (
            !condition.trim() ||
            !model.trim() ||
            !warranty.trim() ||
            !accessories.trim() ||
            !images ||
            !store.trim() ||
            !nlc.trim() ||
            !customerName.trim() ||
            !customerPhone.trim() ||
            !customerDocument
          ) {
            alert("Please enter all the details");
            return;
          }
          
        setIsLoading(true)
        // console.log(model,warranty,condition,battery,accessories,images);
        let isSold = false
        const formData = new FormData()
        formData.append("model", model)
        formData.append("warranty", warranty)
        formData.append("condition", condition)
        formData.append("details", details),
        formData.append("accessories", accessories)
        formData.append("imei", imei)
        formData.append("store", store)
        formData.append("nlc",nlc)
        formData.append("images", images)
        formData.append("customerDocument",customerDocument)
        formData.append("customerName",customerName)
        formData.append("customerPhone",customerPhone)
        formData.append("serialNo",serialNo)
        
        

        const data = await axios.post(`${import.meta.env.VITE_APP_URI}/admin/phone`,formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
        // console.log(data)
        if(data.status === 200){
            // localStorage.setItem("email", email)
            setIsLoading(false)
            alert("Added!")
            navigate("/admin/viewproducts")
        }
        // navigate("/admin")
    }

  return (
    <>
        <div className='underline text-xl' onClick={() => navigate(-1)}>Back</div>
            <div className="relative flex flex-col justify-center  overflow-hidden bg-white">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-4xl font-semibold text-center text-black uppercase">
                    Add Device
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
                    {/* <div className="mb-2 text-2xl ">
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
                    </div> */}
                    <div className="mb-2 text-2xl ">
                        <label
                            htmlFor="store"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Store
                        </label>
                        <select value={store} onChange={(e) => setStore(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option value="">Select an option</option>
                            {branches.map((branch,index) => (
                                <option value={branch} key={index+1}>{branch}</option>
                            ))}
                        </select>
                        <p className='block text-2xl font-semibold text-gray-800'>Store selected:{store}</p>
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
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="images"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Images:
                        </label>
                        <input
                            type="file"
                            multiple="multiple"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="mb-2 text-2xl">
                        <label
                            htmlFor="customerDocument"
                            className="block text-2xl font-semibold text-gray-800"
                        >
                            Customer Document:
                        </label>
                        <input
                            type="file"
                            multiple="multiple"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setCustomerDocument(e.target.files[0])}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500" type='submit' disabled={isLoading}>
                            {isLoading ? "Loading..." : "Add"}
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

export default PhoneForm