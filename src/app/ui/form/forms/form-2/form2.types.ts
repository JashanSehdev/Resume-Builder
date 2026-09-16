import z from "zod";

export const IndividualEducationSchema = z.object({
    schoolName : z.string().trim().min(1, { message: "field Required"}),
    startingYear : z.string().trim().min(1, { message: "field Required"}),
    endingYear : z.string().trim().min(1, { message: "field Required"}),
    fieldOfStudy : z.string().trim().min(1, { message: "field Required"}),
    degree : z.string().trim().min(1, { message: "field Required"})
}) 

export const  EducationSchema = z.object({
    test : z.array(IndividualEducationSchema).min(1, {message :"message at least one entry required"})
}) 

export type FormType2 = z.infer<typeof EducationSchema>