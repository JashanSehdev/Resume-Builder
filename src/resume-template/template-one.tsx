"use client";

import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import styles from "./styles.templeate1.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useAppSelector } from "@/app/hooks";

export default function TemplateOne() {
  const {personalData, educationData, experienceData} = useAppSelector((state) => state.resume);
  console.log("from ",experienceData)
  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Box className={styles.leftSide}>
          <Box
            className={styles.image}
            component={"img"}
            src={personalData?.photo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT989RCRb-o4ArcYugXvZURhTpON0q2b-iHFdzjt1SvOg&s=10'}
          />

          <Box className={styles.aboutMe}>
            <Typography variant="h5" component={"h1"}>
              About me
            </Typography>
            <Typography variant="body2" component={'p'}>

              {
                personalData?.aboutMe ? personalData.aboutMe : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat delectus eius
              officiis dolorem illum aliquam eos eligendi, velit natus possimus voluptatum adipisci,`
              }
              

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
                <ListItemText primary={personalData?.phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={personalData?.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={`${personalData?.state ?? 'Punjab'}, ${personalData?.country ?? 'India'}` ?? 'Location'} />
              </ListItem>
            </List>
          </Box>

          <Box className={styles.skills}>
            <Typography variant="h5" component={"h1"}>
              Skills
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Web dev"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"DSA"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Leadership"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Communication"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Javascript"} />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className={styles.right}>
          <Box className={styles.title}>
            <p className={styles.name}>{personalData?.firstName}</p>
            <p className={styles.name}>{personalData?.lastName}</p>
            <p className={styles.jobTitle}>{personalData?.jobTitle}</p>
          </Box>

          <Box className={styles.educationContainer}>
            <Typography variant="h5" component={"h1"}>
              Education
            </Typography>
            { 
              Array.isArray(educationData?.test) ?
              educationData?.test.map((item, index) =>(
              <Box className={styles.education} key={index} >
              <p className={styles.e_year}>{`(${item.startingYear} - ${item.endingYear})`}</p>
              <p className={styles.e_name}>{item.schoolName}</p>
              <p className={styles.e_body}>{item.degree}</p>
              <p className={styles.e_body}>{item.fieldOfStudy}</p>
            </Box>
              )) : <Box></Box>
            }
          </Box>

          <Box className={styles.experience}>
            <Typography variant="h5">Experience</Typography>

            { 
              Array.isArray(experienceData?.test) ?
              experienceData?.test.map((item, index) =>(
              <Box className={styles.education} key={index}>
              <p className={styles.e_year}>{`(${item.startingYear} - ${item.endingYear})`}</p>
              <p className={styles.e_name}>{item.companyName}</p>
              <p className={styles.e_body}>{item.role}</p>
            </Box>
              )) : <Box></Box>
            }

        
            
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
