import React, { useEffect, useState } from "react";
import Metadata from "../Metadata";
import { getMovieDetails, getSearchResults } from "../../utils/api";
function Search({ addToSelectedMovies }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");
  const [movieMetadata, setMovieMetadata] = useState();
  const onAddClick = () => {
    if (addToSelectedMovies) {
      addToSelectedMovies(movieMetadata);
    }
  };
  useEffect(() => {
    setMovieMetadata(null); // reset metadata when search text changes
    if(searchText){
    getSearchResults(searchText).then((results) => {
      setSearchResults(results);
      if (results && results.length > 0) {
        setSelectedResult(results[0].imdbID);
      }
    });
  }
  }, [searchText]); // get search results when search text changes
  useEffect(() => {
    getMovieDetails(selectedResult).then((details) => {
      setMovieMetadata(details);
    });
  }, [selectedResult]); // get metadata once a movie is selected from dropdown

  return (
    <div className="p-1 header text-l  border">
      <input
        type="text"
        placeholder="Search..."
        minlength="2"
        maxlength="15"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
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
              <option value={result.imdbID}> {result.Title}</option>
            ))}
          </select>
        </div>
      )}
      {movieMetadata && !movieMetadata.Error && (
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
    </div>
  );
}
export default React.memo(Search);
