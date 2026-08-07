import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { navigate, register, handleSubmit, reset, errors, loginForm } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-300 mt-2">Login to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("username", {
                  required: "Username is required",
                })}
                type="text"
                placeholder="Enter Username"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-cyan-500/30 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-300 mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;