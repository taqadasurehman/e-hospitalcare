import React from "react";

function FormLayout({ children, formName }) {
  return (
    <div className="flex">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="mb-6 border-b border-slate-100 pb-4 text-lg font-semibold capitalize text-slate-900">
          {formName?.toLowerCase()}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
