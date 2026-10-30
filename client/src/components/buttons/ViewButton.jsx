import React from "react";
import { Link } from "react-router-dom";

function ViewButton({ viewFunction, style, children, ...rest }) {
  return (
    <Link
      className={`inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-200 ${style || ""}`}
      to={viewFunction}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default ViewButton;
