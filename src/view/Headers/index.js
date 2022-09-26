import React from "react";

export default function Headers() {
  return (
    <div
      className="bg-primary h-24 flex items-center"
      data-cy="header-background"
    >
      <div className="mx-auto container">
        <h1
          className="text-white text-2xl font-bold items-center"
          data-cy="header-title"
        >
          TO DO LIST APP
        </h1>
      </div>
    </div>
  );
}
