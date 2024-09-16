import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "search",
    initialState: {
       movieName:null,
       searchMovie:null
    },
    reducers: {
      setSerachMovie:(state,action)=>{
        state.searchMovie=action.payload
      },
      setMovieName:(state,action)=>{
        state.movieName=action.payload
      }
    }
})
export const {setSerachMovie,setMovieName} = SearchSlice.actions    
export default SearchSlice.reducer