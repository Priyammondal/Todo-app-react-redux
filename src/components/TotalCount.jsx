import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const TotalCount = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <Stack alignItems="center">
      <Box sx={{ width: "50%", mt: 2 }}>
        <Typography variant="h5">
          Total Completed Items :{" "}
          {tasks.filter((task) => task.completed == true).length}
        </Typography>
      </Box>
    </Stack>
  );
};
