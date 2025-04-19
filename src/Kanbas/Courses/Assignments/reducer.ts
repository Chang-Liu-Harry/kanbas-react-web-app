import { createSlice } from '@reduxjs/toolkit';
import * as db from '../../Database';

const initialState = {
  assignments: db.assignments
}
const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, {
        ...action.payload,
        _id: new Date().getTime().toString(),
      }]
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        }
        return assignment;
      });
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment: any) => assignment._id !== action.payload._id);
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    }
  },
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

// src/Kanbas/Courses/Assignments/reducer.ts

// src/Kanbas/Courses/Assignments/reducer.ts

// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import * as assignmentsClient from './client';

// export interface Assignment {
//   _id: string;
//   title: string;
//   description: string;
//   points: number;
//   dueDate: string;
//   course: string;
// }

// export const fetchAssignmentsForCourse = createAsyncThunk<
//   Assignment[],
//   string
// >('assignments/fetchForCourse', async (courseId: string) => {
//   const data = await assignmentsClient.findAssignmentsForCourse(courseId);
//   return data;
// });

// export const fetchAssignmentById = createAsyncThunk<
//   Assignment,
//   string
// >('assignments/fetchById', async (assignmentId: string) => {
//   const data = await assignmentsClient.findAssignmentById(assignmentId);
//   return data;
// });

// export const createAssignment = createAsyncThunk<
//   Assignment,
//   Assignment
// >('assignments/create', async (assignmentData: Assignment) => {
//   const data = await assignmentsClient.createAssignment(assignmentData);
//   return data;
// });

// export const updateAssignment = createAsyncThunk<
//   Assignment,
//   Assignment
// >('assignments/update', async (assignmentData: Assignment) => {
//   const data = await assignmentsClient.updateAssignment(assignmentData);
//   return data;
// });

// const assignmentsSlice = createSlice({
//   name: 'assignments',
//   initialState: [] as Assignment[],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAssignmentsForCourse.fulfilled, (state, action: PayloadAction<Assignment[]>) => {
//         return action.payload;
//       })
//       .addCase(fetchAssignmentById.fulfilled, (state, action: PayloadAction<Assignment>) => {
//         const index = state.findIndex((a) => a._id === action.payload._id);
//         if (index >= 0) {
//           state[index] = action.payload;
//         } else {
//           state.push(action.payload);
//         }
//       })
//       .addCase(createAssignment.fulfilled, (state, action: PayloadAction<Assignment>) => {
//         state.push(action.payload);
//       })
//       .addCase(updateAssignment.fulfilled, (state, action: PayloadAction<Assignment>) => {
//         const index = state.findIndex((a) => a._id === action.payload._id);
//         if (index >= 0) {
//           state[index] = action.payload;
//         }
//       });
//   },
// });

// export default assignmentsSlice.reducer;
