import { Box } from "@mui/material";
import styles from './styles.module.css'
import TemplateOne from "@/resume-template/template-one";

export default function Page () {
    return (
        <Box className={styles.container}>
            <Box>

            </Box>
            <Box>
                <TemplateOne/>
            </Box>
        </Box>
    )
}