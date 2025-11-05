import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const utilizationData = [
  { month: "Jan", usage: 75 },
  { month: "Feb", usage: 82 },
  { month: "Mar", usage: 68 },
  { month: "Apr", usage: 90 },
  { month: "May", usage: 85 },
  { month: "Jun", usage: 92 },
];

const emissionsData = [
  { source: "AI Optimization", value: 60 },
  { source: "Manual Routes", value: 40 },
];

const efficiencyData = [
  { day: "Mon", efficiency: 78 },
  { day: "Tue", efficiency: 85 },
  { day: "Wed", efficiency: 80 },
  { day: "Thu", efficiency: 88 },
  { day: "Fri", efficiency: 90 },
  { day: "Sat", efficiency: 76 },
  { day: "Sun", efficiency: 70 },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

export default function AnalyticsPanel() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Fleet Analytics Dashboard 📊
          </h1>
          <p className="text-gray-500">
            AI insights on mobility performance and sustainability
          </p>
        </div>
        <Link
          to="/dashboard"
          className="px-4 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Back to Dashboard
        </Link>
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Fleet Utilization (Line Chart) */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Fleet Utilization (%) – Last 6 Months
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={utilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* CO₂ Emission Reduction (Pie Chart) */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            CO₂ Emission Reduction
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emissionsData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {emissionsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Efficiency Trends (Bar Chart) */}
        <div className="col-span-1 p-6 bg-white shadow md:col-span-2 rounded-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Daily Efficiency (%) – Current Week
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="efficiency" fill="#10b981" barSize={40} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        © 2025 NeuroFleetX | AI Urban Mobility Analytics
      </footer>
    </div>
  );
}
