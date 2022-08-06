import { createSlice } from "@reduxjs/toolkit";

const myTodo = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: Date.now(),
        task: action.payload.task,
        completed: false,
      };
      state.push(newTodo);
    },
    deleted: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    update: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].task = action.payload.task;
    },
    toggle: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { add, toggle, update, deleted } = myTodo.actions;
export default myTodo.reducer;
