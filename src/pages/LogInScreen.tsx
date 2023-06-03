import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import MainText from "../components/MainText";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../utils/Functions";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../redux/userProfile/userType";
import { StateTypes } from "../types/Types";
const LogInScreen = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const socket = useMemo(() => io(baseUrl), []);

  const userState = useSelector((state: StateTypes) => state);

  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (userState.isUserLoggedIn) {
      navigate("/messenger");
      socket.emit("connection", userState.user.user?.email);
    }
  }, [userState]);

  //////////////////////////////////////////////////////////////////////////////
  const onSubmit = handleSubmit((data) => {
    dispatch({ type: ACTIONS.FETCH_USER_REQUEST });
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${baseUrl}/log-in`,
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) =>
        dispatch({
          type: ACTIONS.FETCH_USER_SUCCESS,
          payload: { user: res.data },
        })
      )
      .catch((err) =>
        dispatch({
          type: ACTIONS.FETCH_USER_ERROR,
          payload: { error: err.message },
        })
      );

    reset({
      username: "",
      password: "",
    });
  });

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
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Email"
          type="text"
          {...register("email", { required: true })}
        />
        <TextField
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {userState.user.status === "bad" ? (
          <Typography
            component="span"
            color="error"
            sx={{ textAlign: "center" }}
          >
            {userState.user.user?.email}
          </Typography>
        ) : null}
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
      <Link to="/sing-up">Sing Up</Link>
    </Box>
  );
};

export default LogInScreen;
