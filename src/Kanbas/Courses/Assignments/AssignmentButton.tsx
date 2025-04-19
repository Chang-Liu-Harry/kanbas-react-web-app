import { BsGripVertical } from "react-icons/bs";
import { MdOutlineEditNote } from "react-icons/md";

export default function AssignmentButton() {
    return (
        <button className="btn btn-light d-flex align-items-center">
            <BsGripVertical className="me-4 fs-4 text-muted" />
            <MdOutlineEditNote className="fs-3 text-success" />
        </button>
    );
}
