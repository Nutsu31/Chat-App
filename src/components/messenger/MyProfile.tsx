import { Box, Button, Typography } from "@mui/material";
import { Settings, Logout, Notifications } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/userProfile/userType";
import { StateTypes } from "../../types/Types";

const MyProfile = () => {
  const userData = useSelector((state: StateTypes) => state.user.user);

  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Button>
          <Settings color="primary" />
        </Button>
        <Button>
          <Notifications color="primary" />
        </Button>
        <Button onClick={() => dispatch({ type: ACTIONS.USER_LOG_OUT })}>
          <Logout />
        </Button>
      </Box>
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "gray",
        }}
      ></Box>
      <Typography component="h2">
        {userData?.name} {userData?.lastname}
      </Typography>
    </>
  );
};

export default MyProfile;
