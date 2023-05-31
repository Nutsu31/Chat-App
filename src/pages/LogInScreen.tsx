import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainText from "../components/MainText";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { DataTypes, ErrorTypes } from "../types/Types";
import { handleCheck } from "../utils/Functions";
const LogInScreen = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState<DataTypes>({});
  const [error, setError] = useState<ErrorTypes>({});
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/log-in",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => handleCheck(res.data, setError, setData))
      .catch((err) => setError(err.response.data));

    reset({
      username: "",
      password: "",
    });
  });

  useEffect(() => {
    if (data.status === "ok") {
      return () => navigate("/messenger");
    } else {
      return () => navigate("/");
    }
  }, [data, error]);

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
        {error.status === "bad" ? (
          <Typography
            component="span"
            color="error"
            sx={{ textAlign: "center" }}
          >
            {error.user}
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
