import { createSlice } from "@reduxjs/toolkit";
import { modules as modulesData } from "../../Database";

const initialState = {
  modules: modulesData,
  module: { name: "New Module" }
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      const newModule = {
        ...action.payload,
        _id: new Date().getTime().toString(),
        lessons: []
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) =>
        module._id === action.payload._id ? action.payload : module
      );
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    editModule: (state, action) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload ? { ...m, editing: true } : m
      );
    }
  },
});

export const { addModule, deleteModule, updateModule, setModule, editModule } = 
  modulesSlice.actions;
export default modulesSlice.reducer;