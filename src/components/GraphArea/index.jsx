import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Label,
} from "recharts";
function CustomizedTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return <div className="bg-white text-black">{`${label} : ${payload[0].value}`}</div>;
  }
  return null;
}
function GraphArea({ data }) {
  return (
    data &&
    data.length > 1 && (
      <div className="flex justify-center">
        <ResponsiveContainer width="80%" height={350}>
          <BarChart data={data} margin={{ top: 15, right: 30, left: 30, bottom: 5 }}>
            <Bar dataKey="imdbRating" fill="green" stroke="#FFF">
              <LabelList dataKey="Title" position="inside" stroke="#000" />
            </Bar>
            <XAxis dataKey="Title" stroke="#FFF"></XAxis>
            <YAxis stroke="#FFF" > 
            <Label value="Rating" position="insideLeft" offset={0} />
            </YAxis>
            <Tooltip cursor={false} content={<CustomizedTooltip />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}
export default GraphArea;
