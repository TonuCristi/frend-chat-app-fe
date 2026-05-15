import z, { ZodError } from "zod";

import { ChatType } from "../types/chat.type";
import { emailSchema } from "./email.schema";

export const chatSchema = z
  .object({
    type: z.enum(Object.values(ChatType), { message: "Chat type invalid!" }),
    name: z
      .string()
      .max(30, {
        message: "The name should't be longer than 30 characters!",
      })
      .optional(),
    recipientEmail: z.string().optional(),
  })
  .refine((data) => !(data.type === ChatType.Group && !data.name), {
    error: "The name field should't be empty!",
    path: ["name"],
  })
  .superRefine((data, ctx) => {
    if (data.type === ChatType.Direct) {
      try {
        emailSchema.parse(data.recipientEmail);
      } catch (error) {
        if (error instanceof ZodError) {
          ctx.addIssue({
            origin: "string",
            code: "invalid_format",
            message: error.issues[0].message,
            format: "recipientEmail",
            path: ["recipientEmail"],
          });
        }
      }
    }
  });

// export const chatSchema = z.discriminatedUnion("type", [
//   z.object({ type: z.literal(ChatType.Direct), recipientEmail: emailSchema }),
//   z.object({
//     type: z.literal(ChatType.Group),
//     name: z
//       .string()
//       .min(1, { message: "This name field should't be empty!" })
//       .max(30, {
//         message: "The name field should't be longer than 30 characters!",
//       }),
//   }),
// ]);
