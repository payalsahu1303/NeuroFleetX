import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InteractiveMap from "../components/InteractiveMap";

// Helper component for Dashboard Cards - Refined
function Card({ title, description, buttonText, icon, linkTo }) {
  return (
    <Link to={linkTo} className="bg-[#24263b] p-6 rounded-xl shadow-md border border-white/10 text-white flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300">
      <div>
        <div className="flex items-center mb-3">
            <i className={`${icon} text-3xl text-[#3b82f6] mr-4`}></i>
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
      </div>
      <button className="px-5 py-2 text-sm font-medium rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] transition-colors duration-300 self-start">
        {buttonText}
      </button>
    </Link>
  );
}

export default function Dashboard() {
  // Dummy data for the real-time fleet overview graph
  const realTimeFleetData = [10, 20, 15, 25, 20, 30, 25]; // Values between 0 and 30 for the Y-axis

  return (
    <div
      className="flex min-h-screen p-6 relative" // Added padding to create space around the main dashboard unit
      style={{
        backgroundImage: "url('/bg-city.png')", // Ensure this image exists in your public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for glass effect on the *entire* page background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Main Container for the Dashboard unit (Sidebar + Content) */}
      <div className="relative z-10 flex w-full h-[calc(100vh-48px)] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)] border border-white/10">
        {/* Sidebar - now takes full height of this container */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#1a1d2e]/80 backdrop-blur-xl rounded-r-2xl">
          <Navbar /> {/* Navbar now gets its props internally or from context */}

          <main className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
              {/* Top Cards - Using the refined Card component */}
              <Card
                title="Fleet Management"
                description="Manage vehicles, routes, and drivers"
                buttonText="Go to Fleet"
                icon="fas fa-truck"
                linkTo="/fleet"
              />
              <Card
                title="Analytics"
                description="View AI-powered insights and reports"
                buttonText="View Reports"
                icon="fas fa-chart-area" // Icon changed to match UI more closely
                linkTo="/analytics"
              />
              <Card
                title="Settings"
                description="Manage system configurations and user access"
                buttonText="Configure Settings"
                icon="fas fa-cog"
                linkTo="/settings"
              />
            </div>

            {/* Real-time Fleet Overview Card (spans 3 columns) */}
            <div className="bg-[#24263b] p-6 rounded-xl shadow-md border border-white/10 text-white">
              <h3 className="mb-4 text-xl font-semibold">Real-time Fleet Overview</h3>
              <div className="flex justify-between items-center h-48">
                {/* Dummy Graph - Aiming for visual accuracy */}
                <div className="relative flex-1 h-full bg-gray-700/30 rounded-lg p-2">
                    {/* Y-axis labels */}
                    <div className="absolute left-2 top-2 text-xs text-gray-400 space-y-4">
                        <div>30</div>
                        <div>20</div>
                        <div>10</div>
                        <div>0</div>
                    </div>
                    {/* Grid lines for the graph */}
                    <div className="absolute inset-0 p-2">
                        <div className="h-1/4 border-b border-gray-600"></div>
                        <div className="h-1/4 border-b border-gray-600"></div>
                        <div className="h-1/4 border-b border-gray-600"></div>
                        <div className="h-1/4"></div>
                    </div>

                    {/* Actual line graph SVG */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline
                            fill="none"
                            stroke="#3b82f6" // Blue line color
                            strokeWidth="2"
                            points={realTimeFleetData.map((value, index) =>
                                // Scale value (0-30) to SVG y (0-100, inverted)
                                `${(index / (realTimeFleetData.length - 1)) * 100},${100 - (value / 30) * 100}`
                            ).join(' ')}
                        />
                         {/* Circles at data points */}
                        {realTimeFleetData.map((value, index) => (
                            <circle
                                key={index}
                                cx={(index / (realTimeFleetData.length - 1)) * 100}
                                cy={100 - (value / 30) * 100}
                                r="1.5"
                                fill="#2dd4bf" // Teal dots color
                            />
                        ))}
                    </svg>
                    {/* X-axis labels (simplified to match image) */}
                    <div className="absolute bottom-1 w-full flex justify-around px-2 text-xs text-gray-400">
                        <span>15</span>
                        <span>30</span>
                        <span>50</span>
                        <span>70</span>
                        <span>90</span>
                        <span>110</span>
                        <span>240</span>
                    </div>
                </div>
                {/* Dummy Map - with multiple "fleet" icons */}
                <div className="ml-6 w-1/3 h-full bg-gray-700/30 rounded-lg flex flex-col items-center justify-center p-2 relative">
                        <InteractiveMap/>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">Hotline 1 Fleet bwtfd-ig</p>
            </div>
          </main>

          <footer className="p-4 text-sm text-center text-gray-400 border-t border-white/10">
            © 2025 NeuroFleetX | AI Urban Mobility
          </footer>
        </div>
      </div>
    </div>
  );
}