import React from "react";

function Select({ label, children, ...rest }) {
  return (
    <div className="mb-5 flex flex-col">
      <label className="mb-1.5 text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        {...rest}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
