import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

const MainText = ({ text }: { text: string }) => {
  return (
    <Typography component="h2" variant="h2" sx={{ colo: "#33322" }}>
      {text}
    </Typography>
  );
};

export default MainText;
