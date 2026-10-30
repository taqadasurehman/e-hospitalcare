import React from "react";
import { Link } from "react-router-dom";

function Forbidden() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-slate-50 text-center">
      <p className="text-6xl font-bold text-brand-600">403</p>
      <h1 className="text-xl font-semibold text-slate-900">Access denied</h1>
      <p className="text-sm text-slate-500">You do not have permission to view this page.</p>
      <Link to="/dashboard" className="mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
        Back to dashboard
      </Link>
    </div>
  );
}

export default Forbidden;
