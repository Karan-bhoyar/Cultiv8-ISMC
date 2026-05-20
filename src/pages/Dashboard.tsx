import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Institutional Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-slate-400">Student IPs</h2>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-slate-400">MSMEs Generated</h2>
          <p className="text-3xl font-bold mt-2">89</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-slate-400">Escrow Locked</h2>
          <p className="text-3xl font-bold mt-2">₹54L</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl">
          <h2 className="text-slate-400">Patent Ready</h2>
          <p className="text-3xl font-bold mt-2">36</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;