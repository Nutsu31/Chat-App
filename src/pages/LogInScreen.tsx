import { Box, Button, TextField } from "@mui/material";
import React from "react";
import MainText from "../components/MainText";
import { Link } from "react-router-dom";

const LogInScreen = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        background: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 10,
      }}
    >
      <MainText text="Log in" />
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 40,
          gap: 10,
        }}
      >
        <TextField placeholder="Username" type="text" />
        <TextField placeholder="Password" type="password" />
        <Button variant="contained">Log in</Button>
      </form>
      <Link to="/sing-up">Sing Up</Link>
    </Box>
  );
};

export default LogInScreen;
