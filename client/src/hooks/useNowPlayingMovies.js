import axios from "axios";
import { now_playing_movies, options } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayMovies } from "../redux/movieSlice";

 export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchNowPlayingMovies = async () => {
        try {
          const res = await axios.get(
            now_playing_movies,options
             );
             console.log(res.data.results)

             dispatch(setNowPlayMovies(res.data.results))
       
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNowPlayingMovies();
    }, []);
  
    return {  loading, error}
 }