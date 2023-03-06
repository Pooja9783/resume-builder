import React from "react";
import { Box, Typography } from "@mui/material";
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <Box>
      <Typography variant="h5" color="white" pl={4} sx={{ml:{
        xs:1,
        md:4,
        lg:4
      }}}>
        <img src={logo} width="110px" height="90px"  alt="" />
      </Typography>
    </Box>
  );
}
