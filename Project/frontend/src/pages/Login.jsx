import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen font-sans bg-center bg-cover"
      style={{
        backgroundImage: `url('/bg-city.png')`, // place your background image in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Glassmorphic Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-[400px] p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-white/20 backdrop-blur-xl bg-white/10 text-white"
      >
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="NeuroFleetX Logo" className="w-16 mb-3" />
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            NeuroFleetX
          </h1>
          <p className="text-sm text-gray-300">
            AI-Driven Urban Mobility Optimization
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="py-2 mb-4 text-sm text-center rounded-md bg-red-500/80">
            {error}
          </p>
        )}

        {/* Inputs */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 pl-4 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#d0d0d0]"
            />
            <i className="fas fa-user absolute right-4 top-3.5 text-gray-300"></i>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 pl-4 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#d0d0d0]"
            />
            <i className="fas fa-lock absolute right-4 top-3.5 text-gray-300"></i>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] font-medium text-white shadow-lg hover:opacity-90 transition-all duration-300"
        >
          LOGIN
        </button>

        {/* Footer Links */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
          <a href="#" className="text-gray-300 hover:text-white">
            Forgot Password?
          </a>
          <a href="/register" className="text-gray-300 hover:text-white">
            Create Account
          </a>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            type="button"
            className="text-gray-300 transition bg-transparent hover:text-white"
          >
            <i className="text-xl fab fa-google"></i>
          </button>
          <button
            type="button"
            className="text-gray-300 transition bg-transparent hover:text-white"
          >
            <i className="text-xl fab fa-apple"></i>
          </button>
          <button
            type="button"
            className="text-gray-300 transition bg-transparent hover:text-white"
          >
            <i className="text-xl fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
