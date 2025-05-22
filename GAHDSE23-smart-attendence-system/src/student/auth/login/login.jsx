import React, { useState } from "react";
import { studentLogin } from "../../../services/studentService";
import { useNavigate } from "react-router-dom"; // <-- useNavigate instead of Navigate

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await studentLogin(form);
      if (res.token) {
        localStorage.setItem("token", res.token);
        navigate("/student-dashboard"); // <-- navigate to dashboard
      }
      console.log("Login successful:", res);
    } catch (err) {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center
justify-center bg-gray-200"
    >
      <div
        className="w-[30%] p-8 space-y-6 bg-gray-100 rounded-lg
shadow-lg animate-float"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;