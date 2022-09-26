import React from "react";

export default function Buttons({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` text-white font-medium  rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
