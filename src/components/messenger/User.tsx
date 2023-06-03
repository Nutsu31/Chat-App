import { Box, Typography } from "@mui/material";
import React from "react";

const User = ({
  name,
  active,
  img,
  txt,
}: {
  name: string;
  active: boolean;
  img: string;
  txt: string;
}) => {
  return (
    <Box
      sx={{
        height: "95px",
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          height: "56px",
          width: "56px",
          borderRadius: "10px",
          background: "gray",
        }}
      ></Box>
      <Box>
        <Typography component="p">{name}</Typography>
        <Typography component="p">{txt}</Typography>
      </Box>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: active ? "green" : "gray",
        }}
      ></Box>
    </Box>
  );
};

export default User;
