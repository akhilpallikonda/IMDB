import React from "react";
import Search from "../Search";
function ModalContent({addToSelectedMovies}) {
  return (
    <div>
      <Search addToSelectedMovies={addToSelectedMovies}/>
    </div>
  );
}
export default ModalContent;
