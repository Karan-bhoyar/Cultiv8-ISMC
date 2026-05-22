<<<<<<< HEAD
import DashboardLayout from "../layouts/DashboardLayout";

import {
  CheckCircle2,
  Landmark,
  Wallet,
  ShieldCheck,
  FileBadge2,
  Clock3,
  Activity,
} from "lucide-react";

import { useAppStore } from "../store/useAppStore";

const EscrowStatus = () => {
  const { escrowStage, latestMSME } = useAppStore();

  const steps = [
    {
      title: "MSME Registered",
      subtitle: "Udyam entity successfully created",
      icon: FileBadge2,
    },

    {
      title: "LaaS API Loan Disbursed",
      subtitle: "Loan successfully approved & disbursed",
      icon: Wallet,
    },

    {
      title: "Capital Locked in Escrow",
      subtitle: "₹1,00,000 secured in institutional escrow",
      icon: Landmark,
      amount: "₹1,00,000",
    },

    {
      title: "Ready for IPO Patent Filing",
      subtitle: "Innovation execution pipeline activated",
      icon: ShieldCheck,
    },
  ];

  /*
    FIXED LOGIC

    Stage 1 -> Step 1 active
    Stage 2 -> Step 1 completed, Step 2 active
    Stage 3 -> Step 1 + 2 completed, Step 3 active
    Stage 4 -> ALL COMPLETED GREEN
  */

  const getStatus = (index: number) => {
    // FINAL STAGE = EVERYTHING COMPLETED
    if (escrowStage >= 4) {
      return "completed";
    }

    // CURRENT ACTIVE STEP
    if (escrowStage === index + 1) {
      return "active";
    }

    // PREVIOUS COMPLETED STEPS
    if (escrowStage > index + 1) {
      return "completed";
    }

    // FUTURE STEPS
    return "pending";
  };

  return (
    <DashboardLayout>
      <div className="relative min-h-screen overflow-hidden pb-20">
        {/* BACKGROUND */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          {/* HEADER */}
          <div className="mb-16 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold tracking-tight">
                Escrow Capital Pipeline
              </h1>

              <p className="text-slate-400 text-lg mt-3">
                Real-time Circular Capital Flow Monitoring
                Engine
              </p>
            </div>

            {/* LIVE STATUS */}
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl px-8 py-6 shadow-2xl shadow-cyan-500/20">
              <div className="flex items-center gap-5">
                <Activity
                  size={40}
                  className="animate-pulse"
                />

                <div>
                  <p className="text-white/80">
                    Pipeline Status
                  </p>

                  <h2 className="text-4xl font-bold mt-1">
                    LIVE
                  </h2>

                  <p className="text-white/80 mt-1">
                    Stage {escrowStage}/4 Active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EMPTY STATE */}
          {!latestMSME && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
              <Landmark
                size={60}
                className="mx-auto text-cyan-400 mb-6"
              />

              <h2 className="text-3xl font-bold">
                No MSME Generated Yet
              </h2>

              <p className="text-slate-400 mt-3">
                Submit MSME form to start escrow pipeline
              </p>
            </div>
          )}

          {/* MAIN */}
          {latestMSME && (
            <>
              {/* TOP CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                  <p className="text-slate-400 text-sm">
                    Student Name
                  </p>

                  <h2 className="text-2xl font-bold mt-3">
                    {latestMSME.studentName}
                  </h2>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                  <p className="text-slate-400 text-sm">
                    Project Title
                  </p>

                  <h2 className="text-xl font-bold mt-3">
                    {latestMSME.projectTitle}
                  </h2>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                  <p className="text-slate-400 text-sm">
                    UDYAM ID
                  </p>

                  <h2 className="text-xl font-bold text-cyan-400 mt-3">
                    {latestMSME.udyamId}
                  </h2>
                </div>

                {/* ESCROW */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl shadow-green-500/20">
                  <p className="text-white/80 text-sm">
                    Escrow Locked Amount
                  </p>

                  <h2 className="text-5xl font-bold mt-3">
                    ₹1,00,000
                  </h2>
                </div>
              </div>

              {/* PIPELINE */}
              <div className="relative">
                {/* LINE */}
                <div className="hidden xl:block absolute top-16 left-0 right-0 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000"
                    style={{
                      width: `${(escrowStage / 4) * 100}%`,
                    }}
                  />
                </div>

                {/* STEPS */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                  {steps.map((step, index) => {
                    const Icon = step.icon;

                    const status = getStatus(index);

                    return (
                      <div
                        key={index}
                        className="relative flex flex-col items-center text-center"
                      >
                        {/* GLOW */}
                        <div
                          className={`absolute top-0 w-32 h-32 blur-3xl rounded-full ${
                            status === "completed"
                              ? "bg-green-500/20"
                              : status === "active"
                              ? "bg-cyan-500/20"
                              : "bg-slate-700/20"
                          }`}
                        />

                        {/* CIRCLE */}
                        <div
                          className={`relative z-10 w-32 h-32 rounded-full border flex items-center justify-center transition-all duration-500 ${
                            status === "completed"
                              ? "border-green-400/40 bg-slate-900 shadow-[0_0_40px_rgba(34,197,94,0.35)]"
                              : status === "active"
                              ? "border-cyan-400/40 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                              : "border-slate-700 bg-slate-900"
                          }`}
                        >
                          <div
                            className={`w-24 h-24 rounded-full flex items-center justify-center ${
                              status === "completed"
                                ? "bg-gradient-to-br from-green-500 to-emerald-500"
                                : status === "active"
                                ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                                : "bg-slate-800"
                            }`}
                          >
                            <Icon
                              size={40}
                              className="text-white"
                            />
                          </div>

                          {/* ACTIVE ANIMATION */}
                          {status === "active" && (
                            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
                          )}
                        </div>

                        {/* CONTENT */}
                        <div className="mt-8">
                          {/* STATUS */}
                          <div className="flex items-center justify-center gap-2">
                            {/* COMPLETED */}
                            {status === "completed" && (
                              <>
                                <CheckCircle2
                                  className="text-green-400"
                                  size={18}
                                />

                                <span className="text-green-400 font-semibold text-sm">
                                  Approved
                                </span>
                              </>
                            )}

                            {/* ACTIVE */}
                            {status === "active" && (
                              <>
                                <Clock3
                                  className="text-cyan-400 animate-pulse"
                                  size={18}
                                />

                                <span className="text-cyan-400 font-semibold text-sm">
                                  Processing
                                </span>
                              </>
                            )}

                            {/* PENDING */}
                            {status === "pending" && (
                              <span className="text-slate-500 font-semibold text-sm">
                                Pending
                              </span>
                            )}
                          </div>

                          {/* TITLE */}
                          <h3 className="mt-4 text-2xl font-bold">
                            {step.title}
                          </h3>

                          {/* SUBTITLE */}
                          <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                            {step.subtitle}
                          </p>

                          {/* AMOUNT */}
                          {step.amount &&
                            escrowStage >= 3 && (
                              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-green-500/10 border border-green-500/20">
                                <Landmark
                                  size={16}
                                  className="text-green-400"
                                />

                                <span className="text-green-400 font-bold">
                                  ₹1,00,000
                                </span>
                              </div>
                            )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM STATUS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                {/* ESCROW */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                  <p className="text-slate-400">
                    Escrow Locked Amount
                  </p>

                  <h2 className="text-5xl font-bold text-green-400 mt-4">
                    ₹1,00,000
                  </h2>
                </div>

                {/* API */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                  <p className="text-slate-400">
                    LaaS API Status
                  </p>

                  <h2
                    className={`text-4xl font-bold mt-4 ${
                      escrowStage >= 2
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {escrowStage >= 2
                      ? "Disbursed"
                      : "Pending"}
                  </h2>
                </div>

                {/* FINAL */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl shadow-green-500/20">
                  <p className="text-white/80">
                    IPO Patent Filing
                  </p>

                  <h2 className="text-5xl font-bold mt-4">
                    {escrowStage >= 4
                      ? "APPROVED"
                      : `${escrowStage * 25}%`}
                  </h2>

                  <p className="mt-5 text-white/90 leading-relaxed">
                    Innovation execution pipeline ready
                    for institutional patent filing.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

=======
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

>>>>>>> 2988c110b1e35e6b17f929dde7c3cea20b841a5d
export default EscrowStatus;