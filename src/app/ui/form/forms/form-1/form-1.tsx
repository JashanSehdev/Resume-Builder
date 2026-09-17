"use client";

import { Box, Fab, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import FormField from "../../input-Field/input-field.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./form1.module.css";
import { setPersonalData } from "@/features/resume/resume.slice";
import { useDispatch } from "react-redux";
import {
  PersonalDetails,
  PersonalDetailSchema,
  Resume,
} from "@/types/resume.ts";
import CloudinaryUploader from "./upload-widget.tsx";
import { useAppSelector } from "@/app/hooks.ts";
import { SetStateAction, Dispatch, useEffect } from "react";

export default function Form1({
  pageControl,
  setResume,
}: {
  pageControl: Dispatch<SetStateAction<number>>;
  setResume: Dispatch<SetStateAction<Resume>>;
}) {
  const photo = useAppSelector((state) => state.resume.personalData?.photo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
  } = useForm<PersonalDetails>({
    resolver: zodResolver(PersonalDetailSchema),
    mode: 'onChange'
  });
  console.log("watching Photo: ", watch("photo"));

  const onSubmit: SubmitHandler<PersonalDetails> = async (
    data: PersonalDetails,
  ) => {
    dispatch(setPersonalData(data));
    console.log("SUCCESS", data);
    pageControl((prev) => prev + 1);
  };

  useEffect(() => {
    // 1. Pass a callback function to watch() to subscribe to changes cleanly
    const subscription = watch((value, { name, type }) => {
      // Opt-in to specific fields to minimize state updates

      setResume((prev) => ({
        ...prev,
        personal_details: {
          ...prev.personal_details,
          [name]: value[name],
        },
      }));
    });

    // 2. Unsubscribe when the component unmounts to prevent memory leaks
    return () => subscription.unsubscribe();
  }, [watch]);

  console.log(watch());

  return (
    <Box className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.form}>
          <Typography variant="h1">Personal Details</Typography>

          <Box className={styles.inputFields}>
            <Box className={styles.uploadImage}>
              <input type="text" {...register("photo")} hidden />
              <Box
                sx={{ objectFit: "cover" }}
                component={"img"}
                src={
                  photo === ""
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTMlUueMhaERNUMQGPftBgPnFK3C6u1-By5TcC7Jo7g&s=10"
                    : photo
                }
                height={200}
                width={200}
              />
              {/* <CloudinaryUploader setValue={setValue} /> */}
            </Box>
            <Box className={styles.firstName}>
              <FormField
                type="text"
                placeholder="First Name"
                name="firstName"
                register={register}
                error={errors.firstName}
              />
            </Box>
            <Box className={styles.lastName}>
              <FormField
                type="text"
                placeholder="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName}
              />
            </Box>
            <Box className={styles.state}>
              <FormField
                type="text"
                placeholder="state"
                name="state"
                register={register}
                error={errors.state}
              />
            </Box>

            <Box className={styles.countryCode}>
              <FormField
                type="text"
                placeholder="country"
                name="country"
                register={register}
                error={errors.country}
              />
            </Box>

            <Box className={styles.pinCode}>
              <FormField
                type="text"
                placeholder="Pin code"
                name="pinCode"
                register={register}
                error={errors.pinCode}
              />
            </Box>

            <Box className={styles.phone}>
              <FormField
                type="text"
                placeholder="phone"
                name="phone"
                register={register}
                error={errors.phone}
              />
            </Box>

            <Box className={styles.email}>
              <FormField
                type="text"
                placeholder="email"
                name="email"
                register={register}
                error={errors.email}
                fullWidth={true}
              />
            </Box>

            <Box className={styles.jobTitle}>
              <FormField
                fullWidth={true}
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                register={register}
                error={errors.jobTitle}
              />
            </Box>

            <Box className={styles.aboutMe}>
              <TextField
                id="outlined-multiline-flexible"
                label="About Me"
                placeholder="Describe Yourself"
                multiline
                rows={4}
                error={!!errors.aboutMe}
                helperText={errors.aboutMe?.message}
                {...register("aboutMe")}
                fullWidth
              />
            </Box>
          </Box>
          <Box className={styles.buttons}>
            <p></p>
            <Fab variant="extended" type="submit">
              Next
            </Fab>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
