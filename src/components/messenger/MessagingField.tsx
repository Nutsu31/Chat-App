import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Send } from "@mui/icons-material";
import { FieldValues, UseFormRegister } from "react-hook-form";
const MessagingField = ({
  register,
  onSubmit,
}: {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <ul></ul>
      <form
        style={{
          width: "100%",
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Write your message"
          sx={{ width: "90%" }}
          {...register("message")}
        />
        <Button type="submit" variant="contained" sx={{ height: "56px" }}>
          <Send />
        </Button>
      </form>
    </Box>
  );
};

export default MessagingField;
