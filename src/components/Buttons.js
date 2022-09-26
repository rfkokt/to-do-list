import React from "react";

export default function Buttons({ children, className, onClick, data_cy }) {
  return (
    <button
      onClick={onClick}
      data-cy={data_cy}
      className={` text-white font-medium  rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
