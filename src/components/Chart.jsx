import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { subject: "Math", marks: 85 },
    { subject: "electronics", marks: 92 },
    { subject: "English", marks: 78 },
    { subject: "computing", marks: 88 },
    { subject: "chemistry", marks: 95 },
  ];

  return (
    <ResponsiveContainer width="95%" height={220}>
      <BarChart data={data} barSize={40}>
        <XAxis dataKey="subject" stroke="#A83232" tick={{ fill: "#A83232" }} />
        <YAxis stroke="#A83232" tick={{ fill: "#A83232" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="marks" fill="#B22222" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
