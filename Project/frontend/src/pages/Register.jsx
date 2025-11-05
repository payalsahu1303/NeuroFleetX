import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:8080/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Registration failed. Try a different email.");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen font-sans bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-city.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-[400px] p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-white/20 backdrop-blur-xl bg-white/10 text-white"
      >
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="NeuroFleetX Logo" className="w-16 mb-3" />
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Create Account
          </h1>
          <p className="text-sm text-gray-300">
            Join the AI Mobility Revolution
          </p>
        </div>

        {error && (
          <p className="py-2 mb-4 text-sm text-center rounded-md bg-red-500/80">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 pl-4 text-white placeholder-gray-300 border rounded-md bg-white/20 border-white/30 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 pl-4 text-white placeholder-gray-300 border rounded-md bg-white/20 border-white/30 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 pl-4 text-white placeholder-gray-300 border rounded-md bg-white/20 border-white/30 focus:outline-none"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 text-black border rounded-md bg-white/20 border-white/30 focus:outline-none"
          >
            <option value="ADMIN">Admin</option>
            <option value="FLEET_MANAGER">Fleet Manager</option>
            <option value="DRIVER">Driver</option>
            <option value="CUSTOMER">Customer</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] font-medium text-white shadow-lg hover:opacity-90 transition-all duration-300"
        >
          REGISTER
        </button>

        <p className="mt-4 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
