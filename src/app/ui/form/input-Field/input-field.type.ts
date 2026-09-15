import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";
    

export type FormData = [
    firstName : string,
    secondName : string,
    city: string,
    country: string,
    pinCode : string,
    phone : string,
    email : string,
    photo : string,
]
  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };

    export type ValidFieldNames =
  | "email"
  | "FirstName"
  | "secondName"
  | "city"
  | "country"
  | "pinCode"
  | "phone"
  | "email"
  | "photo"