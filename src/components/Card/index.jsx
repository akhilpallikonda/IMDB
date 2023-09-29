import React from "react";
function Card({ item, removeMovie }) {
  const onDeleteClick = () => {
    if (removeMovie) {
      removeMovie(item.imdbID);
    }
  };
  return (
    <div className="relative card flex-none w-2/5 md:w-36 m-1 md:pb-4 border rounded-lg aspect-w-9 aspect-h-16">
      <button
        onClick={onDeleteClick}
        className="absolute top-0 right-0 text-black bg-yellow-300 px-2 rounded-full"
      >
        X
      </button>
      <img className="aspect-[2/3]" src={item.Poster} alt={item.Poster} />
      <div tabIndex={1} className="tile-marker truncate">
        {item.Title}
      </div>
    </div>
  );
}
export default Card;
