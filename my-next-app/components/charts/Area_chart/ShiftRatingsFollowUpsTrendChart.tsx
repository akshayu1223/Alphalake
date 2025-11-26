
"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ShiftRatingsFollowUpsTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* Grid lines only */}
        <CartesianGrid stroke="#D9D9D9" strokeDasharray="1 1" />

        {/* Hide internal axes because you are using custom X/Y axis components */}
        <XAxis dataKey="name" hide />
        <YAxis hide />

        <Tooltip />

        {/* Green Area */}
        <Area
          type="monotone"
          dataKey="green"
          fill="#D4D88C"
          stroke="#D4D88C"
        />

        {/* Pink Area */}
        <Area
          type="monotone"
          dataKey="pink"
          fill="#F7A9A6"
          stroke="#F7A9A6"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
