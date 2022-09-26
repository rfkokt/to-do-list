import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import moment from "moment";
import "moment/locale/id";
import { Link } from "react-router-dom";

export default function Card({ name, date, onDelete, to }) {
  return (
    <div
      className="animate-slides w-full max-w-sm bg-white rounded-xl drop-shadow-md flex flex-col justify-between"
      data-cy="activity-item"
    >
      <Link to={to}>
        <h1
          className="p-5 h-48 rounded-t-lg font-bold font-lg cursor-pointer"
          data-cy="activity-item-title"
        >
          {name}
        </h1>
      </Link>
      <div className="px-5 pb-5 flex justify-between items-center">
        <h1
          className="flex items-center mt-2.5 mb-5 text-gray-400"
          data-cy="activity-item-date"
        >
          {moment(date).format("Do MMMM YYYY")}
        </h1>
        <p
          onClick={onDelete}
          className="flex justify-between items-center text-gray-400 cursor-pointer"
          data-cy="activity-item-delete-button"
        >
          <RiDeleteBin6Line />
        </p>
      </div>
    </div>
  );
}
