// src/Kanbas/store.ts

import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./Enrollments/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentsReducer,
    assignmentsReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
