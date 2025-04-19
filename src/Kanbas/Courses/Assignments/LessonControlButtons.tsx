import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      {/* Add margin-end (me-3) to GreenCheckmark for spacing */}
      <span className="me-3">
        <GreenCheckmark />
      </span>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
