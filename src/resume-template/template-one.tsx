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

export default function TemplateOne() {
  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Box className={styles.leftSide}>
          <Box
            className={styles.image}
            component={"img"}
            src={
              "https://imgs.search.brave.com/vqIkHge6RRAuSktdkwSsEDqohaMerRA_32eBtYxgsLs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vMjQteWVhci1v/bGQtb2ZmaWNlLWdp/cmwtd2l0aC1icmln/aHRfMTI2MDg4Mi0x/NzkwNS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
            }
          />

          <Box className={styles.aboutMe}>
            <Typography variant="h5" component={"h1"}>
              About me
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              fugiat delectus eius officiis dolorem illum aliquam eos eligendi,
              velit natus possimus voluptatum adipisci, autem laudantium
              asperiores, deleniti alias! Dicta molestias aliquam quaerat,
              exercitationem similique deleniti optio atque assumenda debitis
              natus?
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
                <ListItemText primary={"98754654654"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"jashan@gmail.com"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={"Ludhiana, punjab"} />
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
            <p className={styles.name}>John</p>
            <p className={styles.name}>Doe</p>
            <p className={styles.jobTitle}>Software Engineer</p>
          </Box>
          
          <Box className ={styles.educationContainer}>
            <Typography variant="h5" component={'h1'}>
                Education
            </Typography>
            <Box className={styles.education}>
                <p className={styles.e_year}>{"(2023 - 2027)"}</p>
                <p className={styles.e_name}>Chitkara University</p>
                <p className={styles.e_body}>{"Bacholer of Engineering"}</p>
                <p className={styles.e_body}>9.64</p>
            </Box>

            <Box className={styles.education}>
                <p className={styles.e_year}>{"(2023 - 2027)"}</p>
                <p className={styles.e_name}>Chitkara University</p>
                <p className={styles.e_body}>{"Bacholer of Engineering"}</p>
                <p className={styles.e_body}>9.64</p>
            </Box>
          </Box>

          <Box className={styles.experience}>
            <Typography variant="h5">
                Experience
            </Typography>
             <Box className={styles.education}>
                <p className={styles.e_year}>{"(2023 - 2027)"}</p>
                <p className={styles.e_name}>Zenmonk</p>
                <p className={styles.e_body}>{"full Stack Inter"}</p>
                <p className={styles.e_body}>9.64</p>
            </Box>
             <Box className={styles.education}>
                <p className={styles.e_year}>{"(2023 - 2027)"}</p>
                <p className={styles.e_name}>Zenmonk</p>
                <p className={styles.e_body}>{"full Stack Inter"}</p>
                <p className={styles.e_body}>9.64</p>
            </Box>
            

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
