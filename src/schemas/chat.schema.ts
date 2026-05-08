import z from "zod";

import { ChatType } from "../types/chat.type";

export const chatSchema = z.object({
  type: z.enum(Object.values(ChatType), { message: "Chat type invalid!" }),
  name: z.string().nullable().optional(),
});
