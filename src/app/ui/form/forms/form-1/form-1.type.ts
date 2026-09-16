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
});

export type FormType1 = z.infer<typeof PersonalDetailSchema>;
