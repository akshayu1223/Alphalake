

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name: "Breaks", value: 2 },
  { name: "Communication", value: 9 },
  { name: "RCS", value: 6 },
  { name: "Staffing", value: 7 },
  { name: "Work Pressure/ Acuity", value: 0 },
  { name: "Equipment", value: 4 },
  { name: "Skill Mix", value: 10 },
  { name: "Personal Wellbeing", value: 6 },
  { name: "Rostering", value: 6 },
];

const barColors = [
  "#FFAFA3",
  "#FFD8D1",
  "#FFBE98",
  "#D6D88D",
  "transparent",
  "#F4C77F",
  "#FFEABA",
  "#F3A25B",
  "#FBC57F",
];

export default function ThematicAnalysisChart() {
  return (
    <div className="w-[1329px] h-[398px]">
      <BarChart
        width={1329}
        height={398}
        data={data}
        margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
      >
        {/* Light grid */}
        <CartesianGrid stroke="#E6E6E6" strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          interval={0}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          domain={[0, 12]}
        />

        <Tooltip />

        {/* Bars */}
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={barColors[index]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
