import type z from "zod";

import type { chatSchema } from "../schemas/chat.schema";
import type { User } from "./user.type";

export const ChatType = {
  Direct: "direct",
  Group: "group",
};

export type NewChat = z.infer<typeof chatSchema> & {
  createdBy?: string | null;
};

export type Chat = {
  id: string;
  type: string;
  name: string | null;
  createdBy: User | null;
};
