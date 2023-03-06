import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";

export default function InputControl(props) {
  return (
    <Box>
      <TextField
        className={props.className}
        type={props.type}
        value={props.value}
        label={props?.label}
        onChange={props?.onChange}
        placeholder={props.placeholder}
        name={props?.email}
      >
        {" "}
        {props.children}
      </TextField>
    </Box>
  );
}
