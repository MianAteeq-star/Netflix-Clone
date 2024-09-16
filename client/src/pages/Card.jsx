import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setMovieId, setOpen } from '../redux/movieSlice'

const Card = ({posterPath,movieId}) => {
  const dispatch = useDispatch()
  if (posterPath === null) {
    return null
  }
  const handleOpen = () => {
   dispatch(setOpen(true))
   dispatch(setMovieId(movieId))
  }
  return (
    <div className='w-48 pr-2' onClick={handleOpen} >
    <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
  </div>
  )
}

export default Card