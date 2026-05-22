import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  GraduationCap,
  FileBadge2,
  Landmark,
  Plus,
  Activity,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { useAppStore } from "../store/useAppStore";

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    msmesGenerated,
    escrowLocked,
    latestMSME,
    escrowStage,
  } = useAppStore();

  /*
    REALTIME VALUES
    EVERYTHING STARTS FROM 0
    AUTO UPDATES AFTER FORM SUBMISSION
  */
/*
  REAL COUNTS
  EACH NEW FORM SUBMISSION = +1 COUNT
*/

const studentPipeline =
  latestMSME && msmesGenerated > 0
    ? msmesGenerated
    : 0;

const msmeCount =
  latestMSME && msmesGenerated > 0
    ? msmesGenerated
    : 0;

/*
  ESCROW VALUE
  EACH SUBMISSION = ₹1,00,000
*/

const formattedEscrow =
  escrowLocked > 0
    ? `₹${escrowLocked.toLocaleString(
        "en-IN"
      )}`
    : "₹0";

const cards = [
  {
    title: "Student IP Pipeline",
    value:
      studentPipeline.toLocaleString(
        "en-IN"
      ),
    subtitle:
      studentPipeline > 0
        ? `${studentPipeline} active student ${
            studentPipeline > 1
              ? "innovations"
              : "innovation"
          }`
        : "No active student IP",
    icon: GraduationCap,
  },

  {
    title: "MSME Registrations",
    value:
      msmeCount.toLocaleString("en-IN"),
    subtitle:
      msmeCount > 0
        ? `${msmeCount} MSME ${
            msmeCount > 1
              ? "registrations"
              : "registration"
          } completed`
        : "No MSME generated",
    icon: FileBadge2,
  },

  {
    title: "Escrow Status",
    value: formattedEscrow,
    subtitle:
      escrowLocked > 0
        ? `${msmeCount} escrow ${
            msmeCount > 1
              ? "accounts"
              : "account"
          } locked`
        : "No capital locked",
    icon: Landmark,
  },
];

  return (
    <DashboardLayout>
      <div className="relative min-h-screen overflow-hidden pb-16">
        {/* BACKGROUND */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          {/* HEADER */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-5xl font-bold tracking-tight">
                NexaRise Dashboard
              </h1>

              <p className="text-slate-400 text-lg mt-3">
                Institutional IP Origination &
                Escrow Monitoring Platform
              </p>
            </div>

            {/* LIVE STATUS */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl px-8 py-6 shadow-2xl shadow-cyan-500/20">
              <div className="flex items-center gap-5">
                <Activity
                  size={40}
                  className="animate-pulse"
                />

                <div>
                  <p className="text-white/80">
                    System Status
                  </p>

                  <h2 className="text-4xl font-bold mt-1">
                    ACTIVE
                  </h2>

                  <p className="text-white/80 mt-1">
                    Escrow Stage{" "}
                    {escrowStage}/4
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-5 mb-10">
            {/* NEW IP AUDIT */}
            <button
              onClick={() =>
                navigate("/msme-generator")
              }
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 font-semibold text-lg shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative flex items-center gap-4">
                <Plus size={24} />

                Initiate New IP Audit
              </div>
            </button>

            {/* ESCROW PAGE */}
            <button
              onClick={() =>
                navigate("/escrow-status")
              }
              className="rounded-3xl border border-slate-700 bg-slate-900/90 px-8 py-5 font-semibold text-lg hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <ExternalLink
                  size={22}
                  className="text-cyan-400"
                />

                View Escrow Pipeline
              </div>
            </button>
          </div>

          {/* REALTIME CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-7"
                >
                  {/* GLOW */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">
                          {item.title}
                        </p>

                        <h2 className="text-5xl font-bold mt-4">
                          {item.value}
                        </h2>

                        <p className="text-slate-500 mt-3">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                        <Icon
                          size={32}
                          className="text-cyan-400"
                        />
                      </div>
                    </div>

                    {/* LIVE STATUS */}
                    <div className="mt-6 flex items-center gap-2">
                      <ArrowUpRight
                        size={18}
                        className={`${
                          latestMSME
                            ? "text-green-400"
                            : "text-slate-500"
                        }`}
                      />

                      <span
                        className={`font-semibold ${
                          latestMSME
                            ? "text-green-400"
                            : "text-slate-500"
                        }`}
                      >
                        {latestMSME
                          ? "Updated"
                          : "Waiting"}
                      </span>

                      <span className="text-slate-500">
                        realtime status
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LATEST MSME */}
          {latestMSME && (
            <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-8">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
                {/* LEFT */}
                <div>
                  <p className="text-slate-400 text-sm">
                    Latest MSME Generated
                  </p>

                  <h2 className="text-3xl font-bold mt-3">
                    {latestMSME.projectTitle}
                  </h2>

                  <div className="mt-4 space-y-2">
                    <p className="text-slate-400">
                      Student Name:
                      <span className="text-white ml-2">
                        {
                          latestMSME.studentName
                        }
                      </span>
                    </p>

                    <p className="text-slate-400">
                      UDYAM ID:
                      <span className="text-cyan-400 ml-2">
                        {latestMSME.udyamId}
                      </span>
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-start xl:items-end gap-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-7 py-5">
                    <p className="text-green-400 text-sm">
                      Escrow Locked
                    </p>

                    <h2 className="text-4xl font-bold text-green-400 mt-2">
                      ₹1,00,000
                    </h2>
                  </div>

                  <button
                    onClick={() =>
                      navigate(
                        "/escrow-status"
                      )
                    }
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2"
                  >
                    Open Escrow Pipeline

                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;