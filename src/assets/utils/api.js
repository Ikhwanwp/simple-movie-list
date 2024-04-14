import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY;
const baseURL = import.meta.env.VITE_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/discover/movie?page=1&api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
  return search.data;
};

export const getDetailMovie = async (movie_id) => {
  const movie = await axios.get(`${baseURL}/movie/${movie_id}?api_key=${apiKey}`);
  return movie.data;
};
