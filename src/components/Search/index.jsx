import React, { useEffect, useState, useCallback, useRef } from "react";
import Metadata from "../Metadata";
import { getMovieDetails, getSearchResults } from "../../utils/api";
import debounce from "lodash.debounce";
function Search({ addToSelectedMovies }) {
  const searchTextRef = useRef(null);
  const [selectedType,setSelectedType] = useState("movie");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");
  const [movieMetadata, setMovieMetadata] = useState(null);
  const [hasError,setError] = useState(false);
  const onAddClick = () => {
    if (addToSelectedMovies) {
      addToSelectedMovies(movieMetadata);
    }
  };
  const onSearchChange = useCallback(
    debounce((inputVal) => fetchSearchResults(inputVal), 1000), //delay 1 second before making another api call
    [selectedType]
  ); 
  const fetchSearchResults = (searchText) => {
    setError(false);
    setMovieMetadata(null);
    setSelectedResult(null);
    if (searchText) {
      getSearchResults(searchText,selectedType).then((results) => {
        setSearchResults(results); 
        if (results && results.length > 0) {
          setSelectedResult(results[0].imdbID);
        } 
      }).catch(()=>{
        setError(true);
      })
      ;
    }
  };

  useEffect(() => {
    if (selectedResult) {
      getMovieDetails(selectedResult)
        .then((details) => {
            setMovieMetadata(details);
        }).catch(()=>{
          setError(true);
        })
    }
  }, [selectedResult]); // get metadata once a movie is selected from dropdown

  return (
    <div className="p-1 header text-l  border">
      <div className="text-xl">Select type of content</div>
      <select
            className="w-full"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
          
              <option value={"movie"}> Movie </option>
              <option value={"series"}> Series </option>
              <option value={"episode"}> Episode </option>
            
          </select>
    <div className="text-xl"> Search for a movie </div>
      <input
        type="text"
        placeholder="Search..."
        minLength="2"
        maxLength="15"
        ref={searchTextRef}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-2 w-full text-white-900 focus:outline-none focus:ring focus:ring-blue-300"
      />
      {hasError && <div> Sorry, There is an error while performing operation. </div>}
      {searchResults?.length > 0 && !hasError && (
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
            className="bg-yellow-300 text-black rounded-md p-2 ml-[40%] disabled:bg-gray-300"
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
