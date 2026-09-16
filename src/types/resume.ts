import z from "zod";



export const PersonalDetailSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Required" }),
  lastName: z.string().trim().min(1, { message: "Required" }),
  state: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
  pinCode: z.string().trim().min(1, { message: "Required" }),
  phone: z.string().trim().min(1, { message: "Required" }),
  email: z.string().trim().email({ message: "Required" }),
  photo: z.string().trim().optional(),
  jobTitle: z.string().trim().min(1, { message: "Required" }),
  aboutMe: z.string().trim().min(1, { message: "Required" }),
});


export type PersonalDetails = z.infer<typeof PersonalDetailSchema>;


const IndividualEducationSchema = z.object({
    schoolName : z.string().trim().min(1, { message: "field Required"}),
    startingYear :z.string()
  .regex(/^\d{4}$/, "Must be a valid 4-digit year")
  .transform((val) => parseInt(val, 10)),
    endingYear : z.string()
  .regex(/^\d{4}$/, "Must be a valid 4-digit year")
  .transform((val) => parseInt(val, 10)),
    fieldOfStudy : z.string().trim().min(1, { message: "field Required"}),
    degree : z.string().trim().min(1, { message: "field Required"})
}) 

export const  EducationSchema = z.object({
    test : z.array(IndividualEducationSchema).min(1, {message :"message at least one entry required"})
}) 

export type educationForm = z.infer<typeof EducationSchema>;


const IndividualExperienceSchema = z.object({
    companyName : z.string().trim().min(1, { message: "field Required"}),
    startingYear :z.string()
  .regex(/^\d{4}$/, "Must be a valid 4-digit year")
  .transform((val) => parseInt(val, 10)),
    endingYear : z.string()
  .regex(/^\d{4}$/, "Must be a valid 4-digit year")
  .transform((val) => parseInt(val, 10)),
    role : z.string().trim().min(1, { message: "field Required"}),
}) 

export const  ExperienceSchema = z.object({
    test : z.array(IndividualExperienceSchema).min(1, {message :"message at least one entry required"})
}) 

export type experienceForm = z.infer<typeof ExperienceSchema>;