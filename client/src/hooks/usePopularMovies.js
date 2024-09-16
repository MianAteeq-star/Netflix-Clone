import axios from "axios";
import {  options, popular_movies } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  setPopularMovies } from "../redux/movieSlice";

 export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPopularMovies = async () => {
        try {
          const res = await axios.get(
            popular_movies,options
             );
             console.log(res.data.results)

             dispatch(setPopularMovies(res.data.results))
       
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPopularMovies();
    }, []);
  
    return {  loading, error}
 }