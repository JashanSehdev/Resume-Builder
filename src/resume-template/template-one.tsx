"use client";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./styles.templeate1.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Resume } from "@/types/resume";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { useEffect, useState } from "react";
import { myEmitter } from "@/lib/emitter";

export default function TemplateOne({ resume }: { resume: Resume }) {
  console.log(resume)
  const { personal_details, education, skills } = resume;
  const [experience, setExperience] = useState();
  useEffect(() => {

    const handleEvent = (data) => {
      setExperience(data.experience)
    };


    myEmitter.on('sendEvent', handleEvent);


    return () => {
      myEmitter.off('customEvent', handleEvent);
    };
  }, []);

  return (
    <Box className={styles.root} id="printable_div">
      <Box className={styles.main}>
        <Box className={styles.leftSide}>
          <Box
            className={styles.image}
            component={"img"}
            src={
              personal_details.photo ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT989RCRb-o4ArcYugXvZURhTpON0q2b-iHFdzjt1SvOg&s=10"
            }
          />

          <Box className={styles.aboutMe}>
            <Typography variant="h5" component={"h1"}>
              About me
            </Typography>
            <Typography variant="body2" component={"p"}>
              {personal_details.aboutMe ||
                `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat delectus eius
              officiis dolorem illum aliquam eos eligendi, velit natus possimus voluptatum adipisci,`}
            </Typography>
          </Box>
          <Box className={styles.contacts}>
            <Typography variant="h5" component={"h1"}>
              Contacts
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={personal_details.phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={personal_details.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${personal_details.state || "state"}, ${personal_details.country || "country"}`}
                />
              </ListItem>
            </List>
          </Box>

          <Box className={styles.skills}>
            <Typography variant="h5" component={"h1"}>
              Skills
            </Typography>
            <List>
              {skills.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarBorderPurple500Icon />
                  </ListItemIcon>
                  <ListItemText primary={item.skill} />
                </ListItem>
              ))}

            </List>
          </Box>
        </Box>
        <Box className={styles.right}>
          <Box className={styles.title}>
            <p className={styles.name}>{personal_details.firstName}</p>
            <p className={styles.name}>{personal_details.lastName}</p>
            <p className={styles.jobTitle}>{personal_details.jobTitle}</p>
          </Box>

          <Box className={styles.educationContainer}>
            <Typography variant="h5" component={"h1"}>
              Education
            </Typography>
            {Array.isArray(education) ? (
              education.map((item, index) => (
                <Box className={styles.education} key={index}>
                  <p
                    className={styles.e_year}
                  >{`(${item.startingYear} - ${item.endingYear})`}</p>
                  <p className={styles.e_name}>{item.schoolName}</p>
                  <p className={styles.e_body}>{item.degree}</p>
                  <p className={styles.e_body}>{item.fieldOfStudy}</p>
                </Box>
              ))
            ) : (
              <Box></Box>
            )}
          </Box>

          <Box className={styles.experience}>
            <Typography variant="h5">Experience</Typography>

            {Array.isArray(experience) ? (
              experience.map((item, index) => (
                <Box className={styles.education} key={index}>
                  <p
                    className={styles.e_year}
                  >{`(${item.startingYear} - ${item.endingYear})`}</p>
                  <p className={styles.e_name}>{item.companyName}</p>
                  <p className={styles.e_body}>{item.role}</p>
                </Box>
              ))
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
