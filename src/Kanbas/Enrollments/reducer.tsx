import { createSlice } from "@reduxjs/toolkit";
import { enrollments as enrollmentsData } from "../Database";

const initialState = {
  enrollments: enrollmentsData,
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      // Check if enrollment already exists
      const existingEnrollment = state.enrollments.find(
        e => e.user === userId && e.course === courseId
      );
      
      // If not enrolled, add new enrollment
      if (!existingEnrollment) {
        state.enrollments.push({
          user: userId,
          course: courseId
        });
      }
    },
    unenrollFromCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      // Remove enrollment
      state.enrollments = state.enrollments.filter(
        e => !(e.user === userId && e.course === courseId)
      );
    }
  },
});

export const { toggleShowAllCourses, enrollInCourse, unenrollFromCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;