// src/Kanbas/Enrollments/client.ts
import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API_BASE}/enrollments`, {
    userId,
    courseId,
  });
  return response.data;
};

export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  await axios.delete(`${API_BASE}/enrollments`, { data: { userId, courseId } });
};

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(`${API_BASE}/users/${userId}/enrollments`);
  return response.data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axios.get(
    `${API_BASE}/courses/${courseId}/enrollments`
  );
  return response.data;
};
