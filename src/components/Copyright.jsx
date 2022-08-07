import { IconButton, Tooltip, Zoom } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Copyright = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <Tooltip
      title={`${year}, Priyam Mondal`}
      sx={{
        position: "absolute",
        bottom: "2%",
        left: "1%",
      }}
      placement="right"
      arrow
      ransitionComponent={Zoom}
    >
      <IconButton>
        <CopyrightIcon color="primary"/>
      </IconButton>
    </Tooltip>
  );
};
