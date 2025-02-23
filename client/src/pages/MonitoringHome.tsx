"use client"

import * as React from "react";
import { Link } from "react-router-dom";
import { CartesianGrid, Line, LineChart, XAxis, Tooltip, PolarAngleAxis, PolarGrid, Radar, RadarChart, Bar, BarChart, YAxis, LabelList } from "recharts";

export default function MonitoringHome() {
  // 📊 User Activity Data (New vs. Returning Users)
  const chartData = [
    { date: "2025-01-24", newUsers: 50, returningUsers: 60 },
    { date: "2025-01-25", newUsers: 48, returningUsers: 55 },
    { date: "2025-01-26", newUsers: 52, returningUsers: 58 },
    { date: "2025-01-27", newUsers: 45, returningUsers: 65 },
    { date: "2025-01-28", newUsers: 55, returningUsers: 60 },
    { date: "2025-01-29", newUsers: 53, returningUsers: 61 },
    { date: "2025-01-30", newUsers: 60, returningUsers: 66 },
    { date: "2025-01-31", newUsers: 58, returningUsers: 70 },
    { date: "2025-02-01", newUsers: 47, returningUsers: 63 },
    { date: "2025-02-02", newUsers: 54, returningUsers: 59 },
    { date: "2025-02-03", newUsers: 60, returningUsers: 62 },
    { date: "2025-02-04", newUsers: 50, returningUsers: 61 },
    { date: "2025-02-05", newUsers: 55, returningUsers: 65 },
    { date: "2025-02-06", newUsers: 52, returningUsers: 60 },
    { date: "2025-02-07", newUsers: 58, returningUsers: 62 },
    { date: "2025-02-08", newUsers: 55, returningUsers: 65 },
  ];

  // 📊 Product Categories Data
  const categoryData = [
    { category: "Fruits", value: 186 },
    { category: "Vegetables", value: 305 },
    { category: "Dairy", value: 237 },
    { category: "Snacks & Sweets", value: 273 },
    { category: "Baked Goods", value: 209 },
    { category: "Meat", value: 214 },
    { category: "Beverages", value: 250 },
  ];

  // 📊 User Age Group Data
  const ageGroupData = [
    { ageGroup: "0-12", users: 120 },
    { ageGroup: "13-18", users: 180 },
    { ageGroup: "19-27", users: 350 },
    { ageGroup: "28-40", users: 280 },
    { ageGroup: "41-59", users: 220 },
    { ageGroup: "60+", users: 150 },
  ];

  // Configurations
  const chartConfig = {
    newUsers: { label: "New Users", color: "#8884d8" },
    returningUsers: { label: "Returning Users", color: "#82ca9d" },
  };

  const [activeChart, setActiveChart] = React.useState<"newUsers" | "returningUsers">("newUsers");

  return (
    <div className="p-6 space-y-6 w-full h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-center">Anonymous User Statistics</h1>

      {/* 📈 Full-Screen Line Chart */}
      <div className="border rounded-lg shadow-md p-4 bg-white w-full flex-1 flex flex-col">
        <div className="border-b pb-3">
          <h2 className="text-lg font-semibold">User Trends Over the Last 30 Days</h2>
          <p className="text-gray-500 text-sm">Tracking new and returning users</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mt-4">
          {(["newUsers", "returningUsers"] as const).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 mx-2 rounded ${
                activeChart === key ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveChart(key)}
            >
              {chartConfig[key].label}
            </button>
          ))}
        </div>

        {/* Line Chart */}
        <div className="flex-grow flex justify-center items-center mt-4 w-full">
          <LineChart
            width={window.innerWidth - 50}
            height={window.innerHeight - 550}
            data={chartData}
            margin={{ top: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={activeChart}
              stroke={chartConfig[activeChart].color}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </div>
      </div>

      {/* 📊 Radar Chart (Product Categories) & Bar Chart (User Age Groups) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🔘 Radar Chart: Product Categories */}
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col items-center">
          <h2 className="text-lg font-semibold text-center">Product Category Trends</h2>
          <p className="text-gray-500 text-sm text-center mb-4">Analysis of different product types</p>
          <RadarChart width={350} height={350} data={categoryData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <Radar
              dataKey="value"
              fill="#82ca9d"
              fillOpacity={0.6}
              dot={{ r: 4, fillOpacity: 1 }}
            />
          </RadarChart>
        </div>

        {/* 📊 Bar Chart: User Age Groups */}
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col items-center">
          <h2 className="text-lg font-semibold text-center">User Age Distribution</h2>
          <p className="text-gray-500 text-sm text-center mb-4">Age groups of active users</p>

          <BarChart width={500} height={300} data={ageGroupData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <YAxis dataKey="ageGroup" type="category" tickLine={false} tickMargin={10} axisLine={false} width={100} />
            <XAxis type="number" tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: "#f5f5f5" }} />
            <Bar dataKey="users" fill="#8884d8" radius={4} barSize={30}>
              <LabelList dataKey="users" position="insideRight" offset={8} fill="#fff" fontSize={12} fontWeight="bold" />
            </Bar>
          </BarChart>
        </div>
      </div>

      {/* 🆕 Third Section - AI Enhanced Diagrams */}
      <div className="border rounded-lg shadow-md p-6 bg-white flex flex-col items-center text-center mt-6">
        <h2 className="text-lg font-semibold">AI-Enhanced Insights</h2>
        <p className="text-gray-500 text-sm my-2">
          Our AI-powered diagrams are seamlessly integrated with the GrocierEase mobile web app. Weekly data updates 
          allow us to monitor trends and optimize user experience.
        </p>
        <Link to="/monitoring/more-info" className="flex items-center text-blue-500 font-medium hover:underline">
          Learn More <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
