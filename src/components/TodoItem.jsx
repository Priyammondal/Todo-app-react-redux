import {
  Typography,
  Button,
  Stack,
  Card,
  Checkbox,
  IconButton,
  Modal,
  styled,
  Box,
  TextField,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useDispatch } from "react-redux";
import { toggle, update, deleted } from "../redux/slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "5px",
};

const TodoItem = ({ id, task, completed }) => {
  const [open, setOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState();
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(
      toggle({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleUpdate = () => {
    dispatch(
      update({
        id: id,
        task: updateTask,
      })
    );
    setUpdateTask("");
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(
      deleted({
        id: id,
      })
    );
  };

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Tilt style={{ width: "100%" }} tiltAxis="y">
        <Card
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
          variant="outlined"
        >
          <Checkbox size="medium" onChange={handleCompleted} checked={completed}/>
          <Typography variant="h6" sx={{ flex: 4, pl: 1 }}>
            {task}
          </Typography>
          <IconButton>
            <Edit color="primary" onClick={(e) => setOpen(true)} />
          </IconButton>
          <Button
            variant="contained"
            color="error"
            sx={{ flex: 1 }}
            onClick={handleDelete}
          >
            <Typography variant="h6">Delete</Typography>
          </Button>
        </Card>
      </Tilt>

      <Modal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={style}>
          <Stack gap={2}>
            <TextField
              fullwidth
              value={updateTask}
              onChange={(e) => setUpdateTask(e.target.value)}
              placeholder="Enter todo..."
            ></TextField>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default TodoItem;
