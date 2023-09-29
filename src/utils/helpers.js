import { apikey, baseUrl } from "./constants";

export const getSearchUrl = (searchTerm) =>
  `${baseUrl}?s=${searchTerm}&type=movie&apikey=${apikey}`;

export const getMovieDetailsUrl = (imdbID) =>  `${baseUrl}?i=${imdbID}&apikey=${apikey}`;