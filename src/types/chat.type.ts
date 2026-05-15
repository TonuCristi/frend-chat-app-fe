import type z from "zod";

import type { chatSchema } from "../schemas/chat.schema";
import type { User } from "./user.type";

export const ChatType = {
  Direct: "direct",
  Group: "group",
} as const;

export const ChatRole = {
  Member: "member",
  Admin: "admin",
} as const;

export type NewChat = z.infer<typeof chatSchema>;

export type ChatMember = Omit<User, "email"> & {
  membershipId: string;
  chatId: string;
  role: "member" | "admin";
};

export type Chat = {
  id: string;
  type: string;
  name?: string;
  recipient: ChatMember;
  createdBy?: User;
  createdAt: string;
};

export type ChatQueryParams = {
  page: number;
  perPage: number;
  type?: (typeof ChatType)[keyof typeof ChatType];
  search?: string;
};
