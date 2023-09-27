import React from "react";

function Metadata({metadata}) {
  return (
    <div className="p-1">
      {metadata.Title} : {metadata.imdbRating}
    </div>
  );
}
export default React.memo(Metadata);
