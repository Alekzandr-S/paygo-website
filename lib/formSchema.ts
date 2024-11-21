import { z } from "zod";

export const jobRoleSchema = z.object({
  role_title: z.string().min(1, { message: "Role title is required" }),
  about_role: z.string().min(1, { message: "About role is required" }),
  expectations: z.string().min(1, { message: "Expectations are required" }),
  qualifications: z.string().min(1, { message: "Qualifications are required" }),
  date_posted: z.date().optional(),
  // status: z.string().optional(),
});