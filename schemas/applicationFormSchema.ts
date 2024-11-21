import { z } from "zod";

export const schema = z.object({
  first_name: z.string().min(2, { message: "Username is required" }),
  surname: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^0(97|96|95|77|76|75)\d{7}$/, 'Invalid phone number format'),
});