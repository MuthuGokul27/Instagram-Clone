import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }),
  username: z.string().min(2, { message: "Too Short" }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must be More then 8 Characters" }),
});
export const SignuiValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must be More then 8 Characters" }),
});
