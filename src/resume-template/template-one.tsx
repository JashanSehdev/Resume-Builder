import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import styles from './styles.templeate1.module.css'
import EmailIcon from '@mui/icons-material/Email';
export default function TemplateOne ()  {
    return (
        <Box className = {styles.root}>
            <Box className = {styles.main}>
                <Box className = {styles.leftSide}>
                    <Box 
                        className={styles.image}
                        component={'img'}
                        height={300}
                        width={300}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIBVURjCqrxrcjtXRC2JU8MmcbZ_0sCqK1o-jJhxbtQ&s=10'}
                    />

                    <Box className={styles.aboutMe}>
                        <Typography>About me</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat delectus eius officiis dolorem illum aliquam eos eligendi, velit natus possimus voluptatum adipisci, autem laudantium asperiores, deleniti alias! Dicta molestias aliquam quaerat, exercitationem similique deleniti optio atque assumenda debitis natus?
                        </Typography>
                    </Box>
                    <Box className="contacts">
                        <Typography variant="h4">Contacts</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"98754654654"} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary={"jashan@gmail.com"} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary={"Ludhiana, punjab"} />
                            </ListItem>
                        </List>
                    </Box>

                </Box>
                <Box className = {styles.right}>
                    
                </Box>
            </Box>
        </Box>
    )
}