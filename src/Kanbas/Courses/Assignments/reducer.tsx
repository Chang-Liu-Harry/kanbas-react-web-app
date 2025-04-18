import { createSlice } from "@reduxjs/toolkit";
import { assignments as assignmentsData } from "../../Database";

const initialState = {
  assignments: assignmentsData,
  assignment: {
    title: "New Assignment",
    description: "",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableFromDate: new Date().toISOString().split("T")[0],
    availableUntilDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;