import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Route, Routes, useParams, useLocation } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid); // Access courses from Database
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import * as enrollmentsClient from "../Enrollments/client";
// import * as userClient from "../Account/client";

// interface CoursesProps {
//   courses: any[]; // Replace 'any' with a specific type if possible
// }

// export default function Courses() {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [enrollments, setEnrollments] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const fetchCourses = async () => {
//     const data = await userClient.findMyCourses();
//     setCourses(data);
//   };

//   const fetchEnrollments = async () => {
//     const data = await enrollmentsClient.findEnrollmentsForUser(
//       currentUser._id
//     );
//     setEnrollments(data);
//   };

//   const handleEnroll = async (courseId: string) => {
//     await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
//     fetchEnrollments();
//   };

//   const handleUnenroll = async (courseId: string) => {
//     await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
//     fetchEnrollments();
//   };

//   useEffect(() => {
//     fetchCourses();
//     fetchEnrollments();
//   }, [currentUser]);

//   const isEnrolled = (courseId: string) => {
//     return enrollments.some((enrollment) => enrollment.course === courseId);
//   };

//   const Courses: React.FC<CoursesProps> = ({ courses }) => {
//     // Now you can use the 'courses' prop inside your component

//     return (
//       <div>
//         <h2>All Courses</h2>
//         <ul>
//           {courses.map((course) => (
//             <li key={course._id}>
//               <h3>{course.name}</h3>
//               <p>{course.description}</p>
//               {/* Add your enrollment buttons or other UI elements */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
// }

// import { Routes, Route, useParams, Link } from "react-router-dom";
// import Assignments from "./Assignments";

// const Courses = ({ courses }: any) => {
//   const { cid } = useParams();
//   const course = courses.find((c: any) => c._id === cid);

//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <p>{course.description}</p>
//       {/* Add navigation or tabs if necessary */}
//       <Routes>
//         <Route path="Assignments/*" element={<Assignments />} />
//         {/* Add other nested routes as needed */}
//       </Routes>
//     </div>
//   );
// };

// export default Courses;