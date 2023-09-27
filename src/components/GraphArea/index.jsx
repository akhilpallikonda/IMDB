import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
function GraphArea({data}) {
  return data && data.length>1 && (
    <div className="flex justify-center">
      <BarChart width={800} height={350} data={data}>
            <Bar dataKey="imdbRating" fill="blue" stroke="#FFF"/>
            <XAxis dataKey="Title" stroke="#FFF"/>
            <YAxis stroke="#FFF"/>
            <Tooltip />
        </BarChart>
    </div>
  );
}
export default GraphArea;
