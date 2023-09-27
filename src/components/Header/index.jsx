import React from "react";

function Header() {
  return (
    <div className="p-1 bg-yellow-300 font-bold text-black text-center text-2xl">
      IMDb
    </div>
  );
}
export default React.memo(Header);
