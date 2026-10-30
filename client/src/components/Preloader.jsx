import React from "react";

function Preloader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-slate-50">
      <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand-600" />
      <p className="text-sm text-slate-500">Loading...</p>
    </div>
  );
}

export default Preloader;
