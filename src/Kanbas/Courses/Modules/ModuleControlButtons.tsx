import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
      />
      <FaTrash
        className="text-danger me-3 mb-1"
        onClick={() => deleteModule(moduleId)}
      />
      <span className="me-2">
        <GreenCheckmark />
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
