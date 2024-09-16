
import React, { useState } from 'react';
import logo from "../assets/logo.svg"; 
import bgImage from "../assets/bg.jpg"; 
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
    username:""
  })
const handleSubmit = async(e) => {
  e.preventDefault();
try {

  const response =await axios.post("http://localhost:1000/api/v1/user/register", formData)
  console.log(response.data)
  if(response && response.data.success){
  
    navigate("/login")
    toast.success(response.data.message)
  }
} catch (error) {
  console.log(error)
  toast.error(error.response.data.message)
}
}


  return (
    <div className="flex  items-center justify-center h-screen bg-no-repeat bg-cover bg-gray-900 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black">

        <header className="w-full flex justify-between items-center px-8 md:px-24 py-5">
        <Link to={"/"}>
          <img src={logo} alt="Netflix Logo" className="h-10" />
          </Link>
        </header>
        <main className="max-w-[400px]  mx-auto p-8 bg-black bg-opacity-65 rounded-md">
          <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-3 rounded  text-white  bg-black border border-white opacity-70"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded  text-white  bg-black border border-white opacity-70"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-3 rounded  text-white focus:outline-none bg-black border border-white opacity-70"
              />
            </div>
        
            <button className="w-full p-3 bg-red-500 rounded font-semibold hover:bg-red-800 transition duration-300">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <div>
                <input type="checkbox" id="remember" defaultChecked className="mr-1" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="hover:underline">Need help?</a>
            </div>
          </form>
          <div className="mt-8 text-gray-400">
            <p>
              Already have an account <a href="#" className="text-white hover:underline"><Link to={"/login"}>Sign In</Link></a>.
            </p>
            <p className="mt-4 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;