import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import SearchMovies from './SearchMovies'
import MainContainer from './MainContainer'

const MovieContainer = () => {
  const movie = useSelector(state=>state.movie)
  const toggle = useSelector(state=>state.movie.toggle)
  
  return (
    <>
    {
      toggle ? <SearchMovies/> : (
        <>
<MainContainer/>
          <div className=''>
<MovieList  title={"Popular Movies"} movies={movie?.popularMovies} />
<MovieList  title={"Now Playing  Movies"} movies={movie?.nowPlayMovies} />
<MovieList  title={"Top Rated Movies"} movies={movie?.topRatedMovies} />
<MovieList  title={"Upcoming Movies"} movies={movie?.upcomingMovies} />

</div>
</>
)
    }
    </>
  
  )
}

export default MovieContainer