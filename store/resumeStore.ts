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
  experiences: [
    {
      id: 1,
      experience: {
        expId: 1,
        role: "Software Engineer",
        company: "Tech Corp",
        location: "New York, NY",
        startDate: "2020-01-01",
        endDate: "2022-01-01",
        description:
          "Developed and maintained web applications using React and Node.js.",
      },
    },
    {
      id: 2,
      experience: {
        expId: 2,
        role: "Junior Developer",
        company: "Web Solutions",
        location: "San Francisco, CA",
        startDate: "2018-06-01",
        endDate: "2019-12-31",
        description:
          "Assisted in the development of client websites and internal tools.",
      },
    },
  ],
  educations: [
    {
      id: 1,
      education: {
        eduId: 1,
        institutionName: "Sample University",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2015-09-01",
        endDate: "2019-06-01",
        description:
          "Studied various topics in computer science including algorithms, data structures, and software engineering.",
        score: 3.8,
      },
    },
    {
      id: 1,
      education: {
        eduId: 2,
        institutionName: "Sample University",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2015-09-01",
        endDate: "2019-06-01",
        description:
          "Studied various topics in computer science including algorithms, data structures, and software engineering.",
        score: 3.8,
      },
    },
  ],
  skills: [
    {
      id: 1,
      skill: {
        skillId: 1,
        skillName: "JavaScript",
        level: "Advanced",
      },
    },
    {
      id: 2,
      skill: {
        skillId: 2,
        skillName: "Python",
        level: "Intermediate",
      },
    },
  ],
  projects: [
    {
      id: 1,
      project: {
        projectName: "samplwe",
        deploymentLink: "asasa",
        projectId: 1,
        projectDescription: "sasasasas",
        repoLink: "asasas",
      },
    },
  ],
  setProfile: (profile) => set({ profile }),
  setExperiences: (experience) =>
    set((state) => ({ experiences: [...state.experiences, experience] })),
  setEducations: (education) =>
    set((state) => ({
      educations: [...state.educations, education],
    })),
  setSkills: (skill) =>
    set((state) => ({
      skills: [...state.skills, skill],
    })),
  setProjects: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),
}));

export default useResumeStore;
