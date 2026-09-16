export type PersonalData = {
  firstName: string | null;
  lastName: string | null;
  state: string | null;
  country: string | null;
  pinCode: string | null;
  phone: string | null;
  email: string | null;
  photo: string | null;
  aboutMe : string | null,
  jobTitle : string | null
};

export type EducationType = {
  education : Education
}
export type Education = {
  schoolName: string | null;
  fieldOfStudy: string | null;
  degree : string | null
  startingYear: number | null;
  endingYear: number | null;
};

export type Experience = {
  companyName: string | null;
  role: string | null;
  startingYear: number | null;
  endingYear: number | null;
};
