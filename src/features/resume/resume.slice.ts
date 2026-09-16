"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Education, Experience, PersonalData } from "./resume.type";
import { experienceForm } from "@/types/resume";
import { dummyPersonalData } from "./resume.data";

type InitialState = {
  personalData: PersonalData | null;
  educationData : Education[] | null;
  experienceData : Experience[] | null
};

const initialState: InitialState = {
  personalData: dummyPersonalData,
  educationData : null,
  experienceData: null
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {

    setPersonalData :  (state, action) => {
      state.personalData = action.payload
    },
    setEducationData : (state, action)  => {
      state.educationData = action.payload;
      console.log("education state: ", state.educationData)
    },
    setExperienceData : (state, action) => {
      state.experienceData = action.payload;
      console.log("From Slice", state.experienceData)
    }

  },
});

export const {setPersonalData, setEducationData, setExperienceData} = resumeSlice.actions;

export default resumeSlice.reducer;
