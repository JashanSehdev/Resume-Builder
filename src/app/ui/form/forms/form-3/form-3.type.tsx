import z from "zod";

export const IndividualExperienceSchema = z.object({
    companyName : z.string().trim().min(1, { message: "field Required"}),
    startingYear : z.string().trim().min(1, { message: "field Required"}),
    endingYear : z.string().trim().min(1, { message: "field Required"}),
    role : z.string().trim().min(1, { message: "field Required"}),
}) 

export const  ExperienceSchema = z.object({
    experience : z.array(IndividualExperienceSchema).min(1, {message :"message at least one entry required"})
}) 

export type experienceForm = z.infer<typeof ExperienceSchema>;