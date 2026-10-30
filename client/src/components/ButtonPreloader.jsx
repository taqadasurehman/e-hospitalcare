import React from "react";

function ButtonPreloader() {
  return (
    <span className="flex items-center justify-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      Please wait
    </span>
  );
}

export default ButtonPreloader;
