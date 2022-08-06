import React from "react";
import { Stack } from "@mui/material";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const tasks = useSelector((state) => state.todos);
  console.log("tasks===>>>", tasks);
  return (
    <Stack alignItems="center">
      <Stack
        sx={{ width: "50%" }}
        alignItems="center"
        direction="column"
        gap={2}
      >
        {tasks.map((todo) => (
          <TodoItem id={todo.id} task={todo.task} completed={todo.completed} />
        ))}
      </Stack>
    </Stack>
  );
};
