import z from "zod";


export const IndividualSkill = z.object({
    skills : z.string().min(1,"Field Requid")
})

export const skillSchema = z.object({
    skills : z.array(IndividualSkill).min(1, {message :"message at least one entry required"})
})

export type skillForm = z.infer<typeof skillSchema>