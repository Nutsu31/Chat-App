import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import User from "./User";
import MyProfile from "./MyProfile";
import { Search } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import { baseUrl } from "../../utils/Functions";

const MessengerDashboard = () => {
  // //////////////////////////////////////////////////////////////////////////////
  const { register, handleSubmit } = useForm();
  const socket = useMemo(() => io(`${baseUrl}`), []);

  const onSubmit = handleSubmit((user) => {
    if (user.searchUser !== "") {
      socket.emit("add-friend", user.searchUser);
    }
  });
  // //////////////////////////////////////////////////////////////////////////////
  return (
    <Box
      sx={{
        width: 400,
        height: "100vh",
        background: "#F7F7F7",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <MyProfile />
        <form
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={onSubmit}
        >
          <TextField
            placeholder="Search User"
            variant="standard"
            sx={{ width: "70%", height: "20px" }}
            {...register("searchUser")}
          />
          <Button type="submit">
            <Search />
          </Button>
        </form>
      </Box>
      <User name="Alex asdasd" active={true} />
    </Box>
  );
};

export default MessengerDashboard;
