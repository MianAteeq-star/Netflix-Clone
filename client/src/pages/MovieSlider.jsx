import React, { useRef } from 'react';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { usePopularMovies } from '../hooks/usePopularMovies';
import { TMDB_IMG_URL } from '../utils/constants';
import { setOpen } from '../redux/movieSlice';
import { toast } from 'react-toastify';



const MovieSlider = () => { // This is only for home page
  
  usePopularMovies()
  const open = useSelector((state) => state.movie.open);
  const diapatch = useDispatch()
const movies = useSelector((state) => state.movie.popularMovies);
  console.log(movies)
  const handleOpen = () => {
    diapatch(setOpen(true))
    toast.error('This feature is not available yet Please Login to watch the trailer')
  } 

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
      <div ref={sliderRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4 ">
        {movies?.map((movie) => (
          <div onClick={handleOpen} key={movie?.id} className="min-w-[200px] transform transition-transform duration-300 hover:scale-105">
            <img src={`${TMDB_IMG_URL}/${movie.poster_path}`} alt='movie Poster' className="w-full h-auto rounded-md" />
            <h3 className="text-lg mt-2">{movie?.title}</h3>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MovieSlider;