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
    
   
      <MovieContainer />
            </div>
  );
};

export default Browse;