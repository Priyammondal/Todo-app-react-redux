import React from "react";
import { AppBar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Typography variant="h5" sx={{margin: 3, textAlign:"center"}}>My Todo</Typography>
    </AppBar>
  );
};
