import { apikey, baseUrl } from "./constants";

export const getSearchUrl = (searchTerm,type) =>
  `${baseUrl}?s=${searchTerm}&type=${type}&apikey=${apikey}`;

export const getMovieDetailsUrl = (imdbID) =>  `${baseUrl}?i=${imdbID}&apikey=${apikey}`;