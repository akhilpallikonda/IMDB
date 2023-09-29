import { getMovieDetailsUrl, getSearchUrl } from "./helpers";

export const getSearchResults = async (searchTerm) => {
  const response = await fetch(getSearchUrl(searchTerm));
  const data = await response.json();
  return data.Search || data;
};
export const getMovieDetails = async (imdbID) => {
  const response = await fetch(getMovieDetailsUrl(imdbID));
  const data = await response.json();
  return data;
};
