import { Box, Button, TextField } from "@mui/material";
import React from "react";
import MainText from "../components/MainText";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const LogInScreen = () => {
  const { register, handleSubmit, reset } = useForm();

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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));

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
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
      <Link to="/sing-up">Sing Up</Link>
    </Box>
  );
};

export default LogInScreen;
