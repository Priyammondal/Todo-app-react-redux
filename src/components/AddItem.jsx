import { Button, Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { add } from "../redux/slice";
import { useDispatch } from "react-redux";

export const AddItem = () => {
  const [newTask, setNewTask] = useState();
  const dispatch = useDispatch();

  const handleNewTask = () => {
    if (newTask.length != 0) {
      dispatch(add({ task: newTask }));
      setNewTask("");
    }
  };
  return (
    <Stack alignItems="center" sx={{ margin: "10px 0" }} >
      <Box sx={{ width: "50%", display: "flex" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ flex: 1, mr: 1 }}
          onClick={handleNewTask}
        >
          <Typography variant="h6">Add</Typography>
        </Button>
        <TextField
          sx={{ flex: 4 }}
          placeholder="Add Todo..."
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          autoComplete="off"
        ></TextField>
      </Box>
    </Stack>
  );
};
