// src/components/RoleRedirect.jsx
import { Navigate } from "react-router-dom";

export default function RoleRedirect() {
  const role = localStorage.getItem("role");

  switch (role) {
    case "ADMIN":
      return <Navigate to="/dashboard" replace />;
    case "FLEET_MANAGER":
      return <Navigate to="/fleet" replace />;
    case "ANALYST":
      return <Navigate to="/analytics" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
}
