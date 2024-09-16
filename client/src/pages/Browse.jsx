import React, { useEffect } from 'react';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieContainer from './MovieContainer';
import Header from './Header';

const Browse = () => {
  // custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);




  return (


    <div className="relative min-h-screen bg-black text-white">
       <Header/>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black">
      </div> */}

      {/* Full-screen Video */}
    {/* </div>
      <div className='w-[vw] overflow-hidden'>
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/P8EIBksC0MA?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
      */}
      <MovieContainer />
            </div>
  );
};

export default Browse;