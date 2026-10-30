import React, { useState, useContext } from "react";
import bedbg from "../assets/doctor-g54d4d9aa7_1920.jpg";
import {
  TbBuildingHospital,
  TbMail,
  TbLock,
  TbArrowRight,
  TbStethoscope,
  TbCalendarEvent,
  TbDroplet,
} from "react-icons/tb";
import { Navigate } from "react-router-dom";
import { loginContext } from "./context/auth";
import ButtonPreloader from "../components/ButtonPreloader";

// Demo accounts created for local testing; remove this list before going live
const demoAccounts = [
  "admin",
  "doctor",
  "nurse",
  "receptionist",
  "pharmacist",
  "labouratorist",
  "accountant",
];

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const { login, loggedIn } = useContext(loginContext);
  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(formData.email, formData.password);
    setLoading(false);
  };

  if (loggedIn) {
    return <Navigate to={"/dashboard"} />;
  }

  const features = [
    [TbStethoscope, "Patients, doctors and staff in one place"],
    [TbCalendarEvent, "Appointments, queues and bed allotment"],
    [TbDroplet, "Blood bank, reports and payments"],
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Brand panel */}
      <div
        className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-cover bg-center p-12 text-white lg:flex"
        style={{ backgroundImage: `url(${bedbg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-slate-900/80" />
        <div className="relative flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <TbBuildingHospital size={22} />
          </div>
          <span className="text-lg font-semibold">e-HospitCare</span>
        </div>
        <div className="relative max-w-md">
          <h1 className="text-4xl font-semibold leading-tight">
            Hospital management, made simple.
          </h1>
          <p className="mt-4 text-brand-100">
            One workspace for every department, from reception to the lab.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map(([icon, text]) => (
              <li key={text} className="flex items-center gap-3 text-sm text-brand-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  {React.createElement(icon, { size: 18 })}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-brand-200">
          © {new Date().getFullYear()} e-HospitCare
        </p>
      </div>

      {/* Form panel */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <TbBuildingHospital size={22} />
            </div>
            <span className="text-lg font-semibold text-slate-900">e-HospitCare</span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
          <p className="mt-1 text-sm text-slate-500">
            Sign in to your account to continue.
          </p>

          <form onSubmit={submitLogin} className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <TbMail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="you@hospital.com"
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <TbLock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100 disabled:opacity-70"
            >
              {loading ? (
                <ButtonPreloader />
              ) : (
                <>
                  Sign in <TbArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 rounded-xl border border-dashed border-slate-200 p-4">
            <p className="text-xs font-medium text-slate-500">
              Demo accounts (password: <span className="font-mono">password</span>)
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {demoAccounts.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() =>
                    setFormData({ email: `${role}@hospital.com`, password: "password" })
                  }
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {role === "labouratorist" ? "laboratorist" : role}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
