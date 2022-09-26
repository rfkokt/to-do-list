import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function CardV2({
  onDelete,
  title,
  color,
  onEdit,
  onClick,
  isChecked,
}) {
  const [checked, setChecked] = useState(isChecked);
  const colorPriority =
    color === "very-high"
      ? "bg-red-500"
      : color === " high"
      ? "bg-orange-500"
      : color === "normal"
      ? "bg-green-500"
      : color === "low"
      ? "bg-blue-500"
      : "bg-purple-500";

  return (
    <div className="mb-4 animate-slides bg-white rounded-xl drop-shadow-lg">
      <div className="flex p-5 justify-between items-center">
        <div className="flex items-center">
          <input
            data-cy="todo-item-checkbox"
            type={"checkbox"}
            onClick={(e) => {
              onClick();
              setChecked(e.target.checked);
            }}
            checked={checked}
            className="mr-4 h-5 w-5 bg-blue-900"
          />
          <div
            data-cy="todo-item-priority-indicator"
            className={`rounded-full ${colorPriority} h-4 w-4 mr-4`}
          />
          <h1
            data-cy="todo-item-title"
            className={`${
              checked ? "line-through text-gray-400" : ""
            } flex items-center mr-4`}
          >
            {title}
          </h1>
          <div
            className="item-center text-gray-400 cursor-pointer"
            data-cy="todo-item-edit-button"
            onClick={onEdit}
          >
            <HiOutlinePencilAlt size={15} />
          </div>
        </div>
        <p
          onClick={onDelete}
          className="flex justify-between items-center cursor-pointer"
          data-cy="todo-item-delete-button"
        >
          <RiDeleteBin6Line />
        </p>
      </div>
    </div>
  );
}
