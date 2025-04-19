// // src/Kanbas/Enrollments/reducer.ts
// import { createSlice } from '@reduxjs/toolkit';
// import * as db from '../Database';

// const initialState = JSON.parse(localStorage.getItem('enrollments') || 'null') || db.enrollments;

// const enrollmentsSlice = createSlice({
//   name: 'enrollments',
//   initialState,
//   reducers: {
//     enrollCourse: (state, action) => {
//       state.push({
//         _id: new Date().getTime().toString(),
//         user: action.payload.userId,
//         course: action.payload.courseId,
//       });
//     },
//     unenrollCourse: (state, action) => {
//       return state.filter(
//         (enrollment: any) =>
//           !(
//             enrollment.user === action.payload.userId &&
//             enrollment.course === action.payload.courseId
//           )
//       );
//     },
//   },
// });

// export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;

// src/Kanbas/Enrollments/reducer.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as enrollmentsClient from "./client";

export const fetchEnrollmentsForUser = createAsyncThunk(
  "enrollments/fetchForUser",
  async (userId: string) => {
    const data = await enrollmentsClient.findEnrollmentsForUser(userId);
    return data;
  }
);

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEnrollmentsForUser.fulfilled, (state, action) => {
      return action.payload;
    });
    // Handle other cases like pending, rejected if needed
  },
});

export default enrollmentsSlice.reducer;
