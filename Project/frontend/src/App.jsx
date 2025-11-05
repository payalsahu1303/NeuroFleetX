import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FleetPage from "./pages/FleetPage";
import AnalyticsPanel from "./pages/AnalyticsPanel";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* ---------- Public Routes ---------- */}
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/redirect" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ---------- Protected Routes ---------- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fleet"
          element={
            <ProtectedRoute>
              <FleetPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <AnalyticsPanel />
            </ProtectedRoute>
          }
        />

        {/* ---------- Role-Based Redirect ---------- */}
        <Route
          path="/redirect"
          element={
            role === "ADMIN" ? (
              <Navigate to="/dashboard" replace />
            ) : role === "FLEET_MANAGER" ? (
              <Navigate to="/fleet" replace />
            ) : (
              <Navigate to="/analytics" replace />
            )
          }
        />

        {/* ---------- Fallback for unknown routes ---------- */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
