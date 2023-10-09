"use client";

import { Card } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export interface IChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export default function Chart({ data }: IChartProps) {
  return (
    <Card>
      <ResponsiveContainer width={"100%"} height={"350"}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <XAxis
            tickFormatter={(value) => `$${value}`}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey={"total"} fill="#0369a1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}