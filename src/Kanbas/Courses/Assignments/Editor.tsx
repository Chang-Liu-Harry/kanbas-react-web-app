// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addAssignment, updateAssignment } from "./reducer";
// import * as coursesClient from "../client";
// import * as assignmentsClient from "./client";

// // 定义 Assignment 接口
// interface Assignment {
//   _id: string;
//   title: string;
//   description: string;
//   points: number;
//   group: string;
//   gradeDisplay: string;
//   submissionType: string;
//   dueDate: string;
//   availableFrom: string;
//   availableUntil: string;
//   course: string;
// }

// export default function AssignmentEditor() {
//   // const { cid = "", aid } = useParams<{ cid: string; aid: string }>(); // 提取路由参数
//   // const { assignments } = useSelector((state: any) => state.assignmentsReducer); // 从 store 获取 assignments

//   const dispatch = useDispatch(); // 获取 dispatch 函数
//   // const navigate = useNavigate();

//   const { cid = "", aid } = useParams<{ cid: string; aid: string }>();
//   const navigate = useNavigate();

//   // 使用默认值初始化 assignment
//   const [assignment, setAssignment] = useState<Assignment>({
//     _id: aid === "New" ? "" : aid || "",
//     title: "",
//     description: "",
//     points: 100,
//     group: "assignments",
//     gradeDisplay: "percentage",
//     submissionType: "online",
//     dueDate: "",
//     availableFrom: "",
//     availableUntil: "",
//     course: cid,
//   });

//   const save = () => {
//     console.log("aid:", aid);
//     console.log("cid:", cid);
//     if (aid === "New") {
//       // 添加新作业
//       const newAssignment = {
//         ...assignment,
//         _id: new Date().getTime().toString(), // 生成一个唯一的 ID
//       };
//       console.log(newAssignment);
//       dispatch(addAssignment(newAssignment));
//     } else {
//       // 更新已有作业
//       dispatch(updateAssignment(assignment));
//     }
//     navigate(`/Kanbas/Courses/${cid}/Assignments`);
//   };

//   // // 根据 URL 中的 ID 获取作业数据
//   // useEffect(() => {
//   //   if (aid === "new") {
//   //     // 新作业，不需要加载数据
//   //     return;
//   //   }

//   //   const fetchedAssignment = assignments.find(
//   //     (a: any) => a._id === aid && a.course === cid
//   //   );
//   //   if (fetchedAssignment) {
//   //     setAssignment(fetchedAssignment);
//   //   }
//   // }, [aid, cid, assignments]);

//   useEffect(() => {
//     const fetchAssignment = async () => {
//       if (aid === "New") {
//         // No need to fetch for new assignment
//         return;
//       }
//       try {
//         const fetchedAssignment = await assignmentsClient.findAssignmentById(
//           aid || ""
//         );
//         setAssignment(fetchedAssignment);
//       } catch (error) {
//         console.error("Error fetching assignment:", error);
//       }
//     };
//     fetchAssignment();
//   }, [aid]);

//   return (
//     <div id="wd-assignments-editor" className="container mt-4 p-4">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           save();
//         }}
//       >
//         {/* Assignment Name */}
//         <div className="mb-4">
//           <label htmlFor="wd-name" className="form-label fw-bold">
//             Assignment Name
//           </label>
//           <input
//             id="wd-name"
//             className="form-control"
//             value={assignment.title}
//             onChange={(e) =>
//               setAssignment({ ...assignment, title: e.target.value })
//             }
//           />
//         </div>

//         {/* Description Frame */}
//         <div className="mb-4">
//           <textarea
//             id="wd-description"
//             className="form-control"
//             rows={6}
//             value={assignment.description}
//             onChange={(e) =>
//               setAssignment({ ...assignment, description: e.target.value })
//             }
//           />
//         </div>

//         {/* Points and Assignment Group */}
//         <div className="row mb-4">
//           <div className="col-md-3 d-flex align-items-center">
//             <label htmlFor="wd-points" className="form-label fw-bold mb-0">
//               Points
//             </label>
//           </div>
//           <div className="col-md-9">
//             <input
//               id="wd-points"
//               type="number"
//               className="form-control"
//               value={assignment.points}
//               onChange={(e) =>
//                 setAssignment({ ...assignment, points: Number(e.target.value) })
//               }
//             />
//           </div>
//         </div>

//         <div className="row mb-4">
//           <div className="col-md-3 d-flex align-items-center">
//             <label htmlFor="wd-group" className="form-label fw-bold mb-0">
//               Assignment Group
//             </label>
//           </div>
//           <div className="col-md-9">
//             <select
//               id="wd-group"
//               className="form-select"
//               value={assignment.group}
//               onChange={(e) =>
//                 setAssignment({ ...assignment, group: e.target.value })
//               }
//             >
//               <option value="assignments">ASSIGNMENTS</option>
//             </select>
//           </div>
//         </div>

//         {/* Display Grade as */}
//         <div className="row mb-4">
//           <div className="col-md-3 d-flex align-items-center">
//             <label
//               htmlFor="wd-grade-display"
//               className="form-label fw-bold mb-0"
//             >
//               Display Grade as
//             </label>
//           </div>
//           <div className="col-md-9">
//             <select id="wd-grade-display" className="form-select">
//               <option value="percentage">Percentage</option>
//             </select>
//           </div>
//         </div>

//         {/* Submission Type Section */}
//         <div className="row mb-4 align-items-start">
//           <div className="col-md-3">
//             <label
//               htmlFor="wd-submission-type"
//               className="form-label fw-bold mb-0"
//             >
//               Submission Type
//             </label>
//           </div>
//           <div className="col-md-9">
//             <div className="card p-3">
//               <select id="wd-submission-type" className="form-select mb-3">
//                 <option value="online">Online</option>
//               </select>

//               <label className="form-label fw-bold">Online Entry Options</label>
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="text-entry"
//                 />
//                 <label className="form-check-label" htmlFor="text-entry">
//                   Text Entry
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="website-url"
//                   defaultChecked
//                 />
//                 <label className="form-check-label" htmlFor="website-url">
//                   Website URL
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="media-recordings"
//                 />
//                 <label className="form-check-label" htmlFor="media-recordings">
//                   Media Recordings
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="student-annotation"
//                 />
//                 <label
//                   className="form-check-label"
//                   htmlFor="student-annotation"
//                 >
//                   Student Annotation
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="file-uploads"
//                 />
//                 <label className="form-check-label" htmlFor="file-uploads">
//                   File Uploads
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assign Section */}
//         <div className="row mb-4 align-items-start">
//           <div className="col-md-3">
//             <label htmlFor="wd-assign-to" className="form-label fw-bold mb-0">
//               Assign
//             </label>
//           </div>
//           <div className="col-md-9">
//             <div className="card p-3">
//               {/* Assign to */}
//               <label htmlFor="wd-assign-to" className="form-label fw-bold">
//                 Assign to
//               </label>
//               <div className="border p-2 mb-3">
//                 <span className="badge bg-light text-dark me-1">
//                   Everyone{" "}
//                   <button
//                     type="button"
//                     className="btn-close btn-sm"
//                     aria-label="Remove"
//                   ></button>
//                 </span>
//               </div>

//               {/* Due Date */}
//               <label htmlFor="wd-due-date" className="form-label fw-bold">
//                 Due
//               </label>
//               <input
//                 id="wd-due-date"
//                 type="datetime-local"
//                 className="form-control mb-3"
//                 value={assignment.dueDate}
//                 onChange={(e) =>
//                   setAssignment({ ...assignment, dueDate: e.target.value })
//                 }
//               />

//               {/* Available From and Until */}
//               <div className="row mb-4">
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold">Available from</label>
//                   <input
//                     type="datetime-local"
//                     className="form-control"
//                     value={assignment.availableFrom}
//                     onChange={(e) =>
//                       setAssignment({
//                         ...assignment,
//                         availableFrom: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold">Until</label>
//                   <input
//                     type="datetime-local"
//                     className="form-control"
//                     value={assignment.availableUntil}
//                     onChange={(e) =>
//                       setAssignment({
//                         ...assignment,
//                         availableUntil: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="d-flex justify-content-end">
//           <Link
//             to={`/Kanbas/Courses/${cid}/Assignments`}
//             type="button"
//             className="btn btn-outline-secondary me-3"
//           >
//             Cancel
//           </Link>
//           <button type="submit" className="btn btn-danger">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment as updateAssignmentAction } from "./reducer";
import * as assignmentsClient from "./client";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  group: string;
  gradeDisplay: string;
  submissionType: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid = "", aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState<Assignment>({
    _id: aid === "New" ? "" : aid || "",
    title: "",
    description: "",
    points: 100,
    group: "assignments",
    gradeDisplay: "percentage",
    submissionType: "online",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      if (aid && aid !== "New") {
        // Fetch existing assignment from server
        const fetchedAssignment = await assignmentsClient.findAssignmentById(aid);
        setAssignment(fetchedAssignment);
      }
    };
    fetchAssignment();
  }, [aid]);

  const save = async () => {
    if (aid === "New") {
      // Create new assignment in DB
      const newAssignment = await assignmentsClient.createAssignment(cid, assignment);
      // Dispatch addAssignment with the newly created assignment from DB
      dispatch(addAssignment(newAssignment));
    } else {
      // Update existing assignment in DB
      await assignmentsClient.updateAssignment(assignment._id, assignment);
      // Dispatch updateAssignment with the updated assignment data
      dispatch(updateAssignmentAction(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4 p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
      >
        {/* Assignment Name */}
        <div className="mb-4">
          <label htmlFor="wd-name" className="form-label fw-bold">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </div>

        {/* Description Frame */}
        <div className="mb-4">
          <textarea
            id="wd-description"
            className="form-control"
            rows={6}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </div>

        {/* Points and Assignment Group */}
        <div className="row mb-4">
          <div className="col-md-3 d-flex align-items-center">
            <label htmlFor="wd-points" className="form-label fw-bold mb-0">
              Points
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-3 d-flex align-items-center">
            <label htmlFor="wd-group" className="form-label fw-bold mb-0">
              Assignment Group
            </label>
          </div>
          <div className="col-md-9">
            <select
              id="wd-group"
              className="form-select"
              value={assignment.group}
              onChange={(e) =>
                setAssignment({ ...assignment, group: e.target.value })
              }
            >
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        {/* Display Grade as */}
        <div className="row mb-4">
          <div className="col-md-3 d-flex align-items-center">
            <label
              htmlFor="wd-grade-display"
              className="form-label fw-bold mb-0"
            >
              Display Grade as
            </label>
          </div>
          <div className="col-md-9">
            <select
              id="wd-grade-display"
              className="form-select"
              value={assignment.gradeDisplay}
              onChange={(e) =>
                setAssignment({ ...assignment, gradeDisplay: e.target.value })
              }
            >
              <option value="percentage">Percentage</option>
              {/* Add other grade display options if needed */}
            </select>
          </div>
        </div>

        {/* Submission Type Section */}
        <div className="row mb-4 align-items-start">
          <div className="col-md-3">
            <label
              htmlFor="wd-submission-type"
              className="form-label fw-bold mb-0"
            >
              Submission Type
            </label>
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              <select
                id="wd-submission-type"
                className="form-select mb-3"
                value={assignment.submissionType}
                onChange={(e) =>
                  setAssignment({ ...assignment, submissionType: e.target.value })
                }
              >
                <option value="online">Online</option>
              </select>

              <label className="form-label fw-bold">Online Entry Options</label>
              {/* These checkboxes don't currently update assignment state, 
                  but leaving them as-is since we do not remove existing code. */}
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="website-url"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="website-url">
                  Website URL
                </label>
              </div>
              {/* Add other options as needed */}
            </div>
          </div>
        </div>

        {/* Assign Section */}
        <div className="row mb-4 align-items-start">
          <div className="col-md-3">
            <label htmlFor="wd-assign-to" className="form-label fw-bold mb-0">
              Assign
            </label>
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              {/* Assign to */}
              <label htmlFor="wd-assign-to" className="form-label fw-bold">
                Assign to
              </label>
              <div className="border p-2 mb-3">
                <span className="badge bg-light text-dark me-1">
                  Everyone{" "}
                  <button
                    type="button"
                    className="btn-close btn-sm"
                    aria-label="Remove"
                  ></button>
                </span>
              </div>

              {/* Due Date */}
              <label htmlFor="wd-due-date" className="form-label fw-bold">
                Due
              </label>
              <input
                id="wd-due-date"
                type="datetime-local"
                className="form-control mb-3"
                value={assignment.dueDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
              />

              {/* Available From and Until */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Available from</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={assignment.availableFrom}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Until</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={assignment.availableUntil}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            type="button"
            className="btn btn-outline-secondary me-3"
          >
            Cancel
          </Link>
          <button type="submit" className="btn btn-danger">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
