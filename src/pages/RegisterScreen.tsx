import { Box, Button, TextField } from "@mui/material";
import React from "react";
import MainText from "../components/MainText";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterScreen = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/sing-up",
      data: {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    reset({
      name: "",
      lastname: "",
      password: "",
      re_password: "",
      email: "",
    });
  });

  return (
    <Box
      sx={{
        width: 400,
        height: 600,
        background: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 10,
      }}
    >
      <MainText text="Sing Up" />
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
          placeholder="Firstname"
          type="text"
          {...register("name", { required: true })}
        />
        <TextField
          placeholder="Lastname"
          type="text"
          {...register("lastname", { required: true })}
        />
        <TextField
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <TextField
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <TextField
          placeholder="Re-Password"
          type="password"
          {...register("re_password", { required: true })}
        />
        <Button variant="contained" type="submit">
          Sing Up
        </Button>
      </form>
      <Link to="/">Sing In</Link>
    </Box>
  );
};

export default RegisterScreen;
