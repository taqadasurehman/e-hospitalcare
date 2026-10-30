import React from "react";

function TotalNo({ totalnumber }) {
  return (
    <p className="whitespace-nowrap text-sm text-slate-500">
      Total{" "}
      <span className="ml-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
        {totalnumber}
      </span>
    </p>
  );
}

export default TotalNo;
