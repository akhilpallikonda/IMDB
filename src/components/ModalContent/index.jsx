import React from "react";
import Search from "../Search";
function ModalContent({addToSelectedMovies}) {
  return (
    <div>
      <div className="text-xl"> Search for a movie </div>
      <Search addToSelectedMovies={addToSelectedMovies}/>
    </div>
  );
}
export default ModalContent;
