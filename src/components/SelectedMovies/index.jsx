import React, {useRef} from "react";
import Card from "../Card";
import "./styles.css";
function SelectedMovies({ data, removeMovie }) {
  const contentWrapper = useRef(null);

  const sideScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  
  return (
    data &&
    data.length > 0 && (
      <div className="selected-movies-container relative">
      {/* <div className="absolute top-12  z-10 flex container justify-between">
        <button className="p-2 rounded-full bg-yellow-300 text-black"
        onClick={() => {
          sideScroll(contentWrapper.current, 25, 100, -10);
        }}
        > Left </button>
        <button className="p-2 rounded-full bg-yellow-300 text-black"
        onClick={() => {
          sideScroll(contentWrapper.current, 25, 100, 10);
        }}> Right </button>
      </div> */}
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
