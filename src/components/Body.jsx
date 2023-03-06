import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Editor from "./Editor";
import Navbar from "./Navbar";
export default function Body() {
  const colors = ["#C379D1", "#5BBB25", "#9A1C22", "#3D8477", "#E4CD2C"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to left top, #727184, #595773, #423d62, #2b2551, #130e40)",
        height: "100%",
        width: "100%",
        padding: "20px 0px",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid sx={{ display: "flex", ml: "70px" }}>
          {colors.map((colorName, i) => {
            return (
              <Box  key={i}>
                <Typography
                 
                  style={{
                    backgroundColor: colorName,
                    height: "36px",
                    width: "36px",
                    borderRadius: "50%",
                    margin: "5px",
                  }}
                />
              </Box>
            );
          })}
        </Grid>

        <Box>
          <Button
            variant="contained"
            sx={{
              margin: "0px 90px 0px 0px",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "#A8A0E5",
              color: "#ffffff",
              width: "200px",
              fontSize: "1.1rem",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#FFF",
                boxShadow: "none",
                color: "#A8A0E5",
              },
            }}
          >
            Download
          </Button>
        </Box>
      </Box>
      <Box>
        <Editor
          sections={sections}
          information={resumeInformation}
          setResumeInformation={setResumeInformation}
        />
      </Box>
    </Box>
  );
}
