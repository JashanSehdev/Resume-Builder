import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = [
  firstName: string,
  secondName: string,
  state: string,
  country: string,
  pinCode: string,
  phone: string,
  email: string,
  photo: string,
];
export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  fullWidth?: boolean;
};

export type ValidFieldNames =
  | "email"
  | "FirstName"
  | "secondName"
  | "state"
  | "country"
  | "pinCode"
  | "phone"
  | "email"
  | "photo"
  | "schoolName"
  | "startingYear"
  | "endingYear"
  | "fieldOfStudy"
  | "degree";
