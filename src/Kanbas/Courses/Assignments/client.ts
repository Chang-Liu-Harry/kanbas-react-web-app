// import axios from "axios";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/asignments`;
// export const updateAssignment = async (assignment: any) => {
//   const { data } = await axios.put(
//     `${ASSIGNMENTS_API}/${assignment._id}`,
//     assignment
//   );
//   return data;
// };

// export const deleteAssignment = async (assignmentId: string) => {
//   const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return response.data;
// };

// export const findAssignmentsForCourse = async (courseId: string) => {
//   const response = await axios.get(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`);
//   return response.data;
// };

// export const createAssignment = async (courseId: string, assignment: any) => {
//   const response = await axios.post(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`, assignment);
//   return response.data;
// };

import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (
  assignmentId: string,
  assignment: any
) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
