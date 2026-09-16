"use client";

import { Box, Button, Fab } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../input-Field/input-field.tsx";
import { FormData } from "../input-Field/input-field.type.ts";
import { PersonalDetails, PersonalDetailSchema } from "@/types/user-details.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./input-form.styles.module.css";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(PersonalDetailSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.formContainer}>
          <Box className={styles.uploadImage}>
            <Box
              component={"img"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIBVURjCqrxrcjtXRC2JU8MmcbZ_0sCqK1o-jJhxbtQ&s=10"
              }
              height={200}
              width={200}
            />
            <Fab color="secondary" variant="extended">
              photo upload
            </Fab>
          </Box>

          <Box className={styles.inputFields}>
            <Box className={styles.upper}>
              <FormField
                type="text"
                placeholder="First Name"
                name="firstName"
                register={register}
                error={errors.firstName}
              />
            </Box>
            <Box>
              <FormField
                type="text"
                placeholder="second Name"
                name="secondName"
                register={register}
                error={errors.secondName}
              />
            </Box>
            <Box>
              <FormField
                type="text"
                placeholder="state"
                name="state"
                register={register}
                error={errors.state}
              />
            </Box>

            <Box>
              <FormField
                type="text"
                placeholder="country"
                name="country"
                register={register}
                error={errors.country}
              />
            </Box>

            <Box>
              <FormField
                type="text"
                placeholder="Pin code"
                name="pinCode"
                register={register}
                error={errors.pinCode}
              />
            </Box>

            <Box>
              <FormField
                type="text"
                placeholder="phone"
                name="phone"
                register={register}
                error={errors.phone}
              />
            </Box>

            <Box>
              <FormField
                type="text"
                placeholder="email"
                name="email"
                register={register}
                error={errors.email}
              />
            </Box>

            <Box>
              <FormField
                type="text"
                placeholder="photo"
                name="photo"
                register={register}
                error={errors.photo}
              />
            </Box>
          </Box>
        </Box>

        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
};

export default InputForm;
