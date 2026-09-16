"use client";

import { Box, Button, Fab, Typography } from "@mui/material";
import styles from "./form-3.module.css";
// import { FormType2, EducationSchema } from "@/app/ui/form/forms/form-2/form2.types";
import { ExperienceSchema, experienceForm } from "@/types/resume";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../input-Field/input-field.tsx";
import { useAppDispatch } from "@/app/hooks";
import { setExperienceData } from "@/features/resume/resume.slice";

const dummyObject = {
  companyName : '',
  startingYear : '',
  endingYear : "",
  role : "",
}

export default function Form3({pageControl}) {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<experienceForm>({
    resolver: zodResolver(ExperienceSchema),
    mode : 'onChange'
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
    rules: {
      minLength: 4,
    },
  });
  const onSubmit: SubmitHandler<experienceForm> = async (data: experienceForm) => {
    console.log("SUCCESS Experience", data);
    dispatch(setExperienceData(data))
  };
  return (
    <Box className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Experience Details</Typography>

        {fields.map((item, index) => {
          return (
            <Box key={item.id} className={styles.inputFields}>
              <Box className = {styles.schoolName}>
                <FormField
                fullWidth = {true}
                  type="text"
                  placeholder="Company Name"
                  name={`test.${index}.companyName`}
                  register={register}
                  error={errors?.test?.[index]?.companyName}
                />
              </Box>

              <Box className={styles.startingYear}>
                <FormField
                  type="text"
                  placeholder="starting year"
                  name={`test.${index}.startingYear`}
                  register={register}
                  error={errors?.test?.[index]?.startingYear}
                />
              </Box>
              <Box className={styles.endingYear}>
                <FormField
                  type="text"
                  placeholder="Ending year"
                  name={`test.${index}.endingYear`}
                  register={register}
                  error={errors?.test?.[index]?.endingYear}
                />
              </Box>
              <Box className={styles.degree}>
                <FormField
                  type="text"
                  placeholder="Role"
                  name={`test.${index}.role`}
                  register={register}
                  error={errors?.test?.[index]?.role}
                />
                
              </Box>
              <p className={styles.null}></p>
              {
                index !== 0 && <Button type="button"
                className={styles.Delete}
                    onClick={() => {remove(index)}}    
                >Delete</Button>
              }
            </Box>
          );
        })}
     
        <Button type="button" 
            onClick={() => append(dummyObject)}
        >Add Experience</Button>

        <Box className={styles.Buttons}>
          <Fab variant="extended" onClick={() => pageControl((prev) => prev - 1)}>Prev</Fab>
          <Fab variant="extended" type="submit">Next</Fab>
        </Box>
      </form>
    </Box>
  );
}
