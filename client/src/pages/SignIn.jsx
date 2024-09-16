import React, { useState } from 'react';
import logo from "../assets/logo.svg"; // Ensure you have the Netflix logo in your assets
import bgImage from "../assets/bg.jpg"; // Ensure you have the background image in your assets
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice'; // Import the setUser action from your user slice

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/user/login", formData);
      console.log(response.data);
      if (response && response.data.success) {
        toast.success("Login successful!");
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.token));
        dispatch(setUser(response.data.user));
        navigate("/browse");
      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black">

        <header className="w-full flex justify-between items-center px-8 md:px-24 py-5 cursor-pointer">
         <Link to={"/"}>
          <img src={logo} alt="Netflix Logo" className="h-10" />
          </Link>
        </header>
        <main className="w-full max-w-md mx-auto p-8 bg-black bg-opacity-75 rounded-md">
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                className="w-full p-3 rounded  text-white  bg-black border border-white opacity-70"
              />
            </div>
          
            <button className="w-full p-3 bg-red-600 rounded font-semibold hover:bg-red-700 transition duration-300">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <div>
                <input type="checkbox" id="remember" className="mr-1" defaultChecked />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="hover:underline">Need help?</a>
            </div>
          </form>
          <div className="mt-8 text-gray-400">
            <p>
              New to Netflix? <Link to="/register" className="text-white hover:underline">Sign up now</Link>.
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

export default SignIn;