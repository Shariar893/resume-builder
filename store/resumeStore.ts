import { create } from "zustand";

import { ResumeStore } from "@/constants/types";
import {
  defaultEducation,
  defaultExperience,
  defaultProfile,
  defaultProject,
  defaultSkill,
} from "@/constants/defaultValues";

const useResumeStore = create<ResumeStore>()((set) => ({
  profile: defaultProfile,
  experiences: [defaultExperience],
  educations: [defaultEducation],
  skills: [defaultSkill],
  projects: [defaultProject],
  setProfile: (profile) => set({ profile }),
  setExperiences: (experiences) => set({ experiences }),
  setEducations: (educations) => set({ educations }),
  setSkills: (skills) => set({ skills }),
  setProjects: (projects) => set({ projects }),
}));

export default useResumeStore;
