import React from "react";

function Tbody({ children }) {
  return (
    <tbody className="border-b border-slate-100 last:border-0">
      <tr className="text-slate-700 transition-colors hover:bg-slate-50">
        {children}
      </tr>
    </tbody>
  );
}

export default Tbody;
