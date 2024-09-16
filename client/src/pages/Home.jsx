import React from 'react';
import bgImage from "../assets/bg.jpg";
import logo from "../assets/logo.svg";
import MovieSlider from './MovieSlider';
import FAQs from './Faqs';
import Header from './Header';

const Home = () => {
    return (
        <div className="bg-black text-white">

            <section className="relative h-screen bg-cover bg-center " style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black">
                    {/* Header */}
                    <Header/>

                    <div className=" p-4 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mx-auto">
                                Unlimited movies, TV <br /> shows, and more
                            </h1>
                            <p className="mb-8">
                                Starts at Rs 250. Cancel anytime. <br />
                                Ready to watch? Enter your email to create or restart your membership.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="sm:w-auto w-full px-8 py-3 rounded-sm text-white bg-black border border-white opacity-60"
                                />
                                <button className="bg-red-600 px-6 py-3 rounded-md text-lg font-semibold">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            {/* Movie Slider */}
            <section className="p-8">
                <MovieSlider />
            </section>
            {/* FAQ Section */}
            <FAQs />


            {/* Footer */}

            <footer className="bg-black text-gray-400 p-8">
                <div className="max-w-6xl mx-auto">
                    <p className="mb-4">Questions? Contact</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Speed Test</a></li>
                        </ul>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Cookie Preferences</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Legal Notices</a></li>
                        </ul>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Account</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Ways to Watch</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Corporate Information</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Only on Netflix</a></li>
                        </ul>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Media Center</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Terms of Use</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <select className="bg-gray-800 text-white px-4 py-2 rounded">
                            <option>English</option>
                            <option>Urdu</option>
                        </select>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;