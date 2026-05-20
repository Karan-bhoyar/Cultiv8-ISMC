import DashboardLayout from "../layouts/DashboardLayout";

const steps = [
  "MSME Registered",
  "Loan Disbursed",
  "Capital Locked in Escrow",
  "Ready for IPO Patent Filing",
];

const EscrowStatus = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-10">
        Escrow Pipeline
      </h1>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex-1">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold">
                ✓
              </div>

              <p className="mt-4 text-center max-w-[150px]">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default EscrowStatus;