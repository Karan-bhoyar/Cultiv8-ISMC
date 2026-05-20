import DashboardLayout from "../layouts/DashboardLayout";

const MSMEGenerator = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        MSME Generator
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl max-w-2xl">
        <div className="space-y-4">
          <input
            placeholder="Student Name"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <input
            placeholder="Aadhaar Number"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <input
            placeholder="College ID"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <input
            placeholder="Project Title"
            className="w-full p-3 rounded-lg bg-slate-800"
          />

          <textarea
            placeholder="Project Abstract"
            className="w-full p-3 rounded-lg bg-slate-800 h-40"
          />

          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg">
            Validate & Generate MSME Udyam
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MSMEGenerator;