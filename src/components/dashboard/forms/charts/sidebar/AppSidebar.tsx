import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Landmark,
  BarChart3,
} from "lucide-react";

const AppSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        NexaRise
      </h1>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 text-slate-300 hover:text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/msme-generator"
          className="flex items-center gap-3 text-slate-300 hover:text-white"
        >
          <FileText size={20} />
          MSME Generator
        </Link>

        <Link
          to="/escrow-status"
          className="flex items-center gap-3 text-slate-300 hover:text-white"
        >
          <Landmark size={20} />
          Escrow Status
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 text-slate-300 hover:text-white"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>
      </nav>
    </div>
  );
};

export default AppSidebar;