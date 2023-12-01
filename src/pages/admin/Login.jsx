import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [username,setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [click,setClick] = React.useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(email,password);
        if(!username || !password){
            alert("Please enter all the details")
            return
        }
        const response = await axios.post(`${import.meta.env.VITE_APP_URI}/login`,{
            username,
            password
        }, {withCredentials: false})

        setClick(true)

        // console.log(response.data);

        if(response.status == 200){
            setClick(false)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role',response.data.role)
            navigate("/admin")
        }
    }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-1/4 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl sm:w-full">
                <h1 className="text-3xl font-semibold text-center text-green-400 underline">
                   Login
                </h1>
                <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-800">
                            {click ? "Loading":"Login"}
                        </button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login