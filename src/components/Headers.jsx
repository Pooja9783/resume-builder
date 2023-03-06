import React from "react";
import resume from "../assets/resume.svg";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Button } from "@mui/material";

import Navbar from "./Navbar";

export default function Headers() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to left top, #727184, #595773, #423d62, #2b2551, #130e40)",
        height: "100%",
        width: "100%",
        padding:"20px 0px",
      }}
    >
      <Navbar />
      <Grid>
        <Grid
          sx={{
            display: {
              xs: "block",
              sm: "flex",
              lg: "flex",
            },
          }}
          justifyContent="center"
          alignItems="center"
          container
        >
          <Grid item sx={{
            width: {
              xs: "100%",
              sm: "50%",
              lg: "50%"
            },
            marginTop: {
              xs: "40px",
              sm: "20px",
              lg: "2px"
            },

            textAlign: "center"
          }}>
            <Typography variant="h3" sx={{ml:{xs:"0px",lg:"27px"}}} color="white" t>
              A <span style={{color:"#A8A0E5"}}>Resume</span> that stand out!
            </Typography>
            <Typography variant="h3"  sx={{ml:{xs:"0px",lg:"27px"}}}  color="white">
              Make your own resume here! <span style={{color:"#A8A0E5"}}>It's free</span>
            </Typography>
            <Link
              to="/create-resume"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{           
                  marginTop: "20px",
                  textAlign:"center",
                  justifyContent: "center",
                  backgroundColor: "#A8A0E5",
                  color:"#ffffff",
                  width:"200px",
                  fontSize:"1.1rem",
                  fontWeight:"600",
                  "&:hover": {
                    backgroundColor: "#FFF",
                    boxShadow: "none",
                    color:"#A8A0E5",
                  },
                }}
              >
                Create Resume
              </Button>
            </Link>
          </Grid>
          <Grid item sx={{
            width: {
              xs: "100%",
              sm: "70%",
              lg: "50%"
            }, display: "flex", marginTop: {
              xs: "40px",
              sm: "20px",
              lg: "2px"
            },
          }}>
            <Box
              component="img"
              sx={{
                width: {
                  xs: "300px",
                  sm: "450px",
                  md: "450px",
                  lg: "430px"
                }, 
                margin:"0px auto",
                padding:"18px 1px"
              }}
              alt="Resume image"
              src={resume}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
