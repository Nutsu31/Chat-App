import React, { useEffect, useMemo, useRef, useState } from "react";
import MessengerDashboard from "../components/messenger/MessengerDashboard";
import { Box } from "@mui/material";
import MessagingField from "../components/messenger/MessagingField";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import { baseUrl } from "../utils/Functions";
import axios from "axios";
import { useSelector } from "react-redux";
import { StateTypes } from "../types/Types";

const MessengerScreen = () => {
  const isLoggedIn = useSelector((state: StateTypes) => state.isUserLoggedIn);

  ///////////////////////////////////////////////////////////////////////////////////

  const socket = useMemo(() => io(baseUrl), []);
  const { register, handleSubmit, reset } = useForm();
  ///////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {}, [socket]);

  ///////////////////////////////////////////////////////////////////////////////////

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh", display: "flex" }}>
        <MessengerDashboard />
        <MessagingField register={register} onSubmit={onSubmit} />
      </Box>
    </>
  );
};

export default MessengerScreen;
