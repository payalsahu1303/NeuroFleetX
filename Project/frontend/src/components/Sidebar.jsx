import React from "react";
// import { FaHome, FaTruck, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa"; // Removed for Font Awesome
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  // Changed icons to Font Awesome classes as seen in UI image
  { name: "Dashboard", iconClass: "fas fa-chart-line", path: "/dashboard" }, // The active one in UI
  { name: "Fleet", iconClass: "fas fa-truck", path: "/fleet" },
  { name: "Analytics", iconClass: "fas fa-chart-pie", path: "/analytics" }, // Changed icon to match UI
  { name: "Settings", iconClass: "fas fa-cog", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      className="flex flex-col w-64 h-full p-6 text-white rounded-l-2xl" // Added rounded-l-2xl
      style={{
        background: 'rgba(36, 38, 59, 0.7)', // A darker, more opaque background closer to the UI
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
        boxShadow: '0 0 40px rgba(59,130,246,0.1)'
      }}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-start mb-8 pb-4 border-b border-white/10"> {/* Aligned left */}
        <div className="flex items-center mb-3">
            <img
            src="/logo.png"
            alt="NeuroFleetX Logo"
            className="w-12 h-12 object-contain mr-3" // Adjusted size to match UI
            />
            <div>
                <h1 className="text-xl text-white font-bold tracking-wide">
                    NeuroFleetX
                </h1>
                <p className="text-xs text-gray-400">
                    AI Mobility Optimizer
                </p>
            </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col flex-1 space-y-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative flex items-center px-4 py-3 rounded-l-lg cursor-pointer transition-all duration-200
                ${isActive
                  ? "bg-[#2dd4bf]/20 text-white font-semibold border-r-4 border-[#2dd4bf]" // Teal-green active state from UI
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <i className={`${item.iconClass} w-6 mr-3 text-lg ${isActive ? "text-white" : "text-gray-300 opacity-80"}`}></i> {/* Font Awesome icon */}
              <span className={`text-base ${isActive ? "text-white" : "text-gray-300 opacity-90"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button at bottom */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center p-3 mt-auto rounded-lg bg-red-600/80 text-white font-medium shadow-lg hover:bg-red-500/90 transition-all duration-200" // Adjusted to match UI button shape
      >
        <i className="mr-3 fas fa-sign-out-alt"></i> {/* Font Awesome icon */}
        Logout
      </button>
    </div>
  );
}