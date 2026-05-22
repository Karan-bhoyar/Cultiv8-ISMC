import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, FileText, Landmark, Menu, X } from "lucide-react";

const AppSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-slate-950 border-b border-slate-800 p-4">
        <h1 className="text-xl font-bold text-blue-400">NexaRise</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <h1 className="text-2xl font-bold text-blue-400 mb-10 hidden md:block">
          NexaRise
        </h1>

        <nav className="space-y-4">
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-slate-300 hover:text-white"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/msme-generator"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-slate-300 hover:text-white"
          >
            <FileText size={20} />
            MSME Generator
          </Link>

          <Link
            to="/escrow-status"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-slate-300 hover:text-white"
          >
            <Landmark size={20} />
            Escrow Status
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AppSidebar;