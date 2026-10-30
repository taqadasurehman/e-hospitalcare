import React from "react";

function Td({ children, ...rest }) {
  return (
    <td className="whitespace-nowrap px-4 py-3 align-middle" {...rest}>
      {children}
    </td>
  );
}

export default Td;
