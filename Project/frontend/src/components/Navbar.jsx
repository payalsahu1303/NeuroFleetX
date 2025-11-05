import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Admin"; // Default to "Admin" as per UI
  const role = localStorage.getItem("role") || "Admin"; // Default to "Admin" as per UI

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between p-4 px-6 rounded-t-xl bg-[#24263b] text-white border-b border-white/10"> {/* Added border-b */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-300">Welcome,</span>
        <span className="font-semibold">{name}</span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-300">Role:</span>
        <span className="font-semibold">{role}</span>
      </div>
      <button
        onClick={handleLogout}
        className="px-5 py-2 text-sm font-medium rounded-lg bg-[#ef4444] hover:bg-[#dc2626] transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
}