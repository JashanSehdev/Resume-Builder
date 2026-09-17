"use client";

import { Box, Button, Fab, Typography } from "@mui/material";
import styles from "./form-4.module.css";
// import { FormType2, EducationSchema } from "@/app/ui/form/forms/form-2/form2.types";
import { ExperienceSchema, Resume, experienceForm } from "@/types/resume";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../input-Field/input-field.tsx";
import { useAppDispatch } from "@/app/hooks";
import { setExperienceData } from "@/features/resume/resume.slice";
import { Dispatch, SetStateAction, useEffect } from "react";
import { skillForm, skillSchema } from "./form-4.type";



type Prop = {
  pageControl : Dispatch<SetStateAction<number>>
  setResume : Dispatch<SetStateAction<Resume>>
}

const dummyObject = {
  skills : ""
}
export default function Form4({pageControl, setResume} : Prop) {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError,
  } = useForm<skillForm>({
    resolver: zodResolver(skillSchema),
    mode : 'onChange'
  })

  useEffect(() => {

      const subscription = watch((value) => {
        if (!value.skills) return;
  
        setResume((prev) => ({
          ...prev,
          skills: value.skills as Resume['skills'] }));
      });
  
      return () => subscription.unsubscribe();
    }, [watch, setResume]);
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
    rules: {
      minLength: 4,
    },
  });
  const onSubmit: SubmitHandler<skillForm> = async (data: skillForm) => {
    console.log("SUCCESS Experience", data);
    dispatch(setExperienceData(data))
  };
  return (
    <Box className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Add your skills</Typography>

        {fields.map((item, index) => {
          return (
            <Box key={item.id} className={styles.inputFields}>
              <Box className = {styles.schoolName}>
                <FormField
                fullWidth = {true}
                  type="text"
                  placeholder="skill"
                  name={`skills.${index}.skill`}
                  register={register}
                  error={errors?.skills?.[index]?.skill}
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
        >Add skills</Button>

        <Box className={styles.Buttons}>
          <Fab variant="extended" onClick={() => pageControl((prev) => prev - 1)}>Prev</Fab>
          <Fab variant="extended" onClick={() => window.print()} type="submit">Print</Fab>
        </Box>
      </form>
    </Box>
  );
}
