import axios from "axios";
import {  options, top_rated_movies } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  setTopRatedMovies } from "../redux/movieSlice";

 export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTopRatedMovies = async () => {
        try {
          const res = await axios.get(
           top_rated_movies,options
             );
             console.log(res.data.results)

             dispatch(setTopRatedMovies(res.data.results))
       
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTopRatedMovies();
    }, []);
  
    return {  loading, error}
 }