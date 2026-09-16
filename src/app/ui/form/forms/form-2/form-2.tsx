"use client";

import { Box, Button, Fab, Typography } from "@mui/material";
import styles from "./form2.module.css";
// import { FormType2, EducationSchema } from "@/app/ui/form/forms/form-2/form2.types";
import { EducationSchema, educationForm } from "@/types/resume";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../input-Field/input-field.tsx";
import { useAppDispatch } from "@/app/hooks";
import { setEducationData } from "@/features/resume/resume.slice";
import { Education } from "@/types/user-details";

const dummyObject = {
  schoolName : '',
  startingYear : '',
  endingYear : "",
  fieldOfStudy : "",
  degree : ""
}

export default function Form2({pageControl}) {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<educationForm>({
    resolver: zodResolver(EducationSchema),
    mode : 'onChange'
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
    rules: {
      minLength: 4,
    },
  });
  const onSubmit: SubmitHandler<educationForm> = async (data: educationForm) => {
    console.log("SUCCESS", data);
    dispatch(setEducationData(data))
    pageControl((prev) => prev + 1)
  };
  return (
    <Box className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Educational Details</Typography>

        {fields.map((item, index) => {
          return (
            <Box key={item.id} className={styles.inputFields}>
              <Box className = {styles.schoolName}>
                <FormField
                fullWidth = {true}
                  type="text"
                  placeholder="School Name"
                  name={`test.${index}.schoolName`}
                  register={register}
                  error={errors?.test?.[index]?.schoolName}
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
                  placeholder="Degree"
                  name={`test.${index}.degree`}
                  register={register}
                  error={errors?.test?.[index]?.degree}
                />
                
              </Box>
              <Box className={styles.fieldOfStudy}>
                <FormField
                  type="text"
                  placeholder="Field Of Study"
                  name={`test.${index}.fieldOfStudy`}
                  register={register}
                  error={errors?.test?.[index]?.fieldOfStudy}
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
        >Append</Button>

        <Box className={styles.Buttons}>
          <Fab variant="extended" onClick={() =>pageControl((prev) => prev - 1)}>Prev</Fab>
          <Fab variant="extended" type="submit">Next</Fab>
        </Box>
      </form>
    </Box>
  );
}
