import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, TextField, Chip, Button } from "@mui/material";

import styles from "../style/Editor.module.css";

// import {
//   basicInfo,
//   workExp,
//   projectBody,
//   achievementBody,
//   educationBody,
//   summaryBody,
//   otherBody,
// } from "./EditorFormData/EditorFom";

export default function Editor(props) {
  const sections = props.sections;
  const information = props.information;
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState();
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(Object.keys(sections)[0]);
  const activeInfo = information[sections[activeSection]];

  const [values, setValues] = useState({
    name: activeInfo?.detail?.name || "",
    title: activeInfo?.detail?.title || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.detail?.github || "",
    phone: activeInfo?.detail?.phone || "",
    email: activeInfo?.detail?.email || "",
  });

  const handleClick = (index) => {
    const details = activeInfo?.details ? [...activeInfo?.details] : "";
    if(!details) return;
    details.splice(index, 1);
    props.setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSection]]: {
        ...information[sections[activeSection]],
        details: details,
      },
    }));
    setCurrentDetailsIndex((prev) => (prev === index ? 0 : prev-1));
  };

  const handleDelete = (index) => {
    // const details = activeInfo?.details ? [...activeInfo?.details] : "";
    // if(!details) return;
    // details.splice(index, 1);
    // props.setResumeInformation((prev) => ({
    //   ...prev,
    //   [sections[activeSection]]: {
    //     ...information[sections[activeSection]],
    //     details: details,
    //   },
    // }));
    // setCurrentDetailsIndex((prev) => (prev === index ? 0 : prev));
    console.log(index);
  };

  const handlePointsUpdate = (value, index) => {
    const temp = { ...values };
    if (!Array.isArray(temp.points)) temp.points = [];
    temp.points[index] = value;
    setValues(temp);
  };

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
            Full Name
          </label>
          <TextField
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={values.fullName}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, fullName: e.target.value }))
            }
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
              value={values.designation}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, designation: e.target.value }))
              }
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
            value={values.linkedinLink}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, linkedinLink: e.target.value }))
            }
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
              value={values.githubLink}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, githubLink: e.target.value }))
              }
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
            value={values.email}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, email: e.target.value }))
            }
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
              value={values.phoneNumber}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, phoneNumber: e.target.value }))
              }
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
            value={values.title}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, title: e.target.value }))
            }
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
              name="companyName"
              placeholder="Enter Comapny Name"
              value={values.companyName}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, companyName: e.target.value }))
              }
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
            value={values.certificateLink}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, certificateLink: e.target.value }))
            }
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
              value={values.location}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, location: e.target.value }))
              }
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
            value={values.startDate}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, startDate: e.target.value }))
            }
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
              value={values.endDate}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, endDate: e.target.value }))
              }
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
            value={values.points ? values.points[0] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 0)}
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="workDescription"
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 1)}
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="workDescription"
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 2)}
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
            value={values.title}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, title: e.target.value }))
            }
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
            value={values.overview}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, overview: e.target.value }))
            }
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
            value={values.githubLink}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, githubLink: e.target.value }))
            }
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
              value={values.deployedLink}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, deployedLink: e.target.value }))
              }
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
            value={values.achivements ? values.achivements[0] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 0)}
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="achivements"
            placeholder="Line 2"
            value={values.achivements ? values.achivements[1] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 1)}
            sx={{ width: "865px", margin: "5px 13px" }}
          />
          <TextField
            type="text"
            name="achivements"
            placeholder="Line 3"
            value={values.achivements ? values.achivements[2] : ""}
            onChange={(e) => handlePointsUpdate(e.target.value, 2)}
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
            value={values.education}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, education: e.target.value }))
            }
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
            value={values.collegeName}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, collegeName: e.target.value }))
            }
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
            value={values.startDate}
            onChange={(e) =>
              setValues((pre) => ({ ...pre, startDate: e.target.value }))
            }
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
              value={values.endDate}
              onChange={(e) =>
                setValues((pre) => ({ ...pre, endDate: e.target.value }))
              }
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
          value={values.projectDescription ? values.projectDescription[0] : ""}
          onChange={(e) => handlePointsUpdate(e.target.value, 0)}
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="projectDescription"
          placeholder="Line 2"
          value={values.projectDescription ? values.projectDescription[1] : ""}
          onChange={(e) => handlePointsUpdate(e.target.value, 1)}
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="projectDescription"
          placeholder="Line 3"
          value={values.projectDescription ? values.projectDescription[2] : ""}
          onChange={(e) => handlePointsUpdate(e.target.value, 2)}
          sx={{ width: "865px", margin: "5px 13px" }}
        />
        <TextField
          type="text"
          name="achivements"
          placeholder="Line 4"
          value={values.projectDescription ? values.projectDescription[3] : ""}
          onChange={(e) => handlePointsUpdate(e.target.value, 3)}
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
          value={values.summary}
          onChange={(e) =>
            setValues((pre) => ({ ...pre, summary: e.target.value }))
          }
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
          value={values.other}
          onChange={(e) => handlePointsUpdate(e.target.value, 0)}
          sx={{
            width: "865px",
            margin: "1px 13px",
          }}
        />
      </Stack>
    </Stack>
  );

  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return basicInfo;
      case sections.workExp:
        return workExp;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo: {
        const tempDetails = {
          fullName: values.fullName,
          designation: values.designation,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          email: values.email,
          phoneNumber: values.phoneNumber,
        };
        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetails = {
          title: values.title,
          companyName: values.companyName,
          certificateLink: values.certificateLink,
          startDate: values.startDate,
          endDate: values.endDate,
          location: values.location,
          points: values.points,
        };

        const temp = information[sections.workExp]?.details;
        temp[currentDetailsIndex] = tempDetails;
        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: temp,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetails = {
          title: values.title,
          overview: values.overview,
          githubLink: values.githubLink,
          deployedLink: values.deployedLink,
          points: values.points,
        };

        const temp = information[sections.project]?.details;
        temp[currentDetailsIndex] = tempDetails;
        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetails = {
          title: values.title,
          collegeName: values.collegeName,
          education: values.education,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };

        const temp = information[sections.education]?.details;
        temp[currentDetailsIndex] = tempDetails;
        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achivements: {
        const tempPoints = values.points;

        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.achivements]: {
            ...prev[sections.achivements],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetails = values.summary;

        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.other: {
        const tempDetails = values.other;

        props.setResumeInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInfo?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys[lastDetail]) return;
    console.log(details);
    
    details.push({});
    props.setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSection]]: {
        ...information[sections[activeSection]],
        details: details,
      },
    }));
    setCurrentDetailsIndex(details?.length-1);
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSection]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSection]);
    setCurrentDetailsIndex(0);
    setValues({
      fullName: activeInfo?.detail?.fullName || "",
      designation: activeInfo?.detail?.designation || "",
      linkedinLink: activeInfo?.details?.linkedinLink || "",
      githubLink: activeInfo?.details
        ? activeInfo?.details[0]?.githubLink || ""
        : activeInfo?.detail?.githubLink || "",
      email: activeInfo?.detail?.email || "",
      phoneNumber: activeInfo?.detail?.phoneNumber || "",

      title: activeInfo?.details
        ? activeInfo?.details[0]?.title || ""
        : activeInfo?.detail?.title,
      companyName: activeInfo?.details?.companyName || "",
      certificateLink: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      location: activeInfo?.details?.location || "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      deployedLink: activeInfo?.details
        ? activeInfo.details[0]?.deployedLink || ""
        : "",

      education: activeInfo?.details?.education || "",
      collegeName: activeInfo?.details?.collegeName || "",

      link: activeInfo?.details?.link || "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo?.points]
        : "",
      summary: typeof activeInfo?.details !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.details !== "object" ? activeInfo.detail : "",
    });
  }, [activeSection]);

  useEffect(() => {
    setCurrentDetailsIndex(information[sections[activeSection]]);
  }, [information]);

  return (
    <Box>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "900px",
          background: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
          padding: "15px 0px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          margin: "55px auto",
        }}
      >
        <Box className={styles.header}>
          {Object.keys(sections)?.map((items) => (
            <Box
              key={items}
              sx={{ cursor: "pointer", color: "gray" }}
              className={`${styles.section} ${
                activeSection === items ? styles.active : ""
              }`}
              onClick={() => setActiveSection(items)}
            >
              {props.sections[items]}
            </Box>
          ))}
        </Box>
        <Box>
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
                name="sectionTitle"
                placeholder="Enter Section Title"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                sx={{
                  width: "865px",
                  margin: "1px 13px 25px",
                }}
              />
            </Stack>
          </Stack>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                margin: "0px 13px 18px",
              }}
            >
              {activeInformation?.details
                ? activeInformation?.details?.map((item, index) => (
                    <Chip
                      key={item.title + index}
                      className={`${styles.chip} ${
                        currentDetailsIndex === index ? styles.active : ""
                      }`}
                      label={[sections[activeSection], " ", index + 1]}
                      onClick={() =>handleClick(index)}
                      onDelete={()=>handleDelete(index)}
                    />
                  ))
                : ""}
              {activeInfo.details && activeInfo?.details.length > 0 ? (
                <Box>
                  <Button onClick={handleAddNew}>+ New</Button>
                </Box>
              ) : (
                ""
              )}
            </Stack>
          </Box>
          {generateBody()}
          <Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                margin: "13px",
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "#1E1E6F",
                color: "#ffffff",
                width: "fitContent",
                fontSize: "1.1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#FFF",
                  boxShadow: "none",
                  color: "#A8A0E5",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
