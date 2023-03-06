import React, {useState} from "react";

import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  TextField,
  Input,
} from "@mui/material";
const basicInfo = (
  <Stack spacing={4}>
    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          Name
        </label>
        <TextField
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          sx={{
            width: "415px",

            margin: "1px 13px",
          }}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Designation
          </label>
          <TextField
            type="text"
            name="designation"
            placeholder="Enter Designation"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
      </Stack>
    </Stack>

    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          Linkedin Link
        </label>
        <TextField
          type="text"
          name="linkedinLink"
          placeholder="Enter Linkedin Link"
          sx={{ width: "415px", margin: "1px 13px" }}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Github Link
          </label>
          <TextField
            type="text"
            name="githubLink"
            placeholder="Enter Github Link"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
      </Stack>
    </Stack>

    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          Email
        </label>
        <TextField
          type="email"
          name="email"
          placeholder="Enter Your Email"
          sx={{ width: "415px", margin: "1px 13px" }}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Phone Number
          </label>
          <TextField
            type="text"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);


const workExp = (
    <Stack spacing={4}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Title
          </label>
          <TextField
            type="text"
            name="title"
            placeholder="Enter Title"
            sx={{
              width: "415px",

              margin: "1px 13px",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "100%",
          }}
        >
          <Stack>
            <label
              style={{
                margin: "0px 13px 5px",
              }}
            >
              Comapny Name
            </label>
            <TextField
              type="text"
              name="campanyName"
              placeholder="Enter Comapny Name"
              sx={{ width: "415px", margin: "1px 13px" }}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Certificate Link
          </label>
          <TextField
            type="text"
            name="certificateLink"
            placeholder="Enter Ceritficate Link"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "100%",
          }}
        >
          <Stack>
            <label
              style={{
                margin: "0px 13px 5px",
              }}
            >
              Location
            </label>
            <TextField
              type="text"
              name="location"
              placeholder="Enter Location"
              sx={{ width: "415px", margin: "1px 13px" }}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Start Date
          </label>
          <TextField
            type="date"
            name="startDate"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "100%",
          }}
        >
          <Stack>
            <label
              style={{
                margin: "0px 13px 5px",
              }}
            >
              End Date
            </label>
            <TextField
              type="date"
              name="endDate"
              placeholder="Enter End Date"
              sx={{ width: "415px", margin: "1px 13px" }}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Work Description
          </label>
          <TextField
            type="text"
            name="workDescription"
            placeholder="Line 1"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="workDescription"
            placeholder="Line 2"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="workDescription"
            placeholder="Line 3"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );


  const projectBody = (
    <Stack spacing={4}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Title
          </label>
          <TextField
            type="text"
            name="title"
            placeholder="Enter Title"
            sx={{
              width: "865px",
              margin: "1px 13px",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Overview
          </label>
          <TextField
            type="text"
            name="overview"
            placeholder="Enter Basic Overview Of Project"
            sx={{
              width: "865px",
              margin: "1px 13px",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Github Link
          </label>
          <TextField
            type="text"
            name="githubLink"
            placeholder="Enter Github Link"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "100%",
          }}
        >
          <Stack>
            <label
              style={{
                margin: "0px 13px 5px",
              }}
            >
              Deployed Link
            </label>
            <TextField
              type="text"
              name="deployedLink"
              placeholder="Enter Deployed Link"
              sx={{ width: "415px", margin: "1px 13px" }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Project Description
          </label>
          <TextField
            type="text"
            name="achivements"
            placeholder="Line 1"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="achivements"
            placeholder="Line 2"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="achivements"
            placeholder="Line 3"
            sx={{ width: "865px", margin: "5px 13px" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );

  const educationBody = (
    <Stack spacing={4}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Education
          </label>
          <TextField
            type="text"
            name="education"
            placeholder="Enter Education"
            sx={{
              width: "865px",
              margin: "1px 13px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            College / School Name
          </label>
          <TextField
            type="text"
            name="collegeName"
            placeholder="Enter College or School Name"
            sx={{
              width: "865px",
              margin: "1px 13px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Stack>
          <label
            style={{
              margin: "0px 13px 5px",
            }}
          >
            Start Date
          </label>
          <TextField
            type="date"
            name="startDate"
            sx={{ width: "415px", margin: "1px 13px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "100%",
          }}
        >
          <Stack>
            <label
              style={{
                margin: "0px 13px 5px",
              }}
            >
              End Date
            </label>
            <TextField
              type="date"
              name="endDate"
              placeholder="Enter End Date"
              sx={{ width: "415px", margin: "1px 13px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );

  const achievementBody = (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          List Your Achivements
        </label>
        <TextField
          type="text"
          name="projectDescription"
          placeholder="Line 1"
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="projectDescription"
          placeholder="Line 2"
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="projectDescription"
          placeholder="Line 3"
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="achivements"
          placeholder="Line 4"
          sx={{ width: "865px", margin: "5px 13px" }}
        />
      </Stack>
    </Stack>
  );

  const summaryBody = (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          Summary
        </label>
        <TextField
          type="text"
          name="summary"
          placeholder="Enter Your Summary"
          sx={{
            width: "865px",
            margin: "1px 13px",
          }}
        />
      </Stack>
    </Stack>
  );

  const otherBody = (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
      }}
    >
      <Stack>
        <label
          style={{
            margin: "0px 13px 5px",
          }}
        >
          Other
        </label>
        <TextField
          type="text"
          name="other"
          placeholder="Enter Your Other"
          sx={{
            width: "865px",
            margin: "1px 13px",
          }}
        />
      </Stack>
    </Stack>
  );





export  {basicInfo, workExp, projectBody, achievementBody, educationBody, summaryBody, otherBody};