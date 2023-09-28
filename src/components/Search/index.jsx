import React, { useEffect, useState, useCallback, useRef } from "react";
import Metadata from "../Metadata";
import { getMovieDetails, getSearchResults } from "../../utils/api";
import debounce from "lodash.debounce";
function Search({ addToSelectedMovies }) {
  const searchTextRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");
  const [movieMetadata, setMovieMetadata] = useState(null);
  const onAddClick = () => {
    if (addToSelectedMovies) {
      addToSelectedMovies(movieMetadata);
    }
  };
  const onSearchChange = useCallback(
    debounce((inputVal) => fetchSearchResults(inputVal), 1000), //delay 1 second before making another api call
    []
  ); 
  const fetchSearchResults = (searchText) => {
    setMovieMetadata(null);
    if (searchText) {
      getSearchResults(searchText).then((results) => {
        setSearchResults(results || {Error:"No Movie found!"}); // set Error if no results found
        if (results && results.length > 0) {
          setSelectedResult(results[0].imdbID);
        } 
      });
    }
  };

  useEffect(() => {
    if (selectedResult) {
      getMovieDetails(selectedResult)
        .then((details) => {
            setMovieMetadata(details);
        })
    }
  }, [selectedResult]); // get metadata once a movie is selected from dropdown

  return (
    <div className="p-1 header text-l  border">
      <input
        type="text"
        placeholder="Search..."
        minLength="2"
        maxLength="15"
        ref={searchTextRef}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-2 w-full text-white-900 focus:outline-none focus:ring focus:ring-blue-300"
      />
      {searchResults?.length > 0 && (
        <div className="border border-4 border-yellow">
          Suggestions
          <select
            className="w-full"
            value={selectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
          >
            {searchResults.map((result) => (
              <option  key={result.imdbID} value={result.imdbID}> {result.Title}</option>
            ))}
          </select>
        </div>
      )}
      {searchTextRef.current?.value && !searchResults?.Error && movieMetadata && (
        <div>
          <Metadata metadata={movieMetadata} />
          <button
            className="bg-yellow-300 text-black rounded-md p-2 disabled:bg-gray-300"
            onClick={onAddClick}
            disabled={isNaN(movieMetadata.imdbRating)}
          >
            Add Movie
          </button>
        </div>
      )}
      {searchTextRef.current?.value && searchResults?.Error && (
        <div>Sorry, No results found for your search in our database</div>
      )}
    </div>
  );
}
export default Search;
