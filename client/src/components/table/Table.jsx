import React from "react";

function Table({ children, mapFunction }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        {children}
        {mapFunction}
      </table>
    </div>
  );
}

export default Table;
