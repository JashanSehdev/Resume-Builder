"use client";

import { Box, Button, Fab, Typography } from "@mui/material";
import styles from "./form-3.module.css";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../input-Field/input-field.tsx";
import { useAppDispatch } from "@/app/hooks";
import { setEducationData } from "@/features/resume/resume.slice";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ExperienceSchema, experienceForm } from "./form-3.type";
import { myEmitter } from "@/lib/emitter"


const dummyObject = {
  companyName: "",
  startingYear: "",
  endingYear: "",
  role : ""
};

type Props = {
  pageControl: Dispatch<SetStateAction<number>>;
  // setResume: Dispatch<SetStateAction<Resume>>;
};

export default function Form3({ pageControl }: Props) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch,
  } = useForm<experienceForm>({
    resolver: zodResolver(ExperienceSchema),
    mode: "onChange",
    defaultValues: {
    experience: [
      {
        companyName: "",
        startingYear: "",
        endingYear: "",
        role: "",
      }
    ]
  }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
    rules: {
      minLength: 4,
    },
  });
  const onSubmit: SubmitHandler<experienceForm> = async (
    data: experienceForm,
  ) => {
    console.log("SUCCESS", data);
    dispatch(setEducationData(data));
    pageControl((prev) => prev + 1);
  };

  useEffect(() => {
    const subscription = watch((value, {name, values}) => {
      if (!value.experience) return;

      myEmitter.emit("sendEvent" , {
        experience : value.experience,
      });

    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Box className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Experience Details</Typography>

        {fields.map((item, index) => {
          return (
            <Box key={item.id} className={styles.inputFields}>
              <Box className={styles.schoolName}>
                <FormField
                  fullWidth={true}
                  type="text"
                  placeholder="CompanyName"
                  name={`experience.${index}.companyName`}
                  register={register}
                  error={errors?.experience?.[index]?.companyName}
                />
              </Box>

              <Box className={styles.startingYear}>
                <FormField
                  type="text"
                  placeholder="starting year"
                  name={`experience.${index}.startingYear`}
                  register={register}
                  error={errors?.experience?.[index]?.startingYear}
                />
              </Box>
              <Box className={styles.endingYear}>
                <FormField
                  type="text"
                  placeholder="Ending year"
                  name={`experience.${index}.endingYear`}
                  register={register}
                  error={errors?.experience?.[index]?.endingYear}
                />
              </Box>
              <Box className={styles.degree}>
                <FormField
                  type="text"
                  placeholder="Role"
                  name={`experience.${index}.role`}
                  register={register}
                  error={errors?.experience?.[index]?.role}
                />
              </Box>
              <p className={styles.null}></p>
              {index !== 0 && (
                <Button
                  type="button"
                  className={styles.Delete}
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Delete
                </Button>
              )}
            </Box>
          );
        })}

        <Button type="button" onClick={() => append(dummyObject)}>
          Add Experience
        </Button>

        <Box className={styles.Buttons}>
          <Fab
            variant="extended"
            onClick={() => pageControl((prev) => prev - 1)}
          >
            Prev
          </Fab>
          <Fab variant="extended" type="submit">
            Next
          </Fab>
        </Box>
      </form>
    </Box>
  );
}
