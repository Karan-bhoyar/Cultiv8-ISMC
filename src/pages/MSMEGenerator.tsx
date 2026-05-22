<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  FileBadge2,
  ArrowRight,
  Activity,
  Wallet,
} from "lucide-react";

import { useAppStore } from "../store/useAppStore";

const initialForm = {
  studentName: "",
  aadhaar: "",
  collegeId: "",
  projectTitle: "",
  abstract: "",
};

const MSMEGenerator = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState({
    studentName: "",
    aadhaar: "",
    collegeId: "",
    projectTitle: "",
    abstract: "",
  });

  const [progress, setProgress] = useState(0);

  const {
    generateMSME,
    msmesGenerated,
    escrowLocked,
  } = useAppStore();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);

            return 100;
          }

          return prev + 5;
        });
      }, 180);
    }

    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      studentName: "",
      aadhaar: "",
      collegeId: "",
      projectTitle: "",
      abstract: "",
    };

    if (!formData.studentName.trim()) {
      newErrors.studentName =
        "Student name is required";
    }

    if (!/^\d{12}$/.test(formData.aadhaar)) {
      newErrors.aadhaar =
        "Aadhaar must be exactly 12 digits";
    }

    if (!formData.collegeId.trim()) {
      newErrors.collegeId =
        "College ID is required";
    }

    if (!formData.projectTitle.trim()) {
      newErrors.projectTitle =
        "Project title is required";
    }

    if (formData.abstract.trim().length < 50) {
      newErrors.abstract =
        "Abstract must contain minimum 50 characters";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleGenerate = async () => {
    const isValid = validateForm();

    if (!isValid) return;

    setLoading(true);
    setSuccess(false);
    setProgress(0);

    const payload = {
      id: crypto.randomUUID(),

      studentName: formData.studentName,

      aadhaar: formData.aadhaar,

      collegeId: formData.collegeId,

      projectTitle: formData.projectTitle,

      abstract: formData.abstract,

      files: [],

      udyamId: `UDYAM-MH-${Math.floor(
        100000 + Math.random() * 900000
      )}`,

      escrowAmount: 100000,

      loanStatus: "Approved",

      escrowStatus: "Processing",

      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      generateMSME(payload);

      localStorage.setItem(
        "latestMSME",
        JSON.stringify(payload)
      );

      setLoading(false);
      setSuccess(true);

      setFormData(initialForm);

      setTimeout(() => {
        navigate("/escrow-status");
      }, 2000);
    }, 4000);
  };

  return (
    <DashboardLayout>
      <div className="relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                MSME Udyam Generator
              </h1>

              <p className="text-slate-400 mt-2">
                Institutional IP Origination &
                Capital Validation Engine
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="bg-slate-900 border border-slate-800 px-5 py-4 rounded-2xl">
                <p className="text-slate-400 text-xs">
                  Active MSMEs
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  {msmesGenerated}
                </h3>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 rounded-2xl">
                <p className="text-white/80 text-xs">
                  Escrow Capital
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  ₹
                  {(
                    escrowLocked / 10000000
                  ).toFixed(1)}
                  Cr
                </h3>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left */}
            <div className="xl:col-span-2">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
                {/* Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <FileBadge2
                      className="text-blue-400"
                      size={28}
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Student Validation Form
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                      Generate institution-linked MSME
                      entity
                    </p>
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Student Name */}
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">
                      Student Name
                    </label>

                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full p-3 rounded-2xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
                    />

                    {errors.studentName && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  {/* Aadhaar */}
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">
                      Aadhaar Number
                    </label>

                    <input
                      type="text"
                      name="aadhaar"
                      maxLength={12}
                      value={formData.aadhaar}
                      onChange={(e) => {
                        const onlyNums =
                          e.target.value.replace(
                            /\D/g,
                            ""
                          );

                        handleChange({
                          target: {
                            name: "aadhaar",
                            value: onlyNums,
                          },
                        } as any);
                      }}
                      placeholder="XXXXXXXXXXXX"
                      className="w-full p-3 rounded-2xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
                    />

                    {errors.aadhaar && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.aadhaar}
                      </p>
                    )}
                  </div>

                  {/* College ID */}
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">
                      College ID
                    </label>

                    <input
                      type="text"
                      name="collegeId"
                      value={formData.collegeId}
                      onChange={handleChange}
                      placeholder="Institution ID"
                      className="w-full p-3 rounded-2xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
                    />

                    {errors.collegeId && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.collegeId}
                      </p>
                    )}
                  </div>

                  {/* Project Title */}
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">
                      Project Title
                    </label>

                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleChange}
                      placeholder="AI Healthcare Platform"
                      className="w-full p-3 rounded-2xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
                    />

                    {errors.projectTitle && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.projectTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Abstract */}
                <div className="mt-5">
                  <label className="text-sm text-slate-400 block mb-2">
                    Project Abstract
                  </label>

                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder="Describe your innovation and commercialization strategy..."
                    className="w-full h-40 p-4 rounded-2xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none resize-none"
                  />

                  {errors.abstract && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.abstract}
                    </p>
                  )}
                </div>

                {/* Progress */}
                {loading && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-slate-300">
                        AI Validation Processing...
                      </p>

                      <p className="text-sm text-cyan-400">
                        {progress}%
                      </p>
                    </div>

                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="mt-8 w-full rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-base font-semibold hover:scale-[1.01] transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <Loader2 className="animate-spin" />

                      Validating Institutional Data...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      Validate & Generate MSME

                      <ArrowRight size={20} />
                    </div>
                  )}
                </button>

                {/* Success */}
                {success && (
                  <div className="mt-8 rounded-3xl border border-green-500/30 bg-green-500/10 p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2
                          className="text-green-400"
                          size={30}
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-green-400">
                          MSME Successfully Generated
                        </h3>

                        <p className="text-slate-300 mt-2">
                          Redirecting to escrow
                          status...
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Verification */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck
                      className="text-green-400"
                      size={28}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Verification Engine
                    </h3>

                    <p className="text-slate-400 text-sm">
                      AI compliance monitoring
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Identity Validation",
                    "Institution Verification",
                    "Innovation Classification",
                    "Patent Eligibility",
                    "Risk Assessment",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-slate-800 rounded-2xl p-4"
                    >
                      <span className="text-sm">
                        {item}
                      </span>

                      <span className="text-green-400 text-sm font-semibold">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>

             
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

=======
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

>>>>>>> 2988c110b1e35e6b17f929dde7c3cea20b841a5d
export default MSMEGenerator;