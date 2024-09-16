import React from 'react'
import Card from './Card'

const MovieList = ({ title, movies, searhMovie = false }) => {
    console.log(movies, title)
    return (
        <div className="px-8">

            <h1 className='text-3xl font-semibold  py-6 px-3 capitalize'>{title}</h1>
        <div className='flex  overflow-x-auto no-scrollbar  cursor-pointer'>
            <div className='flex gap-4 items-center' >
                {
                movies?.map((movie) => (
                     <div key={movie?.id} className="min-w-[200px] transform transition-transform duration-300 hover:scale-105">

                      <Card movieId={movie?.id}  posterPath={movie?.poster_path} />
                    </div>
                ))
            }

            </div>
        </div>
            </div>
    )
}

export default MovieList