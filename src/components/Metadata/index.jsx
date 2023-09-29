import React from "react";

function Metadata({ metadata }) {
  return (
    <div className="p-1 flex">
      <div className="w-1/3">
        <img
          className="aspect-[2/3]"
          src={metadata.Poster}
          alt={metadata.Poster}
        />
      </div>
      <div className="flex flex-col w-2/3 p-2">
        <div className="text-xl font-bold self-center">{metadata.Title}</div>
        <div>
          <span className="font-bold">IMDb Rating:</span> {isNaN(metadata.imdbRating) ? metadata.imdbRating : metadata.imdbRating+"/10"}
        </div>
        <div>
          <span className="font-bold">Plot: </span>
          {metadata.Plot}
        </div>
        <div>
          <span className="font-bold">Year of Release:</span> {metadata.Year}
        </div>
        <div>
          <span className="font-bold">Genre:</span> {metadata.Genre}
        </div>
        <div>
          <span className="font-bold">Language:</span> {metadata.Language}
        </div>
        <div>
          <span className="font-bold">Director: </span>
          {metadata.Director}
        </div>
        <div>
          <span className="font-bold">Actors: </span>
          {metadata.Actors}
        </div>
        <div>
          <span className="font-bold">Writer: </span>
          {metadata.Writer}
        </div>
      </div>
    </div>
  );
}
export default React.memo(Metadata);
