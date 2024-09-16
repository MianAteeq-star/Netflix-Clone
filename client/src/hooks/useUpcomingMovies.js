import axios from "axios";
import {  options, upcoming_movies } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setUpcomingMovies } from "../redux/movieSlice";

 export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUpcomingMovies = async () => {
        try {
          const res = await axios.get(
            upcoming_movies,options
             );
             console.log(res.data.results)

             dispatch(setUpcomingMovies(res.data.results))
       
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUpcomingMovies();
    }, []);
  
    return {  loading, error}
 }