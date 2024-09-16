import {createSlice} from '@reduxjs/toolkit';


const MovieSlice = createSlice({
    
        name: 'movie',
    
        initialState: {
           nowPlayMovies: null,
           popularMovies:null,
           topRatedMovies: null,
           upcomingMovies:null,
           toggle:false,
           trailerMovie:null,
           open:false,
           movieId:""

        },
    
        reducers: {
    
            setNowPlayMovies: (state, action) => {
                state.nowPlayMovies = action.payload
            },
            setPopularMovies:(state,action)=>{
                state.popularMovies = action.payload
            },
            setTopRatedMovies: (state, action) => {
                state.topRatedMovies = action.payload
            },
            setUpcomingMovies:(state,action)=>{
                state.upcomingMovies = action.payload
            },
            setToggle:(state)=>{
                state.toggle = !state.toggle
            },
            setTrailerMovie:(state,action)=>{
                state.trailerMovie = action.payload
            },
            setOpen:(state,action)=>{
                state.open =action.payload
            },
            setMovieId:(state,action)=>{
                state.movieId =action.payload
            }
          
    
        }
})

export const { setNowPlayMovies, setPopularMovies,setTopRatedMovies,setUpcomingMovies,setToggle,setTrailerMovie,setOpen,setMovieId } = MovieSlice.actions
export default MovieSlice.reducer