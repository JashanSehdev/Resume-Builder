"use client";

import { Box, Button, Fab, Typography } from "@mui/material";
import styles from "./form2.module.css";
// import { FormType2, EducationSchema } from "@/app/ui/form/forms/form-2/form2.types";
import { EducationSchema, Resume, educationForm } from "@/types/resume";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../input-Field/input-field.tsx";
import { useAppDispatch } from "@/app/hooks";
import { setEducationData } from "@/features/resume/resume.slice";
import { Dispatch, SetStateAction, useEffect } from "react";

const dummyObject = {
  schoolName: "",
  startingYear: "",
  endingYear: "",
  fieldOfStudy: "",
  degree: "",
};

type Props = {
  pageControl: Dispatch<SetStateAction<number>>;
  setResume: Dispatch<SetStateAction<Resume>>;
};

export default function Form2({ pageControl, setResume }: Props) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch,
  } = useForm<educationForm>({
    resolver: zodResolver(EducationSchema),
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
    rules: {
      minLength: 4,
    },
  });
  const onSubmit: SubmitHandler<educationForm> = async (
    data: educationForm,
  ) => {
    console.log("SUCCESS", data);
    dispatch(setEducationData(data));
    pageControl((prev) => prev + 1);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (!value.education) return;

      setResume((prev) => ({
        ...prev,
        education: value.education as Resume["education"],
      }));
    });

    return () => subscription.unsubscribe();
  }, [watch, setResume]);

  return (
    <Box className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Educational Details</Typography>

        {fields.map((item, index) => {
          return (
            <Box key={item.id} className={styles.inputFields}>
              <Box className={styles.schoolName}>
                <FormField
                  fullWidth={true}
                  type="text"
                  placeholder="School Name"
                  name={`education.${index}.schoolName`}
                  register={register}
                  error={errors?.education?.[index]?.schoolName}
                />
              </Box>

              <Box className={styles.startingYear}>
                <FormField
                  type="text"
                  placeholder="starting year"
                  name={`education.${index}.startingYear`}
                  register={register}
                  error={errors?.education?.[index]?.startingYear}
                />
              </Box>
              <Box className={styles.endingYear}>
                <FormField
                  type="text"
                  placeholder="Ending year"
                  name={`education.${index}.endingYear`}
                  register={register}
                  error={errors?.education?.[index]?.endingYear}
                />
              </Box>
              <Box className={styles.degree}>
                <FormField
                  type="text"
                  placeholder="Degree"
                  name={`education.${index}.degree`}
                  register={register}
                  error={errors?.education?.[index]?.degree}
                />
              </Box>
              <Box className={styles.fieldOfStudy}>
                <FormField
                  type="text"
                  placeholder="Field Of Study"
                  name={`education.${index}.fieldOfStudy`}
                  register={register}
                  error={errors?.education?.[index]?.fieldOfStudy}
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
          Append
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
