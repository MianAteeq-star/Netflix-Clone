
export const now_playing_movies = import.meta.env.VITE_NOW_PLAYING_MOVIES;

export const popular_movies = import.meta.env.VITE_POPULAR_MOVIES;
export const top_rated_movies = import.meta.env.VITE_TOP_RATED_MOVIES;
export const upcoming_movies = import.meta.env.VITE_UPCOMING_MOVIES;
export const TMDB_IMG_URL = import.meta.env.VITE_TMDB_IMG_URL;
export const Search_Movie_URL = import.meta.env.VITE_SEARCH_MOVIE_URL;

console.log(popular_movies, top_rated_movies, upcoming_movies, now_playing_movies, TMDB_IMG_URL, Search_Movie_URL);

console.log(import.meta.env.VITE_BACKEND_URL);


export const options =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJlMTljMTk2YWEwNmExMjFhOTgzNGZmOTA1N2JmNiIsIm5iZiI6MTcyNjI0NTcxMi4xODM1MjQsInN1YiI6IjY2ZTQ2YTA4OTAxM2ZlODcyMjI0Mjc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oymE5Qw-j6Azi__PLdDn8gMhcTqSA_oD2bMARAG8tE4'
    }
  };