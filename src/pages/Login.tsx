import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h1 className="text-3xl font-bold text-center mb-2">
          NexaRise
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Institutional Origination Engine
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Institution Email"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;