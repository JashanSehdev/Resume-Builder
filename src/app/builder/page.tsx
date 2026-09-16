'use client'
import { Box, Pagination } from "@mui/material";
import styles from "./styles.module.css";
import TemplateOne from "@/resume-template/template-one";
import Form2 from "../ui/form/forms/form-2/form-2";
import Form1 from "../ui/form/forms/form-1/form-1";
import Form3 from "../ui/form/forms/form-3/form-3";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState<number>(1);

  const handlePage = (event, newValue) => {
    setPage(newValue);
  }
  return (
    <Box className={styles.container}>
      <aside className= {styles.pageContainer}>
        <Box className={styles.formContainer}>
          {
            page === 1 && <Form1 pageControl={setPage}/> ||
            page === 2 && <Form2 pageControl={setPage}/> ||
            page === 3 && <Form3 pageControl={setPage}/>
          }
        </Box>
        
        <Box>
        <Pagination page={page} onChange={handlePage} count={3} color="secondary" />
      </Box>
      </aside>
      <aside>
        <TemplateOne />
      </aside>
    </Box>
    )
  }

