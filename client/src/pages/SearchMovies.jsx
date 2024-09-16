import axios from 'axios'
import React, { useState } from 'react'
import { options, Search_Movie_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieName, setSerachMovie } from '../redux/searchSlice'
import MovieList from './MovieList'

const SearchMovies = () => {
const [search,setSearch]=useState('')
const {movieName,searchMovie} = useSelector(store=>store?.search)
const dispatch = useDispatch()
console.log(movieName,searchMovie)
  const handleSearch=async(e)=>{
    e.preventDefault()
    console.log(search)
    try {
      const response = await axios.get(`${Search_Movie_URL}${search}&include_adult=false&language=en-US&page=1`,options)
      console.log(response.data.results)
      dispatch(setSerachMovie(response.data.results))
      dispatch(setMovieName(search))
    } catch (error) {
      console.log(error)
    }
setSearch('')
  }

  return (
      <>
      <div className="flex gap-2 items-center justify-center h-96">

    <form onSubmit={handleSearch} className="p-2 rounded shadow-xl flex gap-2 bg-white w-2/4 text-black">
        <input type="text" 
         className='w-full p-3 outline-none'
         placeholder='Search Movies...'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         />
        <button type='submit' className='bg-red-700 hover:bg-red-800 rounded-md  p-4'>
            Search
        </button>
    </form>

      </div>
    <MovieList title={movieName} movies={searchMovie} />

      </>
  )
}

export default SearchMovies