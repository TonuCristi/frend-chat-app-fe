import type z from "zod";

import type { loginSchema } from "../schemas/login.schema";
import type { registerSchema } from "../schemas/register.schema";

export type Login = z.infer<typeof loginSchema>;

export type Register = z.infer<typeof registerSchema>;

export type UserResponse = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
};
