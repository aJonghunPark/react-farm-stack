import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Task } from "../../types";

export interface TodoState {
  editedTask: Task;
  csrfTokenExp: boolean;
}

const initialState: TodoState = {
  editedTask: {
    id: "",
    title: "",
    description: "",
  },
  csrfTokenExp: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<Task>) => {
      state.editedTask = action.payload;
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
    toggleCsrfState: (state) => {
      state.csrfTokenExp = !state.csrfTokenExp;
    },
  },
});

export const { setEditedTask, resetEditedTask, toggleCsrfState } =
  todoSlice.actions;
export const selectTask = (state: RootState) => state.todo.editedTask;
export const selectCsrfState = (state: RootState) => state.todo.csrfTokenExp;
export default todoSlice.reducer;
