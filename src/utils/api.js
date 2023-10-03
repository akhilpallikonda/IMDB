import { getMovieDetailsUrl, getSearchUrl } from "./helpers";

export const getSearchResults = async (searchTerm,type) => {
  const response = await fetch(getSearchUrl(searchTerm,type));
  const data = await response.json();
  return data.Search || data;
};
export const getMovieDetails = async (imdbID) => {
  const response = await fetch(getMovieDetailsUrl(imdbID));
  const data = await response.json();
  return data;
};
