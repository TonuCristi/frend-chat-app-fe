import { AxiosError, type AxiosResponse } from "axios";

import { apiClient } from "../config/apiClient";
import type { Chat, NewChat } from "../types/chat.type";

const URL = "/api/chats";

export const chatsApi = {
  async newChat(newChat: NewChat) {
    try {
      const res = (await apiClient.post(URL, newChat)) as AxiosResponse<{
        chat: Chat;
        message: string;
      }>;

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
};
