import * as z from "zod";
import {
  CertificationSchema,
  EducationSchema,
  ExperienceSchema,
  LanguageSchema,
  ProfileSchema,
  ProjectSchema,
  PublicationSchema,
  SkillSchema,
} from "./schema";
export type Profile = z.infer<typeof ProfileSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type Publication = z.infer<typeof PublicationSchema>;
export type Resume = {
  profile: Profile;
  experiences: Experience;
  educations: Education;
  skills: Skill[];
  projects: Project[];
};

export type ResumeStore = Resume & {
  setProfile: (profile: Profile) => void;
  setExperiences: (experiences: Experience) => void;
  setEducations: (educations: Education) => void;
  setSkills: (skills: Skill[]) => void;
  setProjects: (projects: Project[]) => void;
};
