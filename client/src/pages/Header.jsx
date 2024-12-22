import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { setToggle } from '../redux/movieSlice';
import { setUser } from '../redux/userSlice';
import logo from '../assets/logo.svg'; // Ensure you have the Netflix logo in your assets
import axios from 'axios';
import { toast } from 'react-toastify';


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toggle = useSelector((state) => state.movie.toggle);
    const { user } = useSelector(state => state.user)

    const handleLogout = async () => {
        console.log("Logout");
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logout`, {
                withCredentials: true
            });
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                dispatch(setUser(null));
                navigate('/login');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const toggleHandler = () => {
        dispatch(setToggle())
    }
    return (
        <div>
            <header className="absolute z-10 top-0 left-0 right-0 flex justify-between items-center px-8 md:px-24 py-5">
                <div className="text-2xl font-bold cursor-pointer">
                    <Link to={""}>
                        <img src={logo} alt="Netflix Logo" className="h-6 md:h-10" />
                    </Link>
                </div>

                {user ? (
                    <div className="flex flex-col gap-2 sm:flex-row items-center space-x-4">
                        <span className='text-lg capitalize'>Hi👋 {user?.username}</span>
                        <button onClick={handleLogout}
                            className="bg-red-600 px-4 py-2 cursor-pointer rounded-md hover:bg-red-700 transition duration-300">
                            Logout
                        </button>

                        <button onClick={toggleHandler} className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                            {
                                toggle ? "Home" : "Search Movies"}
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 sm:flex-row items-center space-x-4">
                        <button className= "font-semibold bg-red-600 px-4 py-1.5 cursor-pointer rounded-md hover:bg-red-700 transition duration-300">
                            <Link to="/login">Sign In</Link>
                        </button>
                        

                    </div>
                )
                }
            </header>
        </div>
    )
}

export default Header