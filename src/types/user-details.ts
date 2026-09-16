import z from "zod";

export type PersonalDetails = {
  firstName: string;
  secondName: string;
  state: string;
  country: string;
  pinCode: string;
  phone: string;
  email: string;
  photo: string;
};

export type Experience = {
  jobTitle: string;
  Employer: string;
  startDate: Date;
  endDate: Date | string;
  state: string;
  country: string;
};

export type Education = {
  schoolName: string;
  schoolLocation: string;
  fieldOfStudy: string;
  qualification: string;
  graduation: string;
};

export type subject = {
  personal: PersonalDetails;
  experience: Experience;
  education: Education;
  skills: string[];
  summary: string;
};

export const PersonalDetailSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Required" }),
  secondName: z.string().trim().min(1, { message: "Required" }),
  state: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
  pinCode: z.string().trim().min(1, { message: "Required" }),
  phone: z.string().trim().min(1, { message: "Required" }),
  email: z.string().trim().email({ message: "Required" }),
  photo: z.string().trim().min(1, { message: "Required" }),
});
