import React, {useRef} from "react";
import Card from "../Card";
import "./styles.css";
function SelectedMovies({ data, removeMovie }) {
  const contentWrapper = useRef(null);

  return (
    data &&
    data.length > 0 && (
      <div className="selected-movies-container relative">
        <div ref={contentWrapper} className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start mb-8">
          {data.map((item, index) => {
            return <Card key={index} item={item} removeMovie={removeMovie} />;
          })}
        </div>
      </div>
    )
  );
}
export default SelectedMovies;
