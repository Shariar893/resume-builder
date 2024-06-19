import * as z from "zod";

export const ProfileSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  description: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
});

export const EducationSchema = z.object({
  id: z.number().optional(),
  education: z.object({
    eduId: z.number().optional(),
    institutionName: z.string(),
    degree: z.string(),
    fieldOfStudy: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    score: z.coerce.number().optional(),
  }),
});
