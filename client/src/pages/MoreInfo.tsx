"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Pie, PieChart, ResponsiveContainer, Cell, Legend, Line, LineChart, YAxis } from "recharts"

export default function MoreInfo() {
  // 📊 **Detailed One-Month Product Data**
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (30 - i)) // Past 30 days

    return {
      date: date.toISOString().split("T")[0],
      added: Math.floor(180 + Math.random() * 50), 
      purchased: Math.floor(150 + Math.random() * 40), 
    }
  })

  // 📊 **AI-Powered Most Bought Products Per Season**
  const seasonalProducts = [
    {
      season: "Winter",
      products: [
        { name: "Pork", value: 340, color: "#d45087" },
        { name: "Hot Chocolate", value: 290, color: "#82ca9d" },
        { name: "Bread", value: 250, color: "#ffc658" },
        { name: "Ham", value: 230, color: "#8884d8" },
      ],
    },
    {
      season: "Spring",
      products: [
        { name: "Strawberries", value: 400, color: "#ff8042" },
        { name: "Spring Salad", value: 320, color: "#82ca9d" },
        { name: "Orange Juice", value: 280, color: "#ffc658" },
        { name: "Easter Bread", value: 260, color: "#8884d8" },
      ],
    },
    {
      season: "Summer",
      products: [
        { name: "Coca-Cola", value: 450, color: "#ffcc00" },
        { name: "Boss Ice Cream", value: 380, color: "#82ca9d" },
        { name: "BBQ Sauce", value: 320, color: "#ff8042" },
        { name: "Chips", value: 270, color: "#d45087" },
      ],
    },
    {
      season: "Autumn",
      products: [
        { name: "Pumpkin", value: 370, color: "#d45087" },
        { name: "Cinnamon Tea", value: 310, color: "#82ca9d" },
        { name: "Mushroom Soup", value: 290, color: "#ffc658" },
        { name: "Roasted Nuts", value: 250, color: "#8884d8" },
      ],
    },
  ]

  // 📊 **Restored AI-Predicted Data for Next Month**
  const predictedData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i) // Future 30 days

    return {
      date: date.toISOString().split("T")[0],
      fruits: Math.floor(300 + Math.random() * 50), 
      dairy: Math.floor(250 + Math.random() * 40), 
      snacks: Math.floor(200 + Math.random() * 60), 
      meat: Math.floor(280 + Math.random() * 50), 
      beverages: Math.floor(240 + Math.random() * 40), 
      baked: Math.floor(190 + Math.random() * 50),
    }
  })

  // 📊 **Chart Configurations**
  const chartConfig = {
    added: { label: "Products Added", color: "#8884d8" },
    purchased: { label: "Product Purchases", color: "#82ca9d" },
  }

  // 🔄 **State for Switching Between Data**
  const [activeChart, setActiveChart] = React.useState<"added" | "purchased">("added")

  // 📈 **Calculate Total**
  const total = React.useMemo(
    () => ({
      added: chartData.reduce((acc, curr) => acc + curr.added, 0),
      purchased: chartData.reduce((acc, curr) => acc + curr.purchased, 0),
    }),
    [chartData]
  )

  return (
    <div className="p-6 space-y-6 w-full h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center">Product Analytics - AI Enhanced</h1>

      {/* 📊 **Product Trends (Bar Chart)** */}
      <div className="border rounded-lg shadow-md p-6 bg-white w-full flex flex-col">
        <h2 className="text-2xl font-semibold text-center">Product Trends Overview</h2>
        <p className="text-gray-500 text-lg text-center">
          Analyzing the trends of products added vs. purchased
        </p>

        {/* 📌 **Toggle Buttons** */}
        <div className="flex justify-center mt-6 space-x-4">
          {(["added", "purchased"] as const).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 rounded-lg text-lg ${
                activeChart === key ? "bg-blue-600 text-white shadow-md" : "bg-gray-200"
              }`}
              onClick={() => setActiveChart(key)}
            >
              {chartConfig[key].label} - {total[key].toLocaleString()}
            </button>
          ))}
        </div>

        {/* 📊 **Full-Width Bar Chart** */}
        <div className="mt-6 w-full flex justify-center">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="4 4" vertical={false} strokeOpacity={0.7} />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📊 **Seasonal Most Bought Products (Pie Charts)** */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {seasonalProducts.map(({ season, products }) => (
          <div key={season} className="border rounded-lg shadow-md p-6 bg-white flex flex-col items-center">
            <h2 className="text-xl font-semibold">{season} - Predicted Most Bought </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={products}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {products.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* 📈 **AI-Predicted Next Month's Most Profitable Categories (Stock Chart)** */}
      <div className="border rounded-lg shadow-md p-6 bg-white w-full flex flex-col">
        <h2 className="text-2xl font-semibold text-center">AI-Predicted Most Profitable Categories</h2>
        <p className="text-gray-500 text-lg text-center mb-4">
          Based on AI models, these are the most profitable categories for the next month.
        </p>

        {/* 📈 **Stock-Like Line Chart** */}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={predictedData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="fruits" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="dairy" stroke="#82ca9d" strokeWidth={2} />
            <Line type="monotone" dataKey="snacks" stroke="#ffc658" strokeWidth={2} />
            <Line type="monotone" dataKey="meat" stroke="#ff8042" strokeWidth={2} />
            <Line type="monotone" dataKey="beverages" stroke="#d45087" strokeWidth={2} />
            <Line type="monotone" dataKey="baked" stroke="#ffcc00" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
