import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <span className="badge bg-light text-dark border border-secondary rounded-pill me-2 px-3 py-2">
        40% of Total
      </span>
      <span className="me-2">
        <FaPlus />
      </span>
      <span>
        <IoEllipsisVertical className="fs-4" />
      </span>
    </div>
  );
}
