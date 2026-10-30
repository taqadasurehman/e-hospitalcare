import React from "react";

function Button({ children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100 disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
