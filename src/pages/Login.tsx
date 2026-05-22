import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  Landmark,
  Sparkles,
  Activity,
  ArrowRight,
  Lock,
  Building2,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center justify-center px-4 py-10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-[-180px] right-[-180px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <Sparkles className="text-cyan-400" size={15} />

            <span className="text-xs tracking-wide text-slate-300">
              NexaRise Institutional Engine
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl xl:text-6xl font-black leading-tight tracking-tight">
            Circular
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Capital
            </span>

            <br />

            Engine
          </h1>

          <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-xl">
            Institutional MSME origination, escrow capital
            routing, innovation financing, and IPO-linked
            execution workflows.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Landmark
                  className="text-cyan-400"
                  size={22}
                />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                Escrow
              </h3>

              <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                Live institutional capital routing engine.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck
                  className="text-blue-400"
                  size={22}
                />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                Compliance
              </h3>

              <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                AI-powered institutional validation system.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Activity
                  className="text-emerald-400"
                  size={22}
                />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                Analytics
              </h3>

              <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                Live institutional intelligence monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* LOGIN PANEL */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />

          <div className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-cyan-400 font-semibold tracking-wide uppercase text-xs">
                  Secure Access
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  Login
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <Lock className="text-cyan-400" size={24} />
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
              <div>
                <label className="text-xs text-slate-400 mb-2 block">
                  Institution Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="admin@nexarise.org"
                    className="w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-3 pl-12 text-sm outline-none focus:border-cyan-500 transition-all duration-300"
                  />

                  <Building2
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    size={18}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 mb-2 block">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-4 py-3 pl-12 text-sm outline-none focus:border-cyan-500 transition-all duration-300"
                  />

                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    size={18}
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />

                  Remember me
                </label>

                <button className="text-cyan-400 hover:text-cyan-300 transition">
                  Forgot?
                </button>
              </div>

              {/* Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-sm font-bold transition-all duration-300 hover:scale-[1.01] shadow-xl shadow-cyan-500/20"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                    Initializing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Access Dashboard

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                )}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/5">
                <p className="text-slate-500 text-[10px]">
                  Institutions
                </p>

                <h3 className="text-lg font-bold mt-1">
                  128+
                </h3>
              </div>

              <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/5">
                <p className="text-slate-500 text-[10px]">
                  Escrow
                </p>

                <h3 className="text-lg font-bold mt-1">
                  ₹5.2Cr
                </h3>
              </div>

              <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/5">
                <p className="text-slate-500 text-[10px]">
                  Status
                </p>

                <h3 className="text-emerald-400 text-lg font-bold mt-1">
                  LIVE
                </h3>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-xs">
                NexaRise Institutional Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;