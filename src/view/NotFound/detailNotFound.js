import React from "react";
import { newDetailActivity } from "../../Assets";

export default function DetailNotFound({ onClick, className }) {
  return (
    <div className="flex justify-center mt-16" data-cy="activity-empty-state">
      <img
        src={newDetailActivity}
        className={className}
        onClick={onClick}
        alt="data not found"
      />
    </div>
  );
}
